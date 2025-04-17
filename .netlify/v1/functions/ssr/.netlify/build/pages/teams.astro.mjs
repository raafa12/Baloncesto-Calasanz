/* empty css                                   */
import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_ClUm7ASJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$SectionContainer } from '../chunks/SectionContainer_L9yUcmDO.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_DHDeXzSS.mjs';
import { $ as $$Teams$1 } from '../chunks/Teams_oa80GKrO.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ResultadosJornada = createComponent(($$result, $$props, $$slots) => {
  const resultados = [
    {
      categoria: "Junior Masculino",
      local: "CB Calasanz",
      visitante: "CB Estudiantes",
      puntosLocal: 78,
      puntosVisitante: 65,
      fecha: "14/04/2025",
      pabellon: "Pabell\xF3n Calasanz"
    },
    {
      categoria: "Junior Femenino",
      local: "CB Fuenlabrada",
      visitante: "CB Calasanz",
      puntosLocal: 59,
      puntosVisitante: 67,
      fecha: "13/04/2025",
      pabellon: "Polideportivo Fuenlabrada"
    },
    {
      categoria: "Cadete Femenino",
      local: "CB Valdemoro",
      visitante: "CB Calasanz",
      puntosLocal: 54,
      puntosVisitante: 62,
      fecha: "13/04/2025",
      pabellon: "Pabell\xF3n Municipal Valdemoro"
    },
    {
      categoria: "Infantil Masculino",
      local: "CB Calasanz",
      visitante: "CB Alcal\xE1",
      puntosLocal: 68,
      puntosVisitante: 72,
      fecha: "14/04/2025",
      pabellon: "Pabell\xF3n Calasanz"
    },
    {
      categoria: "Alev\xEDn Masculino",
      local: "CB Calasanz",
      visitante: "CB Legan\xE9s",
      puntosLocal: 45,
      puntosVisitante: 38,
      fecha: "14/04/2025",
      pabellon: "Pabell\xF3n Calasanz"
    },
    {
      categoria: "Benjam\xEDn Femenino",
      local: "CB Getafe",
      visitante: "CB Calasanz",
      puntosLocal: 32,
      puntosVisitante: 36,
      fecha: "13/04/2025",
      pabellon: "Polideportivo Getafe"
    }
  ];
  const esGanador = (resultado, esLocal) => {
    if (esLocal) {
      return resultado.puntosLocal > resultado.puntosVisitante;
    } else {
      return resultado.puntosVisitante > resultado.puntosLocal;
    }
  };
  const esCalasanz = (nombre) => nombre === "CB Calasanz";
  return renderTemplate`${maybeRenderHead()}<div class="resultados-jornada"> <div class="mb-6 flex justify-between items-center"> <h3 class="text-xl font-semibold text-green-300">Última Jornada</h3> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${resultados.map((resultado) => renderTemplate`<div class="bg-green-900/30 rounded-lg overflow-hidden"> <div class="bg-green-800/50 px-4 py-2 flex justify-between items-center"> <span class="text-sm font-medium text-green-200">${resultado.categoria}</span> <span class="text-xs text-green-300">${resultado.fecha}</span> </div> <div class="p-4"> <!-- Equipo Local --> <div class="flex justify-between items-center mb-2"> <div class="flex items-center"> <div${addAttribute(`w-1 h-6 rounded-full mr-3 ${esCalasanz(resultado.local) ? "bg-green-400" : "bg-transparent"}`, "class")}></div> <span${addAttribute(`font-medium ${esGanador(resultado, true) ? "text-white" : "text-gray-400"}`, "class")}> ${resultado.local} </span> </div> <span${addAttribute(`text-2xl font-bold ${esGanador(resultado, true) ? "text-white" : "text-gray-400"}`, "class")}> ${resultado.puntosLocal} </span> </div> <!-- Equipo Visitante --> <div class="flex justify-between items-center"> <div class="flex items-center"> <div${addAttribute(`w-1 h-6 rounded-full mr-3 ${esCalasanz(resultado.visitante) ? "bg-green-400" : "bg-transparent"}`, "class")}></div> <span${addAttribute(`font-medium ${esGanador(resultado, false) ? "text-white" : "text-gray-400"}`, "class")}> ${resultado.visitante} </span> </div> <span${addAttribute(`text-2xl font-bold ${esGanador(resultado, false) ? "text-white" : "text-gray-400"}`, "class")}> ${resultado.puntosVisitante} </span> </div> <!-- Pabellón --> <div class="mt-3 text-xs text-gray-400"> <span>${resultado.pabellon}</span> </div> </div> </div>`)} </div> </div>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/ResultadosJornada.astro", void 0);

const $$Teams = createComponent(($$result, $$props, $$slots) => {
  const secciones = [
    {
      id: "masculino",
      titulo: "Secci\xF3n Masculina",
      descripcion: "",
      imagen: "../src/assets/BenjaTeam.JPG",
      ruta: "/teams/masculino"
    },
    {
      id: "femenino",
      titulo: "Secci\xF3n Femenina",
      descripcion: "",
      imagen: "../src/assets/JuniorFemCalasanz.JPG",
      ruta: "/teams/femenino"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Equipos | Club Baloncesto Calasanz", "description": "Conoce a nuestros equipos de baloncesto en sus diferentes categor\xEDas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 py-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "equipos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TeamsIcon", $$Teams$1, { "class": "size-8" })}
Nuestros Equipos
` })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${secciones.map((seccion) => renderTemplate`<a${addAttribute(seccion.ruta, "href")} class="group"> <div class="bg-green-950 border border-green-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-800/30 transition-all duration-300 h-full"> <div class="relative aspect-[16/10] overflow-hidden"> <img${addAttribute(seccion.imagen, "src")}${addAttribute(seccion.titulo, "alt")} class="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"> <div class="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/70 to-transparent"></div> <div class="absolute bottom-0 left-0 p-6"> <h2 class="text-3xl font-bold text-white">${seccion.titulo}</h2> </div> </div> <div class="p-6"> <p class="text-gray-300">${seccion.descripcion}</p> <div class="mt-6 flex items-center text-green-400 group-hover:text-green-300 transition-colors"> <span class="font-medium">Ver equipos</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </div> </div> </div> </a>`)} </div>  <div class="mt-24"> <h2 class="text-3xl font-bold text-white text-center mb-8">Resultados de la Jornada</h2> <div class="bg-green-950 border border-green-800 rounded-xl overflow-hidden shadow-lg"> <div class="p-6"> ${renderComponent($$result3, "ResultadosJornada", $$ResultadosJornada, {})} </div> </div> </div> ` })} </main> ` })}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams.astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams.astro";
const $$url = "/teams";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Teams,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
