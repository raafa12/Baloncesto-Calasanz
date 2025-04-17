/* empty css                                      */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, j as Fragment } from '../../chunks/astro/server_ClUm7ASJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$SectionContainer } from '../../chunks/SectionContainer_L9yUcmDO.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$NewsForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewsForm;
  const { tipo = "contacto", asunto = "Formulario web" } = Astro2.props;
  const EMAIL_DESTINO = "clubdeportivocalasanzsantander@hotmail.com";
  let camposFormulario = [];
  if (tipo === "inscripcion") {
    camposFormulario = [
      { nombre: "nombre", etiqueta: "Nombre y apellidos", tipo: "text", requerido: true },
      { nombre: "email", etiqueta: "Correo electr\xF3nico", tipo: "email", requerido: true },
      { nombre: "telefono", etiqueta: "Tel\xE9fono", tipo: "tel", requerido: true },
      { nombre: "fechaNacimiento", etiqueta: "Fecha de nacimiento", tipo: "date", requerido: true },
      { nombre: "comentarios", etiqueta: "Comentarios adicionales", tipo: "textarea", requerido: false }
    ];
  } else {
    camposFormulario = [
      { nombre: "nombre", etiqueta: "Nombre y apellidos", tipo: "text", requerido: true },
      { nombre: "email", etiqueta: "Correo electr\xF3nico", tipo: "email", requerido: true },
      { nombre: "mensaje", etiqueta: "Mensaje", tipo: "textarea", requerido: true }
    ];
  }
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(`https://formsubmit.co/${EMAIL_DESTINO}`, "action")} method="POST" class="bg-green-900 border border-green-700 rounded-xl p-6 space-y-4 mt-4"> <!-- Configuración del formulario --> <input type="hidden" name="_captcha" value="false"> <input type="hidden" name="_subject"${addAttribute(asunto, "value")}> <input type="hidden" name="_next"${addAttribute(Astro2.url.href, "value")}> <!-- Campos dinámicos según el tipo de formulario --> ${camposFormulario.map((campo) => renderTemplate`<label class="block"> <span class="text-sm text-green-200">${campo.etiqueta}</span> ${campo.tipo === "textarea" ? renderTemplate`<textarea${addAttribute(campo.nombre, "name")} rows="4"${addAttribute(campo.requerido, "required")} class="w-full p-2 rounded bg-green-950 border border-green-700 text-white"></textarea>` : renderTemplate`<input${addAttribute(campo.nombre, "name")}${addAttribute(campo.tipo, "type")}${addAttribute(campo.requerido, "required")} class="w-full p-2 rounded bg-green-950 border border-green-700 text-white">`} </label>`)} <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition-colors"> ${tipo === "inscripcion" ? "Enviar inscripci\xF3n" : "Enviar mensaje"} </button> </form>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/NewsForm.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const noticias = [
    {
      id: "victoria-juvenil",
      titulo: "\xA1Victoria \xE9pica del equipo juvenil!",
      descripcion: "El equipo juvenil gan\xF3 85-82 en un partido incre\xEDble...",
      contenido: "El equipo juvenil logr\xF3 una victoria hist\xF3rica 85-82 contra su principal rival en un partido que mantuvo a todos al borde de sus asientos hasta el \xFAltimo segundo. Con esta victoria, nuestros juveniles se colocan en el primer puesto de la clasificaci\xF3n y cada vez m\xE1s cerca del campeonato regional.",
      fecha: "15 abril 2025",
      imagen: "../assets/basket.JPEG",
      formulario: false,
      tipoFormulario: null
    },
    {
      id: "campus-verano",
      titulo: "Campus de verano 2025: \xA1Inscr\xEDbete ya!",
      descripcion: "Ya est\xE1n abiertas las inscripciones para nuestro campus de verano. Plazas limitadas.",
      contenido: "Abrimos las inscripciones para el Campus de Verano 2025 que se llevar\xE1 a cabo del 1 al 15 de julio. Este a\xF1o contaremos con entrenadores profesionales y actividades especiales. El campus est\xE1 dirigido a ni\xF1os y j\xF3venes de 8 a 16 a\xF1os. No esperes m\xE1s y reserva tu plaza, \xA1son limitadas!",
      fecha: "10 abril 2025",
      imagen: "../src/assets/basket.JPEG",
      formulario: true,
      tipoFormulario: "inscripcion"
    }
  ];
  return noticias.map((noticia) => {
    return {
      params: { id: noticia.id },
      props: { noticia }
    };
  });
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { noticia } = Astro2.props;
  const title = noticia ? noticia.titulo : "Noticia no encontrada";
  const description = noticia ? noticia.descripcion : "La noticia que buscas no existe";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 py-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` <a href="/news" class="inline-flex items-center text-green-400 hover:text-green-300 mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Volver a noticias
</a> ${noticia ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <article class="bg-green-950 border border-green-800 rounded-xl overflow-hidden shadow-lg"> <img${addAttribute(noticia.imagen, "src")}${addAttribute(noticia.titulo, "alt")} class="w-full h-96 object-cover"> <div class="p-8 space-y-4"> <h1 class="text-3xl md:text-4xl font-bold text-white">${noticia.titulo}</h1> <p class="text-green-300">${noticia.fecha}</p> <div class="text-gray-200 space-y-4 mt-6"> <p>${noticia.contenido}</p> </div> </div> </article> ${noticia.formulario && renderTemplate`<div class="mt-12"> <h2 class="text-2xl font-bold text-white mb-4"> ${noticia.tipoFormulario === "inscripcion" ? "Formulario de inscripci\xF3n" : "Contacto"} </h2> ${renderComponent($$result4, "NewsForm", $$NewsForm, { "tipo": noticia.tipoFormulario, "asunto": `Formulario: ${noticia.titulo}` })} </div>`}` })}` : renderTemplate`<div class="bg-red-900 border border-red-700 rounded-xl p-6 text-center"> <h1 class="text-3xl font-bold text-white">Noticia no encontrada</h1> <p class="text-red-200 mt-2">La noticia que estás buscando no existe o ha sido eliminada.</p> </div>`}` })} </main> ` })}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/noticias/[id].astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/noticias/[id].astro";
const $$url = "/noticias/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
