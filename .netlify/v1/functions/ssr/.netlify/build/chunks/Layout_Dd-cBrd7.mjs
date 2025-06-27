import { e as createComponent, m as maybeRenderHead, k as renderScript, h as addAttribute, r as renderTemplate, f as createAstro, i as renderComponent, n as renderHead, l as renderSlot } from './astro/server_CjOqp-at.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Inicio",
      label: "inicio",
      url: "/",
      icon: "home"
    },
    {
      title: "Equipos",
      label: "equipos",
      url: "/teams",
      icon: "users"
    },
    {
      title: "Resultados",
      label: "resultados",
      url: "/resultados",
      icon: "chart-bar"
    },
    {
      title: "Noticias",
      label: "news",
      url: "/news",
      icon: "newspaper"
    },
    {
      title: "Contacto",
      label: "contact",
      url: "/contact",
      icon: "envelope"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-50 w-full bg-green-900 shadow-lg" data-astro-cid-qmpwvs2w> <!-- Top bar with logo and social media icons --> <div class="bg-green-950 py-1 px-4 border-b border-green-600" data-astro-cid-qmpwvs2w> <div class="container mx-auto flex justify-between items-center" data-astro-cid-qmpwvs2w> <div class="text-xs text-white/70 uppercase tracking-wider font-medium" data-astro-cid-qmpwvs2w>Club Baloncesto CALASANZ</div> <div class="flex space-x-3" data-astro-cid-qmpwvs2w> <a href="https://www.instagram.com/cbcalasanz/" class="text-white/70 hover:text-green-400 transition-colors" data-astro-cid-qmpwvs2w> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-qmpwvs2w> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-qmpwvs2w></path> </svg> </a> <a href="https://x.com/cbcalasanz?lang=es" class="text-white/70 hover:text-green-400 transition-colors" data-astro-cid-qmpwvs2w> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-qmpwvs2w> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" data-astro-cid-qmpwvs2w></path> </svg> </a> </div> </div> </div> <!-- Main navigation bar --> <div class="container mx-auto px-4 py-3" data-astro-cid-qmpwvs2w> <div class="flex justify-between items-center" data-astro-cid-qmpwvs2w> <!-- Logo and site name --> <div class="flex items-center space-x-3" data-astro-cid-qmpwvs2w> <div class="h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden" data-astro-cid-qmpwvs2w> <img src="/images/LogoCalasanz.png" alt="Logo Calasanz" class="h-9 w-9 object-contain" data-astro-cid-qmpwvs2w> </div> <div data-astro-cid-qmpwvs2w> <div class="text-white font-extrabold text-lg uppercase" data-astro-cid-qmpwvs2w>CALASANZ</div> <div class="text-green-400 text-xs uppercase tracking-wider" data-astro-cid-qmpwvs2w>Club de Baloncesto</div> </div> </div> <!-- Mobile menu button --> <div class="md:hidden" data-astro-cid-qmpwvs2w> <button id="mobile-menu-button" class="text-white hover:text-green-400 focus:outline-none" data-astro-cid-qmpwvs2w> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-qmpwvs2w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-qmpwvs2w></path> </svg> </button> </div> <!-- Desktop navigation --> <nav class="hidden md:flex space-x-1" data-astro-cid-qmpwvs2w> ${navItems.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="px-4 py-2 text-white hover:text-white hover:bg-green-600 uppercase font-bold tracking-wide text-sm transition-colors duration-200 flex items-center"${addAttribute(link.label, "data-nav-link")} data-astro-cid-qmpwvs2w> <span data-astro-cid-qmpwvs2w>${link.title}</span> </a>`)} </nav> </div> </div> <!-- Mobile navigation menu --> <div id="mobile-menu" class="hidden md:hidden bg-green-800 border-t border-green-600/30 pb-4" data-astro-cid-qmpwvs2w> <nav class="container mx-auto px-4 pt-2 flex flex-col space-y-1" data-astro-cid-qmpwvs2w> ${navItems.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="px-4 py-3 text-white hover:text-white hover:bg-green-600 uppercase font-bold tracking-wide text-sm transition-colors duration-200 flex items-center"${addAttribute(link.label, "data-nav-link")} data-astro-cid-qmpwvs2w> <span data-astro-cid-qmpwvs2w>${link.title}</span> </a>`)} </nav> </div> </header> <!-- Spacer to prevent content from being hidden under the fixed header --> <div class="h-[5.5rem] md:h-[7rem]" data-astro-cid-qmpwvs2w></div> ${renderScript($$result, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/common/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-24 py-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700"> <p>
© ${currentYear} <a href="https://instagram.com/rafabasanta" target="_blank" rel="noopener noreferrer" class="underline text-inherit hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
Rafael Basanta
</a>. Todos los derechos reservados.
</p> </footer>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/common/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/rafab/github/Baloncesto-Calasanz/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es" class="dark overflow-x-hidden"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="relative text-white max-w-[100vw] overflow-x-hidden"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-green-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(50,200,100,0.6),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
