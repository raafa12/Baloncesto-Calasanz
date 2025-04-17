import { e as createComponent, m as maybeRenderHead, l as renderScript, h as addAttribute, r as renderTemplate, f as createAstro, i as renderComponent, n as renderHead, k as renderSlot } from './astro/server_ClUm7ASJ.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                           */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Inicio",
      label: "inicio",
      url: "/#"
    },
    {
      title: "Noticias",
      label: "news",
      url: "/news"
    },
    {
      title: "Equipos",
      label: "equipos",
      url: "/teams"
    },
    {
      title: "Contacto",
      label: "contact",
      url: "/contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} </nav> </header> ${renderScript($$result, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} <a href="https://midu.dev/" class="hover:underline">Rafael Basanta. Derechos reservados </a>.
</span> </div> </footer>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/rafab/github/Baloncesto-Calasanz/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es" class="dark"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="relative text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-green-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(50,200,100,0.6),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/SectionContainer.astro", void 0);

export { $$Layout as $, $$SectionContainer as a };
