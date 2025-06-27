/* empty css                                      */
import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Dd-cBrd7.mjs';
import { $ as $$SectionContainer, a as $$TitleSection } from '../../chunks/TitleSection_D0sVFOdC.mjs';
import { $ as $$PageContainer } from '../../chunks/PageContainer_C8RntY-S.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$Temporada2526 = createComponent(($$result, $$props, $$slots) => {
  const playersData = {
    masculino: {
      benjamin: [
        {
          name: "Hugo Fern\xE1ndez Gasta\xF1aga",
          birth: 2017,
          year: "1er a\xF1o",
          phone: "679875853",
          email: "a.fernandezsalas@hotmail.com"
        }
        // ... (resto de jugadores masculinos)
      ]
      // ... (resto de categorías masculinas)
    },
    femenino: {
      // ... (jugadoras femeninas)
    }
  };
  const stats = {
    total: 0,
    masculino: 0,
    femenino: 0,
    categorias: {}
  };
  Object.entries(playersData).forEach(([genero, categorias]) => {
    Object.entries(categorias).forEach(([categoria, jugadores]) => {
      stats.total += jugadores.length;
      stats[genero] += jugadores.length;
      if (!stats.categorias[categoria]) {
        stats.categorias[categoria] = { masculino: 0, femenino: 0 };
      }
      stats.categorias[categoria][genero] = jugadores.length;
    });
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Equipos Temporada 25/26 | CB Calasanz", "description": "Lista de jugadores del CB Calasanz para la temporada 2025/2026", "data-astro-cid-koyafxpz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageContainer", $$PageContainer, { "data-astro-cid-koyafxpz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionContainer", $$SectionContainer, { "id": "equipos-temporada", "class": "mb-12", "data-astro-cid-koyafxpz": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TitleSection", $$TitleSection, { "data-astro-cid-koyafxpz": true }, { "default": ($$result5) => renderTemplate`
🏀 Equipos Temporada 2025/2026
` })}  ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-astro-cid-koyafxpz> <div class="bg-green-900/50 p-6 rounded-lg border border-green-800/30" data-astro-cid-koyafxpz> <h3 class="text-2xl font-bold text-green-400" data-astro-cid-koyafxpz>${stats.total}</h3> <p class="text-gray-300" data-astro-cid-koyafxpz>Total Jugadores</p> </div> <div class="bg-green-900/50 p-6 rounded-lg border border-green-800/30" data-astro-cid-koyafxpz> <h3 class="text-2xl font-bold text-blue-400" data-astro-cid-koyafxpz>${stats.masculino}</h3> <p class="text-gray-300" data-astro-cid-koyafxpz>Jugadores Masculinos</p> </div> <div class="bg-green-900/50 p-6 rounded-lg border border-green-800/30" data-astro-cid-koyafxpz> <h3 class="text-2xl font-bold text-pink-400" data-astro-cid-koyafxpz>${stats.femenino}</h3> <p class="text-gray-300" data-astro-cid-koyafxpz>Jugadoras Femeninas</p> </div> </div>  <div class="space-y-12" data-astro-cid-koyafxpz> <!-- Sección Masculina --> <div data-astro-cid-koyafxpz> <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-green-800/50 flex items-center gap-2" data-astro-cid-koyafxpz> <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center" data-astro-cid-koyafxpz>♂</span>
Sección Masculina
</h2> <div class="space-y-6" data-astro-cid-koyafxpz> ${Object.entries(playersData.masculino).map(([categoria, jugadores]) => renderTemplate`<div class="bg-green-950/50 rounded-lg overflow-hidden border border-green-800/30" data-astro-cid-koyafxpz> <div class="bg-green-900/50 p-4 border-b border-green-800/30" data-astro-cid-koyafxpz> <h3 class="text-lg font-semibold flex justify-between items-center" data-astro-cid-koyafxpz> <span data-astro-cid-koyafxpz>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</span> <span class="text-sm text-gray-400" data-astro-cid-koyafxpz>${jugadores.length} jugadores</span> </h3> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4" data-astro-cid-koyafxpz> ${jugadores.map((jugador) => renderTemplate`<div class="bg-green-900/30 p-4 rounded border border-green-800/30" data-astro-cid-koyafxpz> <h4 class="font-medium" data-astro-cid-koyafxpz>${jugador.name}</h4> <p class="text-sm text-gray-400" data-astro-cid-koyafxpz>Nacimiento: ${jugador.birth} (${jugador.year})</p> <div class="mt-2 pt-2 border-t border-green-800/30 text-sm" data-astro-cid-koyafxpz> <p data-astro-cid-koyafxpz>📞 ${jugador.phone}</p> <p class="truncate"${addAttribute(jugador.email, "title")} data-astro-cid-koyafxpz>📧 ${jugador.email}</p> </div> </div>`)} </div> </div>`)} </div> </div> <!-- Sección Femenina --> <div data-astro-cid-koyafxpz> <h2 class="text-2xl font-bold mb-6 pb-2 border-b border-green-800/50 flex items-center gap-2" data-astro-cid-koyafxpz> <span class="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center" data-astro-cid-koyafxpz>♀</span>
Sección Femenina
</h2> <div class="space-y-6" data-astro-cid-koyafxpz> ${Object.entries(playersData.femenino).map(([categoria, jugadoras]) => renderTemplate`<div class="bg-green-950/50 rounded-lg overflow-hidden border border-green-800/30" data-astro-cid-koyafxpz> <div class="bg-green-900/50 p-4 border-b border-green-800/30" data-astro-cid-koyafxpz> <h3 class="text-lg font-semibold flex justify-between items-center" data-astro-cid-koyafxpz> <span data-astro-cid-koyafxpz>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</span> <span class="text-sm text-gray-400" data-astro-cid-koyafxpz>${jugadoras.length} jugadoras</span> </h3> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4" data-astro-cid-koyafxpz> ${jugadoras.map((jugadora) => renderTemplate`<div class="bg-green-900/30 p-4 rounded border border-green-800/30" data-astro-cid-koyafxpz> <h4 class="font-medium" data-astro-cid-koyafxpz>${jugadora.name}</h4> <p class="text-sm text-gray-400" data-astro-cid-koyafxpz>Nacimiento: ${jugadora.birth} (${jugadora.year})</p> <div class="mt-2 pt-2 border-t border-green-800/30 text-sm" data-astro-cid-koyafxpz> <p data-astro-cid-koyafxpz>📞 ${jugadora.phone}</p> <p class="truncate"${addAttribute(jugadora.email, "title")} data-astro-cid-koyafxpz>📧 ${jugadora.email}</p> </div> </div>`)} </div> </div>`)} </div> </div> </div> ` })} ` })} ` })} `;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/equipos/temporada-25-26.astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/equipos/temporada-25-26.astro";
const $$url = "/equipos/temporada-25-26";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Temporada2526,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
