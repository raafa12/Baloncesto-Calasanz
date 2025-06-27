/* empty css                                   */
import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dd-cBrd7.mjs';
import { $ as $$SectionContainer, a as $$TitleSection } from '../chunks/TitleSection_D0sVFOdC.mjs';
import { $ as $$PageContainer } from '../chunks/PageContainer_C8RntY-S.mjs';
import { $ as $$News$1 } from '../chunks/News_Bi_NGvMA.mjs';
import { n as noticias } from '../chunks/noticias_DFJ9VACN.mjs';
export { renderers } from '../renderers.mjs';

const $$News = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Noticias | CB Calasanz", "description": "\xDAltimas noticias y eventos del Club Baloncesto Calasanz" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageContainer", $$PageContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionContainer", $$SectionContainer, { "id": "noticias", "class": "mb-12" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TitleSection", $$TitleSection, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "NewsIcon", $$News$1, { "class": "size-8" })}
Noticias y eventos
` })}  ${maybeRenderHead()}<div class="mt-8 lg:mt-12 xl:mt-16 space-y-6 lg:space-y-10"> ${noticias.filter((n) => n.destacado).map((noticia) => renderTemplate`<article class="bg-green-950 rounded-xl overflow-hidden shadow-lg border border-green-800/30 hover:border-green-500/40 transition-all duration-300 group"> <div class="flex flex-col md:flex-row h-full"> <!-- Imagen de la noticia --> <div class="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden"> <img${addAttribute(noticia.imagen, "src")}${addAttribute(noticia.titulo, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent md:bg-gradient-to-r"></div> <div class="absolute top-4 left-4 bg-green-600/90 text-white text-xs font-bold px-3 py-1 rounded-full"> ${noticia.categoria} </div> </div> <!-- Contenido de la noticia --> <div class="p-6 md:p-8 flex-1 flex flex-col justify-center"> <div class="flex items-center gap-2 mb-2"> <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-500/20"> <svg class="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </span> <p class="text-green-400 text-sm font-medium">${noticia.fecha}</p> </div> <h3 class="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-3 group-hover:text-green-300 transition-colors"> ${noticia.titulo} </h3> <p class="text-gray-300 text-sm md:text-base mb-6"> ${noticia.descripcion} </p> <a${addAttribute(`/noticias/${noticia.id}`, "href")} class="self-start inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-all duration-300 group"> <span>Leer más</span> <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </article>`)} </div>  ${noticias.filter((n) => !n.destacado).length > 0 && renderTemplate`<div class="mt-12 lg:mt-20 xl:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10"> <h2 class="text-xl font-bold text-white md:col-span-2 lg:col-span-3 mb-4">Más noticias</h2> ${noticias.filter((n) => !n.destacado).map((noticia) => renderTemplate`<article class="bg-green-950 rounded-lg overflow-hidden shadow-md border border-green-800/30 hover:border-green-500/40 transition-all duration-300 group h-full flex flex-col"> <div class="relative h-48 overflow-hidden"> <img${addAttribute(noticia.imagen, "src")}${addAttribute(noticia.titulo, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute top-3 left-3 bg-green-600/90 text-white text-xs font-bold px-2 py-1 rounded-full"> ${noticia.categoria} </div> </div> <div class="p-5 flex-grow flex flex-col"> <p class="text-green-400 text-xs font-medium mb-2">${noticia.fecha}</p> <h3 class="text-white font-bold text-lg mb-2 group-hover:text-green-300 transition-colors"> ${noticia.titulo} </h3> <p class="text-gray-300 text-sm mb-4 flex-grow"> ${noticia.descripcion.substring(0, 100)}...
</p> <a${addAttribute(`/noticias/${noticia.id}`, "href")} class="self-start inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"> <span>Leer más</span> <svg class="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </article>`)} </div>`}` })} ` })} ` })}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/news.astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/news.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$News,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
