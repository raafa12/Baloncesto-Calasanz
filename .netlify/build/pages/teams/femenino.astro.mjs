/* empty css                                      */
import { e as createComponent, f as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate, i as renderComponent, h as addAttribute } from '../../chunks/astro/server_ClUm7ASJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$SectionContainer } from '../../chunks/SectionContainer_L9yUcmDO.mjs';
import { $ as $$TitleSection } from '../../chunks/TitleSection_DHDeXzSS.mjs';
import 'clsx';
import { $ as $$TeamSection } from '../../chunks/TeamSection_quw0HQ4X.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Fem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Fem;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path> <path d="M12 14v7"></path> <path d="M9 18h6"></path> </svg>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/assets/Fem.astro", void 0);

const $$Femenino = createComponent(($$result, $$props, $$slots) => {
  const equiposFemeninos = [
    {
      nombre: "Benjam\xEDn Femenino",
      descripcion: "Ni\xF1as de 8 a 10 a\xF1os que se inician en el baloncesto de competici\xF3n. Se trabaja en el desarrollo de habilidades motrices b\xE1sicas, coordinaci\xF3n y los fundamentos t\xE9cnicos del juego de una manera l\xFAdica y divertida.",
      imagen: "/images/equipos/benjamin_f.jpg",
      entrenadores: [
        { nombre: "Patricia V\xE1zquez", rol: "Entrenadora Principal", foto: "/images/entrenadores/patricia_v.jpg" },
        { nombre: "Daniel Ortega", rol: "Entrenador Asistente", foto: "/images/entrenadores/daniel_o.jpg" }
      ],
      miembros: [
        { nombre: "Laura Mart\xEDnez", rol: "Base", foto: "/images/jugadores/laura.jpg" },
        { nombre: "Sara Gonz\xE1lez", rol: "Alero", foto: "/images/jugadores/sara.jpg" },
        { nombre: "Sof\xEDa Hern\xE1ndez", rol: "Pivot", foto: "/images/jugadores/sofia_h.jpg" },
        { nombre: "Julia Torres", rol: "Escolta", foto: "/images/jugadores/julia_t.jpg" },
        { nombre: "Carmen Vega", rol: "Ala-Pivot", foto: "/images/jugadores/carmen_v.jpg" }
        // Añadir más jugadoras según sea necesario
      ]
    },
    {
      nombre: "Alev\xEDn Femenino",
      descripcion: "Jugadoras de 10 a 12 a\xF1os que mejoran sus habilidades t\xE9cnicas y t\xE1cticas. Se profundiza en los aspectos t\xE9cnicos individuales y se introducen conceptos t\xE1cticos b\xE1sicos, fomentando la toma de decisiones y la visi\xF3n de juego.",
      imagen: "/images/equipos/alevin_f.jpg",
      entrenadores: [
        { nombre: "Mar\xEDa Serrano", rol: "Entrenadora Principal", foto: "/images/entrenadores/maria_s.jpg" },
        { nombre: "Jaime Navarro", rol: "Entrenador Asistente", foto: "/images/entrenadores/jaime_n.jpg" }
      ],
      miembros: [
        { nombre: "Ana L\xF3pez", rol: "Pivot", foto: "/images/jugadores/ana.jpg" },
        { nombre: "Marta Ruiz", rol: "Escolta", foto: "/images/jugadores/marta.jpg" },
        { nombre: "Irene Blanco", rol: "Base", foto: "/images/jugadores/irene_b.jpg" },
        { nombre: "Paula Garc\xEDa", rol: "Alero", foto: "/images/jugadores/paula_g.jpg" },
        { nombre: "Nuria Sanz", rol: "Ala-Pivot", foto: "/images/jugadores/nuria_s.jpg" }
        // Añadir más jugadoras según sea necesario
      ]
    },
    {
      nombre: "Infantil Femenino",
      descripcion: "Jugadoras de 12 a 14 a\xF1os en pleno desarrollo deportivo. En esta etapa se trabaja la mejora de los fundamentos t\xE9cnicos y t\xE1cticos del juego, con una atenci\xF3n especial al desarrollo f\xEDsico propio de esta edad, fundamental para el progreso deportivo.",
      imagen: "/images/equipos/infantil_f.jpg",
      entrenadores: [
        { nombre: "Luc\xEDa Montero", rol: "Entrenadora Principal", foto: "/images/entrenadores/lucia_m.jpg" },
        { nombre: "Sof\xEDa Blasco", rol: "Preparadora F\xEDsica", foto: "/images/entrenadores/sofia_b.jpg" }
      ],
      miembros: [
        { nombre: "Claudia Fern\xE1ndez", rol: "Ala-Pivot", foto: "/images/jugadores/claudia.jpg" },
        { nombre: "Natalia Torres", rol: "Base", foto: "/images/jugadores/natalia.jpg" },
        { nombre: "Luc\xEDa Romero", rol: "Escolta", foto: "/images/jugadores/lucia_r.jpg" },
        { nombre: "Alba M\xE9ndez", rol: "Alero", foto: "/images/jugadores/alba_m.jpg" },
        { nombre: "Marina Castro", rol: "Pivot", foto: "/images/jugadores/marina_c.jpg" }
        // Añadir más jugadoras según sea necesario
      ]
    },
    {
      nombre: "Cadete Femenino",
      descripcion: "Jugadoras de 14 a 16 a\xF1os con enfoque en la mejora t\xE1ctica y competitiva. Se introduce el trabajo f\xEDsico m\xE1s espec\xEDfico y se profundiza en la especializaci\xF3n por posiciones, con mayor \xE9nfasis en situaciones t\xE1cticas avanzadas.",
      imagen: "/images/equipos/cadete_f.jpg",
      entrenadores: [
        { nombre: "Cristina Ramos", rol: "Entrenadora Principal", foto: "/images/entrenadores/cristina_r.jpg" },
        { nombre: "Eduardo Soto", rol: "Entrenador Asistente", foto: "/images/entrenadores/eduardo_s.jpg" }
      ],
      miembros: [
        { nombre: "Paula Moreno", rol: "Alero", foto: "/images/jugadores/paula.jpg" },
        { nombre: "Carla D\xEDaz", rol: "Pivot", foto: "/images/jugadores/carla.jpg" },
        { nombre: "Andrea Navarro", rol: "Base", foto: "/images/jugadores/andrea_n.jpg" },
        { nombre: "Cristina L\xF3pez", rol: "Escolta", foto: "/images/jugadores/cristina_l.jpg" },
        { nombre: "Raquel Soto", rol: "Ala-Pivot", foto: "/images/jugadores/raquel_s.jpg" }
        // Añadir más jugadoras según sea necesario
      ]
    },
    {
      nombre: "Junior Femenino",
      descripcion: "Jugadoras de 16 a 18 a\xF1os que compiten a nivel avanzado. Este equipo se centra en la preparaci\xF3n para competiciones de alto nivel, con una intensa preparaci\xF3n f\xEDsica, t\xE9cnica y t\xE1ctica. Se afinan los detalles del juego para lograr el m\xE1ximo rendimiento deportivo.",
      imagen: "/images/equipos/junior_f.jpg",
      entrenadores: [
        { nombre: "Eva Jim\xE9nez", rol: "Entrenadora Principal", foto: "/images/entrenadores/eva_j.jpg" },
        { nombre: "Antonio Mart\xEDn", rol: "Entrenador Asistente", foto: "/images/entrenadores/antonio_m.jpg" },
        { nombre: "Carmen Luque", rol: "Preparadora F\xEDsica", foto: "/images/entrenadores/carmen_l.jpg" }
      ],
      miembros: [
        { nombre: "Luc\xEDa G\xF3mez", rol: "Pivot", foto: "/images/jugadores/lucia.jpg" },
        { nombre: "Elena Ruiz", rol: "Escolta", foto: "/images/jugadores/elena.jpg" },
        { nombre: "Mar\xEDa Jim\xE9nez", rol: "Base", foto: "/images/jugadores/maria_j.jpg" },
        { nombre: "Silvia Ortega", rol: "Alero", foto: "/images/jugadores/silvia_o.jpg" },
        { nombre: "Beatriz Mart\xEDn", rol: "Ala-Pivot", foto: "/images/jugadores/beatriz_m.jpg" }
        // Añadir más jugadoras según sea necesario
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Equipos Femeninos | Club Baloncesto Calasanz", "description": "Conoce a nuestros equipos femeninos en sus diferentes categor\xEDas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 py-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "equipos-femeninos" }, { "default": ($$result3) => renderTemplate` <div class="flex items-center space-x-4 mb-8"> <a href="/teams" class="text-green-400 hover:text-green-300 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path> </svg>
Volver a Equipos
</a> </div> ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "FemIcon", $$Fem, { "class": "size-8" })}
Sección Femenina
` })} <div class="max-w-5xl mx-auto mt-8"></div>  <div class="flex flex-wrap justify-center gap-2 mb-16"> ${equiposFemeninos.map((equipo) => renderTemplate`<a${addAttribute(`#${equipo.nombre.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="px-4 py-2 bg-green-800 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-colors"> ${equipo.nombre} </a>`)} </div>  <div class="space-y-24"> ${equiposFemeninos.map((equipo) => renderTemplate`<div${addAttribute(equipo.nombre.toLowerCase().replace(/\s+/g, "-"), "id")} class="scroll-mt-24"> ${renderComponent($$result3, "TeamSection", $$TeamSection, { ...equipo })} </div>`)} </div> ` })} </main> ` })}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams/femenino.astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams/femenino.astro";
const $$url = "/teams/femenino";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Femenino,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
