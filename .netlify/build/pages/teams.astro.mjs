/* empty css                                   */
import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dd-cBrd7.mjs';
import { $ as $$SectionContainer, a as $$TitleSection } from '../chunks/TitleSection_D0sVFOdC.mjs';
import { $ as $$PageContainer } from '../chunks/PageContainer_C8RntY-S.mjs';
import { $ as $$Teams$1 } from '../chunks/Teams_DtshjIVk.mjs';
export { renderers } from '../renderers.mjs';

const $$Teams = createComponent(($$result, $$props, $$slots) => {
  const secciones = [
    {
      id: "masculino",
      titulo: "Secci\xF3n Masculina",
      descripcion: "",
      imagen: "/images/equipos/masculino/BenjaMasc.JPG",
      ruta: "/teams/masculino"
    },
    {
      id: "femenino",
      titulo: "Secci\xF3n Femenina",
      descripcion: "",
      imagen: "/images/equipos/femenino/BenjaFem.jpeg",
      ruta: "/teams/femenino"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Equipos | Club Baloncesto Calasanz", "description": "Conoce a nuestros equipos de baloncesto en sus diferentes categor\xEDas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageContainer", $$PageContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionContainer", $$SectionContainer, { "id": "equipos" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TitleSection", $$TitleSection, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "TeamsIcon", $$Teams$1, { "class": "size-8" })}
Nuestros Equipos
` })} ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16"> ${secciones.map((seccion) => renderTemplate`<a${addAttribute(seccion.ruta, "href")} class="group"> <div class="bg-green-950 border border-green-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-800/30 transition-all duration-300 h-full"> <div class="relative aspect-[16/10] overflow-hidden"> <img${addAttribute(seccion.imagen, "src")}${addAttribute(seccion.titulo, "alt")} class="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"> <div class="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/70 to-transparent"></div> <div class="absolute bottom-0 left-0 p-6"> <h2 class="text-3xl font-bold text-white">${seccion.titulo}</h2> </div> </div> <div class="p-6"> <p class="text-gray-300">${seccion.descripcion}</p> <div class="mt-6 flex items-center text-green-400 group-hover:text-green-300 transition-colors"> <span class="font-medium">Ver equipos</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </div> </div> </div> </a>`)} </div> ` })} ` })} ` })}`;
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
