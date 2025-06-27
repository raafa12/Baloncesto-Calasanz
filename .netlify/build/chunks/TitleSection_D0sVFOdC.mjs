import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, l as renderSlot, r as renderTemplate } from './astro/server_CjOqp-at.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`mb-6 sm:mb-8 w-full ${className} scroll-m-20 mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/common/SectionContainer.astro", void 0);

const $$Astro = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/components/common/TitleSection.astro", void 0);

export { $$SectionContainer as $, $$TitleSection as a };
