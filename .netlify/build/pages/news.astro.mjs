/* empty css                                   */
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, i as renderComponent } from '../chunks/astro/server_ClUm7ASJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$SectionContainer } from '../chunks/SectionContainer_L9yUcmDO.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_DHDeXzSS.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$News$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <!-- Main newspaper --> <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z"></path> <!-- Secondary folded newspaper --> <path d="M7 8h7"></path> <path d="M7 12h7"></path> <path d="M7 16h7"></path> <!-- Headline section --> <rect x="15" y="8" width="4" height="8" rx="1"></rect> <!-- Connecting element (similar to base in team icon) --> <path d="M5 20h14"></path> </svg>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/assets/News.astro", void 0);

const $$Astro = createAstro();
const $$NewsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewsCard;
  const { titulo, descripcion, imagen, fecha, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-green-950 border border-green-800 rounded-xl overflow-hidden shadow-md h-full flex flex-col"> <img${addAttribute(imagen, "src")}${addAttribute(titulo, "alt")} class="w-full h-64 object-cover"> <div class="p-6 space-y-2 flex-grow"> <h2 class="text-2xl font-bold text-white">${titulo}</h2> <p class="text-sm text-green-300">${fecha}</p> <p class="text-gray-300">${descripcion}</p> <div class="mt-4 pt-4 border-t border-green-800"> <a${addAttribute(`/noticias/${id}`, "href")} class="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition-colors">
Leer más
</a> </div> </div> </article>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/NewsCard.astro", void 0);

const $$News = createComponent(($$result, $$props, $$slots) => {
  const noticias = [
    {
      id: "campus-verano",
      titulo: "Campus de verano 2025: \xA1Inscr\xEDbete ya!",
      descripcion: "Ya est\xE1n abiertas las inscripciones para nuestro campus.",
      fecha: "10 abril 2025",
      imagen: "../src/assets/basket.JPEG"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Noticias", "description": "\xDAltimas noticias del club" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 py-24 space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "noticias" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "NewsIcon", $$News$1, { "class": "size-8" })}
Noticias del club
` })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> ${noticias.map((noticia) => renderTemplate`<div class="flex flex-col h-full"> ${renderComponent($$result3, "NewsCard", $$NewsCard, { "titulo": noticia.titulo, "descripcion": noticia.descripcion, "imagen": noticia.imagen, "fecha": noticia.fecha, "id": noticia.id })} </div>`)} </div> ` })} </main> ` })}`;
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
