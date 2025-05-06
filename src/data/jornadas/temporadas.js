// src/data/jornadas/temporadas.js
export const temporadas = ["2024-2025"];
export const temporadaActual = "2024-2025";

export async function obtenerJornadas() {
  const jornadas = [];

  try {
    // Importa todos los archivos JSON desde cualquier subcarpeta dentro de jornadas/
    const jornadasModulos = import.meta.glob('./**/*.json', { eager: true });

    for (const ruta in jornadasModulos) {
      const jornada = jornadasModulos[ruta].default;

      // Asegúrate de que tiene estructura válida y número
      if (jornada?.info?.numero) {
        jornadas.push(jornada);
      }
    }

    // Ordenar por número descendente
    return jornadas.sort((a, b) => b.info.numero - a.info.numero);
  } catch (error) {
    console.error("Error al cargar las jornadas:", error);
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
