import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderSlot, r as renderTemplate } from './astro/server_ClUm7ASJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/TitleSection.astro", void 0);

export { $$TitleSection as $ };
