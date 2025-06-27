/* empty css                                      */
import { e as createComponent, f as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate, i as renderComponent, h as addAttribute } from '../../chunks/astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Dd-cBrd7.mjs';
import { $ as $$SectionContainer, a as $$TitleSection } from '../../chunks/TitleSection_D0sVFOdC.mjs';
import { $ as $$PageContainer } from '../../chunks/PageContainer_C8RntY-S.mjs';
import 'clsx';
import { $ as $$TeamSection } from '../../chunks/TeamSection_CoAHpvRM.mjs';
import { e as equiposMasculinos } from '../../chunks/equiposMasculinos_CDPDvJ1W.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Masc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Masc;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path> <path d="M19 5l-5.4 5.4"></path> <path d="M19 5h-5"></path> <path d="M19 5v5"></path> </svg>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/assets/Masc.astro", void 0);

const $$Masculino = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Equipos Masculinos | Club Baloncesto Calasanz", "description": "Conoce a nuestros equipos masculinos en sus diferentes categor\xEDas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageContainer", $$PageContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionContainer", $$SectionContainer, { "id": "equipos-masculinos" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center space-x-4 mb-8"> <a href="/teams" class="text-green-400 hover:text-green-300 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path> </svg>
Volver a Equipos
</a> </div> ${renderComponent($$result4, "TitleSection", $$TitleSection, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MascIcon", $$Masc, { "class": "size-8" })}
Sección Masculina
` })}  <div class="flex flex-wrap justify-center gap-2 mb-10"> ${equiposMasculinos.map((equipo) => renderTemplate`<a${addAttribute(`#${equipo.nombre.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="px-4 py-2 bg-green-800 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-colors"> ${equipo.nombre} </a>`)} </div>  <div class="space-y-24"> ${equiposMasculinos.map((equipo) => renderTemplate`<div${addAttribute(equipo.nombre.toLowerCase().replace(/\s+/g, "-"), "id")} class="scroll-mt-24"> ${renderComponent($$result4, "TeamSection", $$TeamSection, { ...equipo })} </div>`)} </div> ` })} ` })} ` })}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams/masculino.astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams/masculino.astro";
const $$url = "/teams/masculino";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Masculino,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
