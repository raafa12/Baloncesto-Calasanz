/* empty css                                   */
import { e as createComponent, f as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dd-cBrd7.mjs';
import { $ as $$SectionContainer, a as $$TitleSection } from '../chunks/TitleSection_D0sVFOdC.mjs';
import { $ as $$PageContainer } from '../chunks/PageContainer_C8RntY-S.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/assets/Code.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "description": "Cont\xE1ctanos para cualquier duda o sugerencia." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageContainer", $$PageContainer, { "class": "space-y-24" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionContainer", $$SectionContainer, { "id": "contacto" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TitleSection", $$TitleSection, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CodeIcon", $$Code, { "class": "size-8" })}
Contacto
` })} ${maybeRenderHead()}<div class="max-w-xl space-y-8"> <form action="https://formsubmit.co/TU_EMAIL@ejemplo.com" method="POST" class="space-y-4"> <input type="hidden" name="_captcha" value="false"> <label class="block"> <span class="text-sm">Nombre</span> <input type="text" name="nombre" required class="w-full p-2 rounded bg-green-900 border border-green-600"> </label> <label class="block"> <span class="text-sm">Correo electrónico</span> <input type="email" name="email" required class="w-full p-2 rounded bg-green-900 border border-green-600"> </label> <label class="block"> <span class="text-sm">Mensaje</span> <textarea name="mensaje" rows="4" class="w-full p-2 rounded bg-green-900 border border-green-600"></textarea> </label> <button type="submit" class="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl">
Enviar mensaje
</button> </form> <div class="text-sm text-gray-300 space-y-1"> <p><strong>Correo:</strong> clubdeportivocalasanzsantander@hotmail.com</p> <p><strong>Dirección:</strong> PASEO CANALEJAS 6 Santander 39004</p> <p><strong>Teléfono:</strong> 942221011</p> </div> </div> ` })} ` })} ` })}`;
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
