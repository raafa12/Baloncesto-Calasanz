/* empty css                                   */
import { e as createComponent, f as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_ClUm7ASJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$SectionContainer } from '../chunks/SectionContainer_L9yUcmDO.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_DHDeXzSS.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/assets/Code.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "description": "Cont\xE1ctanos para cualquier duda o sugerencia." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 py-24 space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "contacto" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CodeIcon", $$Code, { "class": "size-8" })}
Contacto
` })} <div class="max-w-xl space-y-8"> <form action="https://formsubmit.co/TU_EMAIL@ejemplo.com" method="POST" class="space-y-4"> <input type="hidden" name="_captcha" value="false"> <label class="block"> <span class="text-sm">Nombre</span> <input type="text" name="nombre" required class="w-full p-2 rounded bg-green-900 border border-green-600"> </label> <label class="block"> <span class="text-sm">Correo electrónico</span> <input type="email" name="email" required class="w-full p-2 rounded bg-green-900 border border-green-600"> </label> <label class="block"> <span class="text-sm">Mensaje</span> <textarea name="mensaje" rows="4" class="w-full p-2 rounded bg-green-900 border border-green-600"></textarea> </label> <button type="submit" class="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl">
Enviar mensaje
</button> </form> <div class="text-sm text-gray-300 space-y-1"> <p><strong>Correo:</strong> contacto@clubbaloncesto.com</p> <p><strong>Dirección:</strong> Calle del Deporte, 123</p> <p><strong>Teléfono:</strong> +34 600 123 456</p> </div> </div> ` })} </main> ` })}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/contact.astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
