import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Djfb3Y64.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/equipos/temporada-25-26.astro.mjs');
const _page3 = () => import('./pages/equipos.astro.mjs');
const _page4 = () => import('./pages/news.astro.mjs');
const _page5 = () => import('./pages/noticias/_id_.astro.mjs');
const _page6 = () => import('./pages/resultados/jornada/_id_.astro.mjs');
const _page7 = () => import('./pages/resultados.astro.mjs');
const _page8 = () => import('./pages/teams/femenino.astro.mjs');
const _page9 = () => import('./pages/teams/masculino.astro.mjs');
const _page10 = () => import('./pages/teams.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/equipos/temporada-25-26.astro", _page2],
    ["src/pages/equipos.astro", _page3],
    ["src/pages/news.astro", _page4],
    ["src/pages/noticias/[id].astro", _page5],
    ["src/pages/resultados/jornada/[id].astro", _page6],
    ["src/pages/resultados/index.astro", _page7],
    ["src/pages/teams/femenino.astro", _page8],
    ["src/pages/teams/masculino.astro", _page9],
    ["src/pages/teams.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: undefined
});
const _args = {
    "middlewareSecret": "f639aece-05a2-4c6f-9c09-c6134d2fa8b1"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
