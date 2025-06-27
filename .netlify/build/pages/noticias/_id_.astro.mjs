/* empty css                                      */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Dd-cBrd7.mjs';
import 'clsx';
import { n as noticias } from '../../chunks/noticias_DFJ9VACN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$NewsForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewsForm;
  const { tipo = "inscripcion", asunto = "Inscripci\xF3n al Campus de Verano" } = Astro2.props;
  const EMAIL_DESTINO = "clubdeportivocalasanzsantander@hotmail.com";
  let camposFormulario = [
    { nombre: "nombre", etiqueta: "Nombre y apellidos", tipo: "text", requerido: true },
    { nombre: "email", etiqueta: "Correo electr\xF3nico", tipo: "email", requerido: true },
    { nombre: "telefono", etiqueta: "Tel\xE9fono", tipo: "tel", requerido: true },
    { nombre: "fechaNacimiento", etiqueta: "Fecha de nacimiento", tipo: "date", requerido: true },
    { nombre: "comentarios", etiqueta: "Comentarios adicionales", tipo: "textarea", requerido: false }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-br from-green-900 to-green-950 border border-green-700/50 rounded-xl overflow-hidden shadow-lg"> <div class="p-6 sm:p-8 md:p-10"> <div class="flex items-center gap-3 mb-6"> <span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-600/30"> <svg class="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> </span> <h2 class="text-2xl sm:text-3xl font-bold text-white">Formulario de inscripción</h2> </div> <p class="text-green-200 text-sm sm:text-base mb-8 border-l-4 border-green-500 pl-4">
Por favor, rellena el siguiente formulario para inscribirte en el Campus de Verano 2025. Nos pondremos en contacto contigo lo antes posible.
</p> <form${addAttribute(`https://formsubmit.co/${EMAIL_DESTINO}`, "action")} method="POST" class="space-y-6"> <!-- Configuración del formulario --> <input type="hidden" name="_captcha" value="false"> <input type="hidden" name="_subject"${addAttribute(asunto, "value")}> <input type="hidden" name="_next"${addAttribute(Astro2.url.href, "value")}> <!-- Campos dinámicos del formulario --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${camposFormulario.map((campo) => {
    const esTextarea = campo.tipo === "textarea";
    const colSpan = esTextarea ? "md:col-span-2" : "";
    return renderTemplate`<div${addAttribute(`space-y-2 ${colSpan}`, "class")}> <label${addAttribute(campo.nombre, "for")} class="block text-sm text-green-200 font-medium"> ${campo.etiqueta} ${campo.requerido && renderTemplate`<span class="text-green-400">*</span>`} </label> ${esTextarea ? renderTemplate`<textarea${addAttribute(campo.nombre, "id")}${addAttribute(campo.nombre, "name")} rows="4"${addAttribute(campo.requerido, "required")} class="w-full p-4 rounded-lg bg-green-950/50 border border-green-700/70 text-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-green-700/50 transition-all duration-300"${addAttribute(`Escribe ${campo.etiqueta.toLowerCase()} aqu\xED...`, "placeholder")}></textarea>` : renderTemplate`<input${addAttribute(campo.nombre, "id")}${addAttribute(campo.nombre, "name")}${addAttribute(campo.tipo, "type")}${addAttribute(campo.requerido, "required")} class="w-full p-4 rounded-lg bg-green-950/50 border border-green-700/70 text-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-green-700/50 transition-all duration-300"${addAttribute(campo.tipo === "date" ? "DD/MM/AAAA" : `Escribe ${campo.etiqueta.toLowerCase()} aqu\xED...`, "placeholder")}>`} </div>`;
  })} </div> <div class="pt-4"> <button type="submit" class="w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group"> <span>Enviar inscripción</span> <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </button> </div> <p class="text-xs text-green-400/70 pt-4">
Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos personales.  
        Los campos marcados con * son obligatorios.
</p> </form> </div> </div>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/news/NewsForm.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const noticia = noticias.find((item) => item.id === id);
  if (!noticia) {
    return Astro2.redirect("/404");
  }
  const title = noticia.titulo;
  const description = noticia.descripcion;
  const {
    contenido = "",
    imagen = "",
    categoria = "",
    fecha = "",
    titulo = "",
    descripcion = "",
    tieneComponenteEspecial = false,
    tieneFormulario = false,
    tipoFormulario = ""
  } = noticia;
  let EquiposTemporada = null;
  if (tieneComponenteEspecial) {
    try {
      const module = await import('../../chunks/EquiposTemporada_duB-DBze.mjs');
      EquiposTemporada = module.default;
    } catch (error) {
      console.error("Error al cargar el componente EquiposTemporada:", error);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 sm:px-12 lg:px-24 py-20 sm:py-28 max-w-7xl"> <div class="mb-8"> <a href="/news" class="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Volver a noticias
</a> </div> ${!noticia ? renderTemplate`<div class="bg-red-900/20 border border-red-500/30 rounded-xl p-8 text-center"> <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> <h2 class="text-2xl font-bold text-red-400 mb-2">¡Noticia no encontrada!</h2> <p class="text-gray-300 mb-6">La noticia que buscas no existe o ha sido eliminada.</p> <a href="/news" class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-all duration-300"> <span>Volver a noticias</span> <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div>` : renderTemplate`<article class="bg-green-950 rounded-xl overflow-hidden shadow-lg border border-green-800/30 mx-auto"> <!-- Imagen destacada --> <div class="mb-8 lg:mb-12 rounded-xl overflow-hidden shadow-xl"> <img${addAttribute(imagen, "src")}${addAttribute(titulo, "alt")} class="w-full h-64 md:h-96 object-cover"> </div> <!-- Contenido de la noticia --> <div class="p-6 sm:p-8 md:p-10"> <div class="flex items-center gap-2 text-sm text-green-400 mb-2"> <span class="px-3 py-1 bg-green-900/50 rounded-full"> ${categoria} </span> <span class="text-gray-400">•</span> <span>${fecha}</span> </div> <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">${titulo}</h1> <div class="flex items-center gap-4 text-sm text-gray-400 mb-6"> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${fecha}</span> </div> </div> <div class="prose prose-lg prose-invert max-w-none"> <p class="text-lg text-gray-300 leading-relaxed mb-6"> ${descripcion} </p> ${contenido && renderTemplate`<div>${unescapeHTML(contenido)}</div>`} ${tieneComponenteEspecial && EquiposTemporada && renderTemplate`<div class="mt-8"> ${renderComponent($$result2, "EquiposTemporada", EquiposTemporada, { "client:load": true, "client:component-hydration": "load" })} </div>`} ${tieneFormulario && renderTemplate`<div class="mt-12"> ${renderComponent($$result2, "NewsForm", $$NewsForm, { "tipoFormulario": tipoFormulario })} </div>`} </div> </div> </article>`} </main> ` })}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/noticias/[id].astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/noticias/[id].astro";
const $$url = "/noticias/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
