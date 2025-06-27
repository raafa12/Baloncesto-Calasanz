import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, l as renderSlot, r as renderTemplate } from './astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$PageContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageContainer;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container mx-auto px-4 sm:px-24 md:px-48 lg:px-64 xl:px-80 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 max-w-7xl ${className || ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/common/PageContainer.astro", void 0);

export { $$PageContainer as $ };
