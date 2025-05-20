import { obtenerUltimaJornada, obtenerJornadaPorNumero } from '@data/jornadas';
import { secciones } from '@data/equipos';

type Jornada = any; // Reemplaza con el tipo correcto si tienes uno
type Resultado = any;

function detectarSeccion(categoria: string | undefined): string | null {
  if (!categoria) return null;
  const categoriaLower = categoria.toLowerCase();

  if (
    categoriaLower.includes("mascul") ||
    categoriaLower.includes("macul") ||
    categoriaLower.endsWith(" m") ||
    categoriaLower.includes(" m ")
  ) return "masculina";

  if (
    categoriaLower.includes("femen") ||
    categoriaLower.endsWith(" f") ||
    categoriaLower.includes(" f ")
  ) return "femenina";

  return null;
}

export async function cargarJornadaConActuaciones({
  jornadaNumero = "ultima",
  seccionSeleccionada = "masculina",
  temporada = null,
}: {
  jornadaNumero?: string;
  seccionSeleccionada?: string;
  temporada?: string | null;
}): Promise<{
  jornada: Jornada | null;
  resultadosFiltrados: Resultado[];
  seccion: { nombre: string; color: string };
}> {
  let jornada: Jornada | null = null;

  if (jornadaNumero === "ultima") {
    jornada = await obtenerUltimaJornada(temporada);
  } else {
    jornada = await obtenerJornadaPorNumero(parseInt(jornadaNumero), temporada);
  }

  const seccion = secciones[seccionSeleccionada] || { nombre: "Sección", color: "gray-500" };
  let resultadosFiltrados: Resultado[] = [];

  if (jornada) {
    resultadosFiltrados = jornada.resultados.filter((r: any) => {
      const seccionDetectada = detectarSeccion(r.categoria);
      return seccionDetectada === null || seccionDetectada === seccionSeleccionada;
    });
  }

  return {
    jornada,
    resultadosFiltrados,
    seccion,
  };
}
