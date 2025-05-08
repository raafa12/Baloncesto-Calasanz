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

export async function obtenerJornadas() {
  const jornadas = [];

  try {
    const jornadasModulos = import.meta.glob('./**/*.json', { eager: true });

    for (const ruta in jornadasModulos) {
      const jornada = jornadasModulos[ruta].default;

      // Solo incluir si tiene fechaInicio válida
      if (jornada?.info?.fechaInicio) {
        jornadas.push(jornada);
      } else {
        console.warn(`⚠️  Archivo ignorado por falta de info.fechaInicio: ${ruta}`);
      }
    }

    // Ordenar por fecha de inicio descendente
    return jornadas.sort((a, b) => {
      const fechaA = parseFecha(a.info.fechaInicio);
      const fechaB = parseFecha(b.info.fechaInicio);

      if (fechaA && fechaB) {
        const diff = fechaB - fechaA;
        if (diff !== 0) return diff;
      }

      // Si empatan, ordenar por número si ambos lo tienen
      const numA = a.info.numero ?? 0;
      const numB = b.info.numero ?? 0;
      return numB - numA;
    });
  } catch (error) {
    console.error("❌ Error al cargar las jornadas:", error);
    return [];
  }
}

export async function obtenerUltimaJornada() {
  const jornadas = await obtenerJornadas();
  return jornadas[0] || null;
}

export async function obtenerJornadaPorNumero(numero) {
  const jornadas = await obtenerJornadas();
  return jornadas.find(j => j.info.numero == numero) || null;
}
