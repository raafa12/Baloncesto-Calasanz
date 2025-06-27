/* empty css                                         */
import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_Dd-cBrd7.mjs';
import { o as obtenerJornadas, $ as $$SelectorJornada, a as $$InfoJornada, s as secciones, b as $$ResultadosJornadaConActuaciones } from '../../../chunks/InfoJornada_DOMQmOgU.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const jornadas = await obtenerJornadas();
  const jornadaNumeroSeleccionada = Astro2.params.id || "ultima";
  const seccionSeleccionada = Astro2.url.searchParams.get("seccion") || "todas";
  const seccionInfo = secciones[seccionSeleccionada] || { nombre: "Todas", color: "green-500" };
  let tituloPagina = "Resultados";
  if (jornadaNumeroSeleccionada !== "ultima") {
    tituloPagina = `Resultados Jornada ${jornadaNumeroSeleccionada}`;
  } else if (jornadas.length > 0) {
    tituloPagina = `Resultados \xDAltima Jornada`;
  }
  let jornadaSeleccionada = null;
  if (jornadaNumeroSeleccionada !== "ultima") {
    const jornadaEncontrada = jornadas.find((j) => j.info.numero === parseInt(jornadaNumeroSeleccionada));
    if (jornadaEncontrada) {
      jornadaSeleccionada = jornadaEncontrada;
    } else {
      jornadaSeleccionada = { info: { numero: jornadaNumeroSeleccionada, mensaje: "Jornada no encontrada" } };
    }
  } else if (jornadas.length > 0) {
    jornadaSeleccionada = jornadas[0];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${tituloPagina} - CB Calasanz`, "description": "Resultados de la jornada del Club Baloncesto Calasanz", "data-astro-cid-zr4ipmfa": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-8 sm:px-16 md:px-24 lg:px-32 pt-16 sm:pt-20 pb-6 sm:pb-8 overflow-x-hidden w-full max-w-6xl" data-astro-cid-zr4ipmfa> <!-- Header con animación (optimizado para móvil) --> <div class="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 md:mb-16" data-astro-cid-zr4ipmfa> <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-green-200 mb-3 sm:mb-4 md:mb-0 relative" data-astro-cid-zr4ipmfa> ${tituloPagina} <span class="absolute -bottom-2 left-0 w-1/3 h-1 bg-green-400 rounded-full" data-astro-cid-zr4ipmfa></span> </h1> <div class="flex space-x-4" data-astro-cid-zr4ipmfa> <a href="/resultados" class="flex items-center text-green-300 hover:text-green-200 transition-colors text-sm sm:text-base" data-astro-cid-zr4ipmfa> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zr4ipmfa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-zr4ipmfa></path> </svg>
Todos los resultados
</a> </div> </div> <!-- Selector Jornada con botones de sección integrados --> <div class="bg-green-900 bg-opacity-20 rounded-xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 shadow-md" data-astro-cid-zr4ipmfa> ${renderComponent($$result2, "SelectorJornada", $$SelectorJornada, { "jornadas": jornadas, "jornadaSeleccionada": jornadaNumeroSeleccionada, "seccion": seccionSeleccionada, "data-astro-cid-zr4ipmfa": true })} </div> <!-- Información de la jornada --> ${renderComponent($$result2, "InfoJornada", $$InfoJornada, { "jornada": jornadaNumeroSeleccionada, "data-astro-cid-zr4ipmfa": true })} <!-- Indicador de sección seleccionada --> ${seccionSeleccionada !== "todas" && renderTemplate`<div class="mb-6 sm:mb-8" data-astro-cid-zr4ipmfa> <div class="bg-green-900 bg-opacity-20 rounded-xl p-3 sm:p-4 md:p-6 shadow-md" data-astro-cid-zr4ipmfa> <div class="flex items-center mb-4 border-b border-green-700 pb-2" data-astro-cid-zr4ipmfa> <div${addAttribute(`w-2 h-6 bg-${seccionInfo.color} mr-3 rounded`, "class")} data-astro-cid-zr4ipmfa></div> <h4 class="text-lg font-semibold text-white flex items-center" data-astro-cid-zr4ipmfa> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zr4ipmfa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-zr4ipmfa></path> </svg> ${seccionInfo.nombre} </h4> </div> </div> </div>`} <!-- Resultados --> ${jornadaSeleccionada && "mensaje" in jornadaSeleccionada.info ? renderTemplate`<div class="bg-red-900 bg-opacity-70 text-white p-6 rounded-lg shadow-lg animate-pulse" data-astro-cid-zr4ipmfa> <div class="flex items-center" data-astro-cid-zr4ipmfa> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zr4ipmfa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-astro-cid-zr4ipmfa></path> </svg> <div data-astro-cid-zr4ipmfa> <h3 class="text-xl font-bold mb-1" data-astro-cid-zr4ipmfa>${jornadaSeleccionada.info.mensaje}</h3> <p data-astro-cid-zr4ipmfa>Lo sentimos, no pudimos encontrar la jornada solicitada.</p> </div> </div> </div>` : renderTemplate`<div class="transition-all duration-300 ease-in-out" data-astro-cid-zr4ipmfa> ${renderComponent($$result2, "ResultadosJornadaConActuaciones", $$ResultadosJornadaConActuaciones, { "jornada": jornadaNumeroSeleccionada, "seccion": seccionSeleccionada, "data-astro-cid-zr4ipmfa": true })} </div>`} <div class="mt-8 sm:mt-12 text-center" data-astro-cid-zr4ipmfa> <div class="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4" data-astro-cid-zr4ipmfa> <a href="/resultados" class="inline-flex items-center bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition-colors shadow-md w-full sm:w-auto justify-center text-sm sm:text-base" data-astro-cid-zr4ipmfa> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zr4ipmfa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-zr4ipmfa></path> </svg>
Volver a resultados
</a> </div> </div> </div> ` })} `;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/resultados/jornada/[id].astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/resultados/jornada/[id].astro";
const $$url = "/resultados/jornada/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
