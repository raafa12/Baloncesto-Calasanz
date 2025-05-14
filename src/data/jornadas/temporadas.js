export const temporadas = ["2024-2025"];
export const temporadaActual = "2024-2025";

// ✅ Función robusta para interpretar fechas en formatos comunes
function parseFecha(fechaStr) {
  if (!fechaStr) return null;

  // Detecta formato DD-MM-YYYY y lo convierte a YYYY-MM-DD
  if (/^\d{2}-\d{2}-\d{4}$/.test(fechaStr)) {
    const [dia, mes, anio] = fechaStr.split("-");
    return new Date(`${anio}-${mes}-${dia}`);
  }

  // Si ya es ISO o reconocible, intentar parsearlo directo
  return new Date(fechaStr);
}

export async function obtenerJornadas(temporadaFiltro = null) {
  const jornadas = [];

  try {
    // Cambiamos eager: false a eager: true para asegurar que los módulos se carguen en producción
    const jornadasModulos = import.meta.glob('./**/*.json', { eager: true });

    // Procesamos cada módulo ya cargado (no necesitamos awaits)
    for (const ruta in jornadasModulos) {
      try {
        const jornada = jornadasModulos[ruta];

        // Filtramos por temporada si se especifica
        if (temporadaFiltro && jornada?.info?.temporada && 
            !jornada.info.temporada.includes(temporadaFiltro)) {
          continue;
        }

        // Añadimos todas las jornadas sin comprobar fechaInicio
        jornadas.push(jornada);
      } catch (err) {
        console.error(`❌ Error al cargar ${ruta}:`, err);
      }
    }

    // Ordenar por fecha de inicio descendente (si existe)
    return jornadas.sort((a, b) => {
      const fechaA = a.info?.fechaInicio ? parseFecha(a.info.fechaInicio) : null;
      const fechaB = b.info?.fechaInicio ? parseFecha(b.info.fechaInicio) : null;

      // Si ambas tienen fecha, ordenar por fecha
      if (fechaA && fechaB) {
        const diff = fechaB - fechaA;
        if (diff !== 0) return diff;
      }
      // Si sólo una tiene fecha, la que tiene fecha va primero
      else if (fechaA) return -1;
      else if (fechaB) return 1;

      // Si empatan o ninguna tiene fecha, ordenar por número si ambos lo tienen
      const numA = a.info?.numero ?? 0;
      const numB = b.info?.numero ?? 0;
      return numB - numA;
    });
  } catch (error) {
    console.error("❌ Error al cargar las jornadas:", error);
    return [];
  }
}

export async function obtenerUltimaJornada(temporada = null) {
  const jornadas = await obtenerJornadas(temporada);
  return jornadas[0] || null;
}

export async function obtenerJornadaPorNumero(numero, temporada = null) {
  const jornadas = await obtenerJornadas(temporada);
  return jornadas.find(j => j.info.numero == numero) || null;
}