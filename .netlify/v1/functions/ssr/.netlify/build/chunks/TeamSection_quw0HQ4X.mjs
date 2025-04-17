import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_ClUm7ASJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$TeamSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamSection;
  const { nombre, descripcion, imagen, entrenadores, miembros } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-green-950 border border-green-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-900/20 transition-all"> <div class="relative"> <img${addAttribute(imagen, "src")}${addAttribute(nombre, "alt")} class="w-full h-64 object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-green-950 to-transparent opacity-70"></div> <div class="absolute bottom-0 left-0 p-6"> <h3 class="text-3xl font-bold text-white">${nombre}</h3> </div> </div> <div class="p-6 space-y-6"> <p class="text-gray-300 text-lg">${descripcion}</p> ${entrenadores && entrenadores.length > 0 && renderTemplate`<div> <h4 class="text-xl font-semibold text-green-300 mb-4">Cuerpo Técnico</h4> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"> ${entrenadores.map((entrenador) => renderTemplate`<div class="text-center group"> <div class="relative inline-block"> <img${addAttribute(entrenador.foto, "src")}${addAttribute(entrenador.nombre, "alt")} class="w-28 h-28 rounded-full mx-auto object-cover border-2 border-green-700 group-hover:border-green-500 transition-all"> <div class="absolute inset-0 rounded-full bg-green-900 opacity-0 group-hover:opacity-20 transition-opacity"></div> </div> <h3 class="mt-3 text-white font-semibold">${entrenador.nombre}</h3> <p class="text-green-300 text-sm">${entrenador.rol}</p> </div>`)} </div> </div>`} <div> <h4 class="text-xl font-semibold text-green-300 mb-4">Jugadores</h4> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"> ${miembros.map((miembro) => renderTemplate`<div class="text-center group"> <div class="relative inline-block"> <img${addAttribute(miembro.foto, "src")}${addAttribute(miembro.nombre, "alt")} class="w-24 h-24 rounded-full mx-auto object-cover border-2 border-green-700 group-hover:border-green-500 transition-all"> <div class="absolute inset-0 rounded-full bg-green-900 opacity-0 group-hover:opacity-20 transition-opacity"></div> </div> <h3 class="mt-3 text-white font-semibold">${miembro.nombre}</h3> <p class="text-green-300 text-sm">${miembro.rol}</p> </div>`)} </div> </div> </div> </section>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/TeamSection.astro", void 0);

export { $$TeamSection as $ };
