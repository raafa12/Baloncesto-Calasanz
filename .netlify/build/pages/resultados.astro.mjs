/* empty css                                   */
import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dd-cBrd7.mjs';
import { $ as $$PageContainer } from '../chunks/PageContainer_C8RntY-S.mjs';
import { o as obtenerJornadas, $ as $$SelectorJornada, a as $$InfoJornada, b as $$ResultadosJornadaConActuaciones } from '../chunks/InfoJornada_DOMQmOgU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const jornadas = await obtenerJornadas();
  jornadas[0];
  const jornadaNumero = Astro2.url.searchParams.get("jornada") || "ultima";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resultados - CB Calasanz", "data-astro-cid-wmfaa3nx": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageContainer", $$PageContainer, { "class": "pt-12 sm:pt-16 lg:pt-20", "data-astro-cid-wmfaa3nx": true }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="bg-green-900 bg-opacity-20 rounded-xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 shadow-md" data-astro-cid-wmfaa3nx> <div class="mb-3 sm:mb-4" data-astro-cid-wmfaa3nx> <h3 class="text-base sm:text-lg font-semibold text-white flex items-center" data-astro-cid-wmfaa3nx> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wmfaa3nx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-wmfaa3nx></path> </svg>
Seleccionar Jornada
</h3> </div> ${renderComponent($$result3, "SelectorJornada", $$SelectorJornada, { "jornadas": jornadas, "jornadaSeleccionada": jornadaNumero, "data-astro-cid-wmfaa3nx": true })} </div>  ${renderComponent($$result3, "InfoJornada", $$InfoJornada, { "jornada": jornadaNumero, "data-astro-cid-wmfaa3nx": true })}  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 xl:gap-12" data-astro-cid-wmfaa3nx> <!-- Sección Masculina --> <div class="bg-green-900 bg-opacity-20 rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 shadow-md" data-astro-cid-wmfaa3nx> <div class="flex items-center mb-4 border-b border-green-700 pb-2" data-astro-cid-wmfaa3nx> <div class="w-2 h-6 bg-blue-500 mr-3 rounded" data-astro-cid-wmfaa3nx></div> <h4 class="text-lg font-semibold text-white flex items-center" data-astro-cid-wmfaa3nx> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wmfaa3nx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-wmfaa3nx></path> </svg>
Sección Masculina
</h4> </div> ${renderComponent($$result3, "ResultadosJornadaConActuaciones", $$ResultadosJornadaConActuaciones, { "jornada": jornadaNumero, "seccion": "masculina", "data-astro-cid-wmfaa3nx": true })} </div> <!-- Sección Femenina --> <div class="bg-green-900 bg-opacity-20 rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 shadow-md" data-astro-cid-wmfaa3nx> <div class="flex items-center mb-4 border-b border-green-700 pb-2" data-astro-cid-wmfaa3nx> <div class="w-2 h-6 bg-pink-500 mr-3 rounded" data-astro-cid-wmfaa3nx></div> <h4 class="text-lg font-semibold text-white flex items-center" data-astro-cid-wmfaa3nx> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wmfaa3nx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-wmfaa3nx></path> </svg>
Sección Femenina
</h4> </div> ${renderComponent($$result3, "ResultadosJornadaConActuaciones", $$ResultadosJornadaConActuaciones, { "jornada": jornadaNumero, "seccion": "femenina", "data-astro-cid-wmfaa3nx": true })} </div> </div> <div class="mt-12 text-center" data-astro-cid-wmfaa3nx> <a href="/resultados/historico" class="inline-flex items-center bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md" data-astro-cid-wmfaa3nx> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wmfaa3nx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-wmfaa3nx></path> </svg>
Ver histórico de resultados
</a> </div> ` })} ` })} `;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/resultados/index.astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/resultados/index.astro";
const $$url = "/resultados";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
