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
const $$Masc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Masc;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path> <path d="M19 5l-5.4 5.4"></path> <path d="M19 5h-5"></path> <path d="M19 5v5"></path> </svg>`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/assets/Masc.astro", void 0);

const $$Masculino = createComponent(($$result, $$props, $$slots) => {
  const equiposMasculinos = [
    {
      nombre: "Benjam\xEDn Masculino",
      descripcion: "Ni\xF1os de 8 a 10 a\xF1os que se inician en el baloncesto de competici\xF3n",
      imagen: "../src/assets/BenjaKids.JPG",
      entrenadores: [
        { nombre: "Rodrigo Pe\xF1a", rol: "Entrenador", foto: "../src/assets/BenjaMasc/Rodri.JPG" },
        { nombre: "Andrea Gonz\xE1lez", rol: "Entrenadora", foto: "../src/assets/BenjaMasc/Andrea.JPEG" },
        { nombre: "David Aleson", rol: "Entrenador Asistente", foto: "../src/assets/BenjaMasc/Aleson.JPEG" }
      ],
      miembros: [
        { nombre: "Cesar Djaider", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/999925fd-f064-43b9-b1e1-7026159d2080.jpg" },
        { nombre: "Alonso Gallegos", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/902e42f1-68f8-4f20-9139-19ecf80a6fa8.jpg" },
        { nombre: "Mario Gallegos", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/5ee018d7-9656-4c57-971b-57f5d6782921.jpg" },
        { nombre: "Javier Gonz\xE1lez", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/22a6f36f-2bdd-458a-a6f8-f1aa26a6ca13.jpeg" },
        { nombre: "Alvaro Arbide", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/f319881e-c95a-4463-a456-7bc6b8d891b7.jpg" },
        { nombre: "Julen Gonz\xE1lez", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/860c71f6-a68e-40d5-b50c-049dcdf5d6d0.jpg" },
        { nombre: "Pablo del Portillo", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/e3d47f66-d394-4bc8-bebf-44461531af23.jpg" },
        { nombre: "Javier P\xE9rez", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/90ca8457-c0bd-40dc-8be7-03303de0c5a1.jpeg" },
        { nombre: "Martin Pascual", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/c6862141-eac4-493c-a5cf-d4e5e16e7646.jpg" },
        { nombre: "Javier Pe\xF1a", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/84bc4d89-f33f-4bd9-8b55-e6e19907f5a3.jpg" },
        { nombre: "Borja Fern\xE1ndez", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/be2125b0-9c92-46b1-98bf-ecce4790495e.jpg" },
        { nombre: "Javier Garc\xEDa", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/6fb4c5bc-356a-4460-b4bf-0ab3f74c512b.jpeg" },
        { nombre: "Hugo Fern\xE1ndez", rol: "", foto: "https://ow-produccio-fecan.s3.eu-west-1.amazonaws.com/federats/fotos/5ec6b999-7c5b-43de-8b1b-e00694cda5c4.jpg" }
      ]
    },
    {
      nombre: "Alev\xEDn Masculino",
      descripcion: "Jugadores de 10 a 12 a\xF1os que mejoran sus habilidades t\xE9cnicas y t\xE1cticas.",
      imagen: "/images/equipos/alevin_m.jpg",
      entrenadores: [
        { nombre: "Pedro S\xE1nchez", rol: "Entrenador Principal", foto: "/images/entrenadores/pedro_s.jpg" },
        { nombre: "Laura Gonz\xE1lez", rol: "Entrenadora Asistente", foto: "/images/entrenadores/laura_g.jpg" }
      ],
      miembros: [
        { nombre: "Pablo Garc\xEDa", rol: "Pivot", foto: "/images/jugadores/pablo.jpg" },
        { nombre: "Marcos L\xF3pez", rol: "Escolta", foto: "/images/jugadores/marcos.jpg" },
        { nombre: "Lucas Fern\xE1ndez", rol: "Base", foto: "/images/jugadores/lucas_f.jpg" },
        { nombre: "Adri\xE1n Mart\xEDn", rol: "Alero", foto: "/images/jugadores/adrian_m.jpg" },
        { nombre: "Hugo S\xE1nchez", rol: "Ala-Pivot", foto: "/images/jugadores/hugo_s.jpg" }
        // Añadir más jugadores según sea necesario
      ]
    },
    {
      nombre: "Infantil Masculino",
      descripcion: "Jugadores de 12 a 14 a\xF1os en pleno desarrollo deportivo.",
      imagen: "/images/equipos/infantil_m.jpg",
      entrenadores: [
        { nombre: "Miguel Rodr\xEDguez", rol: "Entrenador Principal", foto: "/images/entrenadores/miguel_r.jpg" },
        { nombre: "Sara P\xE9rez", rol: "Preparadora F\xEDsica", foto: "/images/entrenadores/sara_p.jpg" }
      ],
      miembros: [
        { nombre: "Alejandro Ruiz", rol: "Ala-Pivot", foto: "/images/jugadores/alejandro.jpg" },
        { nombre: "Miguel S\xE1nchez", rol: "Base", foto: "/images/jugadores/miguel.jpg" },
        { nombre: "Ra\xFAl Torres", rol: "Escolta", foto: "/images/jugadores/raul_t.jpg" },
        { nombre: "V\xEDctor Navarro", rol: "Alero", foto: "/images/jugadores/victor_n.jpg" },
        { nombre: "Sergio Mu\xF1oz", rol: "Pivot", foto: "/images/jugadores/sergio_m.jpg" }
        // Añadir más jugadores según sea necesario
      ]
    },
    {
      nombre: "Cadete Masculino",
      descripcion: "Jugadores de 14 a 16 a\xF1os con enfoque en la mejora t\xE1ctica y competitiva.",
      imagen: "/images/equipos/cadete_m.jpg",
      entrenadores: [
        { nombre: "David G\xF3mez", rol: "Entrenador Principal", foto: "/images/entrenadores/david_g.jpg" },
        { nombre: "Carlos Ram\xEDrez", rol: "Entrenador Asistente", foto: "/images/entrenadores/carlos_r.jpg" }
      ],
      miembros: [
        { nombre: "Javier Rodr\xEDguez", rol: "Alero", foto: "/images/jugadores/javier.jpg" },
        { nombre: "David N\xFA\xF1ez", rol: "Pivot", foto: "/images/jugadores/david.jpg" },
        { nombre: "Iker V\xE1zquez", rol: "Base", foto: "/images/jugadores/iker_v.jpg" },
        { nombre: "Guillermo Ramos", rol: "Escolta", foto: "/images/jugadores/guillermo_r.jpg" },
        { nombre: "Roberto Molina", rol: "Ala-Pivot", foto: "/images/jugadores/roberto_m.jpg" }
        // Añadir más jugadores según sea necesario
      ]
    },
    {
      nombre: "Junior Masculino",
      descripcion: "Jugadores de 16 a 18 a\xF1os que compiten a nivel avanzado.",
      imagen: "/images/equipos/junior_m.jpg",
      entrenadores: [
        { nombre: "Javier Torres", rol: "Entrenador Principal", foto: "/images/entrenadores/javier_t.jpg" },
        { nombre: "Elena D\xEDaz", rol: "Entrenadora Asistente", foto: "/images/entrenadores/elena_d.jpg" },
        { nombre: "Roberto Sanz", rol: "Preparador F\xEDsico", foto: "/images/entrenadores/roberto_s.jpg" }
      ],
      miembros: [
        { nombre: "Pedro L\xF3pez", rol: "Base", foto: "/images/jugadores/pedro.jpg" },
        { nombre: "Juan D\xEDaz", rol: "Alero", foto: "/images/jugadores/juan.jpg" },
        { nombre: "Mario Jim\xE9nez", rol: "Pivot", foto: "/images/jugadores/mario_j.jpg" },
        { nombre: "\xC1lvaro P\xE9rez", rol: "Escolta", foto: "/images/jugadores/alvaro_p.jpg" },
        { nombre: "Francisco Moreno", rol: "Ala-Pivot", foto: "/images/jugadores/francisco_m.jpg" }
        // Añadir más jugadores según sea necesario
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Equipos Masculinos | Club Baloncesto Calasanz", "description": "Conoce a nuestros equipos masculinos en sus diferentes categor\xEDas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 py-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "equipos-masculinos" }, { "default": ($$result3) => renderTemplate` <div class="flex items-center space-x-4 mb-8"> <a href="/teams" class="text-green-400 hover:text-green-300 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path> </svg>
Volver a Equipos
</a> </div> ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MascIcon", $$Masc, { "class": "size-8" })}
Sección Masculina
` })}  <div class="flex flex-wrap justify-center gap-2 mb-16"> ${equiposMasculinos.map((equipo) => renderTemplate`<a${addAttribute(`#${equipo.nombre.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="px-4 py-2 bg-green-800 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-colors"> ${equipo.nombre} </a>`)} </div>  <div class="space-y-24"> ${equiposMasculinos.map((equipo) => renderTemplate`<div${addAttribute(equipo.nombre.toLowerCase().replace(/\s+/g, "-"), "id")} class="scroll-mt-24"> ${renderComponent($$result3, "TeamSection", $$TeamSection, { ...equipo })} </div>`)} </div> ` })} </main> ` })}`;
}, "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams/masculino.astro", void 0);

const $$file = "C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams/masculino.astro";
const $$url = "/teams/masculino";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Masculino,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
