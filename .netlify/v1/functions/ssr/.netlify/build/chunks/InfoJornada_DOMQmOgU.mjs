import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, j as defineScriptVars, k as renderScript } from './astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import 'clsx';
import { e as equiposMasculinos } from './equiposMasculinos_CDPDvJ1W.mjs';
import { e as equiposFemeninos } from './equiposFemeninos_BjTK77Xa.mjs';

const $$Astro$4 = createAstro();
const $$ActuacionDestacada = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ActuacionDestacada;
  const { jugadorNombre, equipo, seccion = "masculina", comentario } = Astro2.props;
  function buscarJugador(nombre, seccion2) {
    const equipos = seccion2 === "masculina" ? equiposMasculinos : equiposFemeninos;
    for (const equipoData of equipos) {
      const jugador2 = equipoData.miembros?.find(
        (miembro) => miembro.nombre.toLowerCase() === nombre.toLowerCase()
      );
      if (jugador2) {
        return {
          ...jugador2,
          equipo: equipoData.nombre
        };
      }
      const entrenador = equipoData.entrenadores?.find(
        (entrenador2) => entrenador2.nombre.toLowerCase() === nombre.toLowerCase()
      );
      if (entrenador) {
        return {
          ...entrenador,
          equipo: equipoData.nombre
        };
      }
    }
    return {
      nombre,
      foto: "/api/placeholder/150/150",
      equipo: equipo || "Equipo no especificado"
    };
  }
  const jugador = buscarJugador(jugadorNombre, seccion);
  return renderTemplate`${maybeRenderHead()}<div class="mt-4 border-l-2 border-green-500 pl-3"> <div class="flex items-center"> <img${addAttribute(jugador.foto, "src")}${addAttribute(`Foto de ${jugador.nombre}`, "alt")} class="w-14 h-14 object-cover rounded-full shadow-md border border-green-700" onerror="this.src='/images/placeholder-player.png'"> <div class="ml-3"> <div class="flex items-center"> <h4 class="text-white font-medium">${jugador.nombre}</h4> <span class="ml-2 bg-green-800 px-2 py-0.5 rounded-sm text-xs text-green-100 font-medium">MVP</span> </div> ${comentario && renderTemplate`<p class="text-gray-300 text-sm mt-1 italic">${comentario}</p>`} </div> </div> </div>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/ResultadosJornada/ActuacionDestacada.astro", void 0);

const $$Astro$3 = createAstro();
const $$ResultadoCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ResultadoCard;
  const { resultado, seccion = "masculina" } = Astro2.props;
  const {
    categoria,
    local,
    visitante,
    puntosLocal,
    puntosVisitante,
    fecha,
    hora,
    lugar,
    jugadorDestacado,
    comentarioJugador
  } = resultado;
  let estado = "";
  let claseEstado = "";
  if (puntosLocal !== null && puntosVisitante !== null) {
    const esCalasanzLocal = local.includes("CALASANZ");
    const puntosCalasanz = esCalasanzLocal ? puntosLocal : puntosVisitante;
    const puntosRival = esCalasanzLocal ? puntosVisitante : puntosLocal;
    if (puntosCalasanz > puntosRival) {
      estado = "VICTORIA";
      claseEstado = "bg-green-700";
    } else if (puntosCalasanz < puntosRival) {
      estado = "DERROTA";
      claseEstado = "bg-red-700";
    } else if (puntosCalasanz === puntosRival) {
      estado = "EMPATE";
      claseEstado = "bg-yellow-700";
    }
  } else {
    estado = "NO JUGADO";
    claseEstado = "bg-gray-700";
  }
  return renderTemplate`<!-- src/components/ResultadosJornada/ResultadoCard.astro -->${maybeRenderHead()}<div class="bg-green-950 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl max-w-full"> <div class="p-3 sm:p-4 md:p-6"> <div class="flex justify-between items-center mb-3 sm:mb-4"> <div class="text-green-300 font-medium text-sm sm:text-base"> ${categoria} </div> <div${addAttribute(`${claseEstado} px-2 sm:px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium`, "class")}> ${estado} </div> </div> <!-- Equipos y resultado - Layout optimizado para móvil --> <div class="bg-green-900 bg-opacity-30 p-3 sm:p-4 md:p-6 rounded-lg"> <!-- Layout para móvil (columna) --> <div class="block md:hidden"> <div class="flex flex-col space-y-3"> <!-- Equipo local con marcador --> <div class="flex items-center justify-between"> <p${addAttribute(`text-sm sm:text-base font-semibold flex-grow ${local.includes("CALASANZ") ? "text-green-400" : "text-white"}`, "class")}> ${local} </p> ${puntosLocal !== null && puntosVisitante !== null ? renderTemplate`<div class="text-base sm:text-lg font-bold text-white ml-2"> ${puntosLocal} </div>` : renderTemplate`<div class="text-xs sm:text-sm font-medium text-gray-400"> ${fecha ? fecha : "-"} </div>`} </div> <!-- Equipo visitante con marcador --> <div class="flex items-center justify-between"> <p${addAttribute(`text-sm sm:text-base font-semibold flex-grow ${visitante.includes("CALASANZ") ? "text-green-400" : "text-white"}`, "class")}> ${visitante} </p> ${puntosLocal !== null && puntosVisitante !== null ? renderTemplate`<div class="text-base sm:text-lg font-bold text-white ml-2"> ${puntosVisitante} </div>` : renderTemplate`<div class="text-xs sm:text-sm font-medium text-gray-400"> ${hora ? hora : "-"} </div>`} </div> </div> </div> <!-- Layout para escritorio (fila) --> <div class="hidden md:flex flex-row justify-between items-center"> <div class="flex-1 text-left"> <p${addAttribute(`text-xl font-semibold ${local.includes("CALASANZ") ? "text-green-400" : "text-white"}`, "class")}> ${local} </p> </div> <div class="px-4 flex justify-center items-center"> ${puntosLocal !== null && puntosVisitante !== null ? renderTemplate`<div class="text-4xl font-bold text-white"> ${puntosLocal} - ${puntosVisitante} </div>` : renderTemplate`<div class="text-lg font-medium text-gray-400"> ${fecha && hora ? `${fecha} - ${hora}` : "Por determinar"} </div>`} </div> <div class="flex-1 text-right"> <p${addAttribute(`text-xl font-semibold ${visitante.includes("CALASANZ") ? "text-green-400" : "text-white"}`, "class")}> ${visitante} </p> </div> </div> </div> <!-- Información adicional --> ${(fecha || hora || lugar) && renderTemplate`<div class="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 flex flex-wrap items-center"> ${fecha && renderTemplate`<span class="mr-3 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> ${fecha} </span>`} ${hora && renderTemplate`<span class="mr-3 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${hora} </span>`} ${lugar && renderTemplate`<span class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${lugar} </span>`} </div>`} <!-- Actuación destacada --> ${jugadorDestacado && comentarioJugador && renderTemplate`<div class="mt-4"> ${renderComponent($$result, "ActuacionDestacada", $$ActuacionDestacada, { "jugadorNombre": jugadorDestacado, "equipo": categoria, "seccion": seccion, "comentario": comentarioJugador })} </div>`} </div> </div>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/resultados/ResultadoCard.astro", void 0);

// src/data/equipos.js
  
  const secciones = {
    "masculina": {
      nombre: "Sección Masculina",
      color: "blue-500"
    },
    "femenina": {
      nombre: "Sección Femenina",
      color: "pink-500"
    }
  };

const info$2 = {"numero":1,"temporada":"24-25","fechaInicio":"03-05-2025","fechaFin":"07-05-2025","tipo":"Amistosos Final de Temporada"};
const resultados$2 = [{"categoria":"Alevin Femenino","local":"CALASANZ B","visitante":"KELLS SCHOOL","puntosLocal":32,"puntosVisitante":40,"fecha":"03-05-2025","hora":"10:00","lugar":"Pabellón Calasanz","jugadorDestacado":"","comentarioJugador":""},{"categoria":"Benjamin Femenino","local":"CALASANZ","visitante":"MIMOONDO-ROJO-TVGA","puntosLocal":61,"puntosVisitante":42,"fecha":"03-05-2025","hora":"12:00","lugar":"Pabellón Calasanz","jugadorDestacado":"","comentarioJugador":""},{"categoria":"Junior Maculina","local":"MIMOONDO-AZUL-TVGA","visitante":"CALASANZ","puntosLocal":54,"puntosVisitante":78,"fecha":"04-05-2025","hora":"10:00","lugar":"PABELLON MARIA PARDO","jugadorDestacado":"Pablo Miguel Zubieta","comentarioJugador":"30 puntos en 27 minutos"},{"categoria":"Infantil masculina","local":"CALASANZ","visitante":"CD Esclavas","puntosLocal":32,"puntosVisitante":35,"fecha":"07-05-2025","hora":"17:00","lugar":"Pabellón Calasanz","jugadorDestacado":"Ivan Diaz","comentarioJugador":"Gran defensa durante todo el partido"}];
const amistosoSemana1 = {
  info: info$2,
  resultados: resultados$2,
};

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: amistosoSemana1,
  info: info$2,
  resultados: resultados$2
}, Symbol.toStringTag, { value: 'Module' }));

const info$1 = {"numero":2,"temporada":"24-25","fechaInicio":"10-05-2025","fechaFin":"10-05-2025","tipo":"Amistosos Final de Temporada"};
const resultados$1 = [{"categoria":"Benjamin Femenina","local":"VENTANAS ARSAN ASTILLERO","visitante":"CALASANZ","puntosLocal":68,"puntosVisitante":49,"fecha":"10-05-2025","hora":"9:30","lugar":"Pabellon la Cantabrica","jugadorDestacado":"Noemí Díez","comentarioJugador":"Gran actividad defensiva que le permitió robar muchos balones que se traducían en canastas fáciles al contraataque"},{"categoria":"Intantil Masculina","local":"CANTBASKET04 2012","visitante":"CALASANZ","puntosLocal":45,"puntosVisitante":43,"fecha":"10-05-2025","hora":"11:00","lugar":"Pabellon  Marcelino Botín","jugadorDestacado":"Mario Domínguez","comentarioJugador":"Sólida aportación ofensiva con 18 puntos"},{"categoria":"Alevin Femenina B","local":"BEZANA B","visitante":"CALASANZ","puntosLocal":68,"puntosVisitante":49,"fecha":"10-05-2025","hora":"11:30","lugar":"Pabellon Mompia","jugadorDestacado":"Vera García","comentarioJugador":"Muy acertada en ataque con 2 triples y numerosas bandejas al aro"},{"categoria":"Junior Masculina","local":"CALASANZ","visitante":"RAISAN ELOY VILLANUEVA","puntosLocal":56,"puntosVisitante":69,"fecha":"10-05-2025","hora":"12:30","lugar":"Pabellon Calasanz","jugadorDestacado":"Gonzalo Vega","comentarioJugador":"Eficiente en ambos lados de la cancha"}];
const amistosoSemana2 = {
  info: info$1,
  resultados: resultados$1,
};

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: amistosoSemana2,
  info: info$1,
  resultados: resultados$1
}, Symbol.toStringTag, { value: 'Module' }));

const info = {"numero":3,"temporada":"24-25","fechaInicio":"16-05-2025","fechaFin":"18-05-2025","tipo":"Amistosos Final de Temporada"};
const resultados = [{"categoria":"Junior Masculina","local":"CANBASKET B","visitante":"CALASANZ","puntosLocal":77,"puntosVisitante":76,"fecha":"16-05-2025","hora":"19:40","lugar":"Pabellón Numancia","jugadorDestacado":"Alexander Gómez","comentarioJugador":"Dominio absoluto bajo los tableros"},{"categoria":"Alevin Femenina","local":"CALASANZ B","visitante":"AGUSTINOS ROJO","puntosLocal":34,"puntosVisitante":76,"fecha":"17-05-2025","hora":"9:30","lugar":"Pabellón Calasanz","jugadorDestacado":"Vera García","comentarioJugador":"Muy acertada en ataque con 2 triples y numerosas bandejas al aro"},{"categoria":"Cadete Masculino","local":"CALASANZ","visitante":"MEDIO CUDEYO BLANCO","puntosLocal":33,"puntosVisitante":43,"fecha":"17-05-2025","hora":"11:15","lugar":"Pabellón Calasanz","jugadorDestacado":"Mario Domínguez","comentarioJugador":"Valentía y descaro"},{"categoria":"Infantil Masculina","local":"CALASANZ","visitante":"ADB SANTOÑA ARGENFRIO","puntosLocal":56,"puntosVisitante":35,"fecha":"17-05-2025","hora":"13:00","lugar":"Pabellón Calasanz","jugadorDestacado":"Mario Domínguez","comentarioJugador":"22 puntos en 24 minutos"},{"categoria":"Infantil Femenina","local":"CALASANZ","visitante":"MEDIO CUDEYO ROJO","puntosLocal":31,"puntosVisitante":69,"fecha":"18-05-2025","hora":"9:30","lugar":"Pabellón Calasanz","jugadorDestacado":"Noemí Díez","comentarioJugador":"Gran actividad defensiva que le permitió robar muchos balones que se traducían en canastas fáciles al contraataque"}];
const amistosoSemana3 = {
  info,
  resultados,
};

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: amistosoSemana3,
  info,
  resultados
}, Symbol.toStringTag, { value: 'Module' }));

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

async function obtenerJornadas(temporadaFiltro = null) {
  const jornadas = [];

  try {
    // Cambiamos eager: false a eager: true para asegurar que los módulos se carguen en producción
    const jornadasModulos = /* #__PURE__ */ Object.assign({"./24-25/amistoso-semana1.json": __vite_glob_0_0,"./24-25/amistoso-semana2.json": __vite_glob_0_1,"./24-25/amistoso-semana3.json": __vite_glob_0_2});

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

async function obtenerUltimaJornada(temporada = null) {
  const jornadas = await obtenerJornadas(temporada);
  return jornadas[0] || null;
}

async function obtenerJornadaPorNumero(numero, temporada = null) {
  const jornadas = await obtenerJornadas(temporada);
  return jornadas.find(j => j.info.numero == numero) || null;
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$ResultadosJornadaConActuaciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ResultadosJornadaConActuaciones;
  let { jornada: jornadaNumero = "ultima", seccion: seccionSeleccionada = "todas" } = Astro2.props;
  let jornada = null;
  let resultadosFiltrados = [];
  let resultadosMasculinos = [];
  let resultadosFemeninos = [];
  let seccion = { nombre: "Secci\xF3n", color: "gray-500" };
  function detectarSeccion(categoria) {
    if (!categoria) return null;
    const categoriaLower = categoria.toLowerCase();
    if (categoriaLower.includes("mascul") || categoriaLower.includes("macul") || categoriaLower.endsWith(" m") || categoriaLower.includes(" m ")) {
      return "masculina";
    }
    if (categoriaLower.includes("femen") || categoriaLower.endsWith(" f") || categoriaLower.includes(" f ")) {
      return "femenina";
    }
    return null;
  }
  async function obtenerJornada() {
    try {
      if (jornadaNumero === "ultima") {
        jornada = await obtenerUltimaJornada();
      } else {
        jornada = await obtenerJornadaPorNumero(parseInt(jornadaNumero));
      }
      seccion = secciones[seccionSeleccionada] || { nombre: "Secci\xF3n", color: "gray-500" };
      if (jornada) {
        resultadosMasculinos = jornada.resultados.filter((r) => {
          const seccionDetectada = detectarSeccion(r.categoria);
          return seccionDetectada === "masculina" || seccionDetectada === null;
        });
        resultadosFemeninos = jornada.resultados.filter((r) => {
          const seccionDetectada = detectarSeccion(r.categoria);
          return seccionDetectada === "femenina";
        });
        if (seccionSeleccionada === "todas") {
          resultadosFiltrados = jornada.resultados;
        } else {
          resultadosFiltrados = jornada.resultados.filter((r) => {
            const seccionDetectada = detectarSeccion(r.categoria);
            if (seccionDetectada === null) {
              return seccionSeleccionada === "masculina";
            }
            return seccionDetectada === seccionSeleccionada;
          });
        }
      }
      return jornada;
    } catch (err) {
      console.error("Error cargando la jornada:", err);
      return null;
    }
  }
  await obtenerJornada();
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", `
  // Funci\xF3n para actualizar la URL
  function actualizarURL(nuevaJornada, nuevaSeccion) {
    const url = new URL(window.location.href);
    url.searchParams.set('jornada', nuevaJornada || jornadaNumero);
    url.searchParams.set('seccion', nuevaSeccion || seccionSeleccionada);
    window.history.pushState({}, '', url.toString());
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  // Escuchar cambios en la URL
  window.addEventListener('popstate', async () => {
    const nuevaJornada = new URLSearchParams(window.location.search).get('jornada') || "ultima";
    const nuevaSeccion = new URLSearchParams(window.location.search).get('seccion') || "todas";
    
    // Actualizar props
    if (nuevaJornada !== jornadaNumero || nuevaSeccion !== seccionSeleccionada) {
      location.reload();
    }
  });
})();<\/script> `, ""])), defineScriptVars({ jornadaNumero, seccionSeleccionada }), !jornada ? renderTemplate`${maybeRenderHead()}<div class="bg-red-900 text-white p-4 rounded">
No se encontraron datos para la jornada seleccionada. (Jornada: ${jornadaNumero})
</div>` : renderTemplate`<div class="resultados-jornada overflow-x-hidden w-full">${seccionSeleccionada === "todas" ? renderTemplate`<div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!-- Sección Masculina --><div class="bg-green-900 bg-opacity-20 rounded-xl p-4 md:p-6 shadow-md"><div class="flex items-center mb-4 border-b border-green-700 pb-2"><div class="w-2 h-6 bg-blue-500 mr-3 rounded"></div><h4 class="text-lg font-semibold text-white flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
Sección Masculina
</h4></div>${resultadosMasculinos.length > 0 ? renderTemplate`<div class="grid grid-cols-1 gap-6">${resultadosMasculinos.map((resultado) => renderTemplate`${renderComponent($$result, "ResultadoCard", $$ResultadoCard, { "resultado": resultado, "seccion": "masculina" })}`)}</div>` : renderTemplate`<div class="text-gray-400 text-center py-6 bg-green-950 bg-opacity-40 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
No hay resultados disponibles
</div>`}</div><!-- Sección Femenina --><div class="bg-green-900 bg-opacity-20 rounded-xl p-4 md:p-6 shadow-md"><div class="flex items-center mb-4 border-b border-green-700 pb-2"><div class="w-2 h-6 bg-pink-500 mr-3 rounded"></div><h4 class="text-lg font-semibold text-white flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
Sección Femenina
</h4></div>${resultadosFemeninos.length > 0 ? renderTemplate`<div class="grid grid-cols-1 gap-6">${resultadosFemeninos.map((resultado) => renderTemplate`${renderComponent($$result, "ResultadoCard", $$ResultadoCard, { "resultado": resultado, "seccion": "femenina" })}`)}</div>` : renderTemplate`<div class="text-gray-400 text-center py-6 bg-green-950 bg-opacity-40 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
No hay resultados disponibles
</div>`}</div></div></div>` : renderTemplate`<div><div class="grid grid-cols-1 gap-6">${resultadosFiltrados.length > 0 ? resultadosFiltrados.map((resultado) => renderTemplate`${renderComponent($$result, "ResultadoCard", $$ResultadoCard, { "resultado": resultado, "seccion": seccionSeleccionada })}`) : renderTemplate`<div class="text-gray-400 text-center py-6 bg-green-950 bg-opacity-40 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p>No hay resultados disponibles para esta sección en la jornada seleccionada.</p></div>`}</div></div>`}${seccionSeleccionada === "todas" && resultadosMasculinos.length === 0 && resultadosFemeninos.length === 0 && renderTemplate`<div class="text-gray-400 text-center py-6 bg-green-950 bg-opacity-40 rounded-lg col-span-2 mt-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p>No hay resultados disponibles para esta jornada.</p></div>`}</div>`);
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/resultados/ResultadosJornadaConActuaciones.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$SelectorJornada = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SelectorJornada;
  const { jornadas = [], jornadaSeleccionada = "ultima", seccion = "todas" } = Astro2.props;
  jornadas.sort((a, b) => {
    const numA = a?.info?.numero || 0;
    const numB = b?.info?.numero || 0;
    return numB - numA;
  });
  const obtenerTextoJornada = (jornada) => {
    const { info } = jornada;
    if (!info) return "Jornada sin informaci\xF3n";
    let texto = `Jornada ${info.numero}`;
    if (info.fechaInicio) {
      const formatoFecha = (fecha) => {
        if (!fecha) return "";
        if (/^\d{2}-\d{2}-\d{4}$/.test(fecha)) {
          const [dia, mes] = fecha.split("-");
          return `${dia}/${mes}`;
        }
        return fecha;
      };
      texto += ` (${formatoFecha(info.fechaInicio)}`;
      if (info.fechaFin && info.fechaFin !== info.fechaInicio) {
        texto += ` - ${formatoFecha(info.fechaFin)}`;
      }
      texto += ")";
    }
    if (info.tipo) {
      texto += ` - ${info.tipo}`;
    }
    return texto;
  };
  const jornadasOrdenadas = jornadas.sort((a, b) => {
    return (b?.info?.numero || 0) - (a?.info?.numero || 0);
  });
  const jornadaActual = jornadaSeleccionada === "ultima" ? jornadas[0]?.info?.numero : parseInt(jornadaSeleccionada) || jornadas[0]?.info?.numero;
  return renderTemplate(_a || (_a = __template(["", '<div class="selector-jornada"> <div class="flex flex-col space-y-6"> <!-- Selector de Jornada (con formulario) --> <div class="relative mx-auto w-full md:w-2/3 lg:w-1/2"> <label for="select-jornada" class="block text-white text-sm font-medium mb-2">Selecciona una jornada:</label> <form id="form-jornada" method="get" action="javascript:void(0);"> <div class="relative"> <select id="select-jornada" name="id" class="block w-full bg-green-950 text-white border border-green-700 rounded-lg py-3 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 text-lg" onchange="cambiarJornada(this.value);"> ', ' </select> <input type="hidden" name="seccion"', '> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white"> <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path> </svg> </div> </div> </form> </div> <!-- Botones de Secci\xF3n (optimizado para m\xF3vil) --> <div class="mt-4"> <div class="flex justify-center mb-2"> <span class="text-white text-sm font-medium">Filtrar por secci\xF3n:</span> </div> <div class="grid grid-cols-3 gap-2 sm:gap-4"> <a', "", '> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1 sm:mb-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span class="text-xs sm:text-base">Masculina</span> </a> <a', "", '> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1 sm:mb-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path> </svg> <span class="text-xs sm:text-base">Todas</span> </a> <a', "", '> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1 sm:mb-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span class="text-xs sm:text-base">Femenina</span> </a> </div> </div> <!-- Elemento oculto para pasar jornadaActual al script --> <div', " class=\"hidden\"></div> </div> </div> <script>\n  // Funci\xF3n para cambiar de jornada\n  function cambiarJornada(jornadaId) {\n    // Obtener la secci\xF3n actual\n    const seccionInput = document.querySelector('input[name=\"seccion\"]');\n    const seccion = seccionInput ? seccionInput.value : 'todas';\n    \n    // Construir la URL correcta\n    const nuevaUrl = `/resultados/jornada/${jornadaId}?seccion=${seccion}`;\n    \n    // Redirigir a la nueva URL\n    window.location.href = nuevaUrl;\n  }\n  \n  // Asegurarnos de que el script se ejecute despu\xE9s de que el DOM est\xE9 completamente cargado\n  document.addEventListener('DOMContentLoaded', () => {\n    // Obtener el elemento select\n    const selectJornada = document.getElementById('select-jornada');\n    \n    if (selectJornada) {\n      // Inicializar el valor del selector con el valor actual\n      const jornadaActualElement = document.querySelector('[data-jornada-actual]');\n      const jornadaActual = jornadaActualElement ? jornadaActualElement.getAttribute('data-jornada-actual') : null;\n      \n      if (jornadaActual) {\n        selectJornada.value = jornadaActual;\n      }\n      \n      // Verificar que el selector funcione correctamente\n      console.log('Selector de jornada inicializado con valor:', selectJornada.value);\n    } else {\n      console.error('No se encontr\xF3 el elemento select-jornada');\n    }\n  });\n<\/script>"], ["", '<div class="selector-jornada"> <div class="flex flex-col space-y-6"> <!-- Selector de Jornada (con formulario) --> <div class="relative mx-auto w-full md:w-2/3 lg:w-1/2"> <label for="select-jornada" class="block text-white text-sm font-medium mb-2">Selecciona una jornada:</label> <form id="form-jornada" method="get" action="javascript:void(0);"> <div class="relative"> <select id="select-jornada" name="id" class="block w-full bg-green-950 text-white border border-green-700 rounded-lg py-3 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 text-lg" onchange="cambiarJornada(this.value);"> ', ' </select> <input type="hidden" name="seccion"', '> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white"> <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path> </svg> </div> </div> </form> </div> <!-- Botones de Secci\xF3n (optimizado para m\xF3vil) --> <div class="mt-4"> <div class="flex justify-center mb-2"> <span class="text-white text-sm font-medium">Filtrar por secci\xF3n:</span> </div> <div class="grid grid-cols-3 gap-2 sm:gap-4"> <a', "", '> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1 sm:mb-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span class="text-xs sm:text-base">Masculina</span> </a> <a', "", '> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1 sm:mb-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path> </svg> <span class="text-xs sm:text-base">Todas</span> </a> <a', "", '> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1 sm:mb-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span class="text-xs sm:text-base">Femenina</span> </a> </div> </div> <!-- Elemento oculto para pasar jornadaActual al script --> <div', " class=\"hidden\"></div> </div> </div> <script>\n  // Funci\xF3n para cambiar de jornada\n  function cambiarJornada(jornadaId) {\n    // Obtener la secci\xF3n actual\n    const seccionInput = document.querySelector('input[name=\"seccion\"]');\n    const seccion = seccionInput ? seccionInput.value : 'todas';\n    \n    // Construir la URL correcta\n    const nuevaUrl = \\`/resultados/jornada/\\${jornadaId}?seccion=\\${seccion}\\`;\n    \n    // Redirigir a la nueva URL\n    window.location.href = nuevaUrl;\n  }\n  \n  // Asegurarnos de que el script se ejecute despu\xE9s de que el DOM est\xE9 completamente cargado\n  document.addEventListener('DOMContentLoaded', () => {\n    // Obtener el elemento select\n    const selectJornada = document.getElementById('select-jornada');\n    \n    if (selectJornada) {\n      // Inicializar el valor del selector con el valor actual\n      const jornadaActualElement = document.querySelector('[data-jornada-actual]');\n      const jornadaActual = jornadaActualElement ? jornadaActualElement.getAttribute('data-jornada-actual') : null;\n      \n      if (jornadaActual) {\n        selectJornada.value = jornadaActual;\n      }\n      \n      // Verificar que el selector funcione correctamente\n      console.log('Selector de jornada inicializado con valor:', selectJornada.value);\n    } else {\n      console.error('No se encontr\xF3 el elemento select-jornada');\n    }\n  });\n<\/script>"])), maybeRenderHead(), jornadasOrdenadas.map((jornada) => renderTemplate`<option${addAttribute(jornada.info.numero, "value")}${addAttribute(jornadaActual === jornada.info.numero, "selected")}> ${obtenerTextoJornada(jornada)} </option>`), addAttribute(seccion, "value"), addAttribute(`/resultados/jornada/${jornadaActual}?seccion=masculina`, "href"), addAttribute(`flex flex-col sm:flex-row items-center justify-center py-3 px-2 sm:px-4 rounded-lg transition-colors shadow-md text-white font-medium ${seccion === "masculina" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-800 hover:bg-green-700"}`, "class"), addAttribute(`/resultados/jornada/${jornadaActual}?seccion=todas`, "href"), addAttribute(`flex flex-col sm:flex-row items-center justify-center py-3 px-2 sm:px-4 rounded-lg transition-colors shadow-md text-white font-medium ${seccion === "todas" ? "bg-green-600 hover:bg-green-700" : "bg-green-800 hover:bg-green-700"}`, "class"), addAttribute(`/resultados/jornada/${jornadaActual}?seccion=femenina`, "href"), addAttribute(`flex flex-col sm:flex-row items-center justify-center py-3 px-2 sm:px-4 rounded-lg transition-colors shadow-md text-white font-medium ${seccion === "femenina" ? "bg-pink-600 hover:bg-pink-700" : "bg-green-800 hover:bg-green-700"}`, "class"), addAttribute(jornadaActual.toString(), "data-jornada-actual"));
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/resultados/jornada/SelectorJornada.astro", void 0);

const $$Astro = createAstro();
const $$InfoJornada = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoJornada;
  let { jornada: jornadaNumero = "ultima" } = Astro2.props;
  let jornada = null;
  async function obtenerJornada() {
    try {
      if (jornadaNumero === "ultima") {
        jornada = await obtenerUltimaJornada();
      } else {
        jornada = await obtenerJornadaPorNumero(parseInt(jornadaNumero));
      }
      return jornada;
    } catch (err) {
      console.error("Error cargando la jornada:", err);
      return null;
    }
  }
  await obtenerJornada();
  function formatearFechaJornada(jornada2) {
    if (!jornada2?.info) return "";
    const { fechaInicio, fechaFin } = jornada2.info;
    if (!fechaInicio) return "";
    const formatearFecha = (fechaStr) => {
      if (!fechaStr) return "";
      if (/^\d{2}-\d{2}-\d{4}$/.test(fechaStr)) {
        const [dia, mes, anio] = fechaStr.split("-");
        const meses = [
          "enero",
          "febrero",
          "marzo",
          "abril",
          "mayo",
          "junio",
          "julio",
          "agosto",
          "septiembre",
          "octubre",
          "noviembre",
          "diciembre"
        ];
        return `${dia} de ${meses[parseInt(mes) - 1]}`;
      }
      return fechaStr;
    };
    if (fechaInicio && fechaFin && fechaInicio !== fechaFin) {
      return `${formatearFecha(fechaInicio)} - ${formatearFecha(fechaFin)}`;
    }
    return formatearFecha(fechaInicio);
  }
  return renderTemplate`${renderScript($$result, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/resultados/InfoJornada.astro?astro&type=script&index=0&lang.ts")} ${!jornada ? renderTemplate`${maybeRenderHead()}<div class="bg-red-900 text-white p-4 rounded">
No se encontraron datos para la jornada seleccionada. (Jornada: ${jornadaNumero})
</div>` : renderTemplate`<div class="info-jornada mb-8 text-center"><div class="bg-green-800 bg-opacity-30 rounded-lg inline-block px-6 py-4"><h3 class="text-xl font-bold text-white">
Jornada ${jornada.info.numero}${jornada.info.tipo && renderTemplate`<span class="block text-sm font-normal text-green-300">${jornada.info.tipo}</span>`}</h3><p class="text-green-200 mt-1">${formatearFechaJornada(jornada)}</p></div></div>`}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/resultados/InfoJornada.astro", void 0);

export { $$SelectorJornada as $, $$InfoJornada as a, $$ResultadosJornadaConActuaciones as b, obtenerJornadas as o, secciones as s };
