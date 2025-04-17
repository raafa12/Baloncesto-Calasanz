import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DaYbaddg.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/news.astro.mjs');
const _page3 = () => import('./pages/noticias/_id_.astro.mjs');
const _page4 = () => import('./pages/teams/femenino.astro.mjs');
const _page5 = () => import('./pages/teams/masculino.astro.mjs');
const _page6 = () => import('./pages/teams.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/news.astro", _page2],
    ["src/pages/noticias/[id].astro", _page3],
    ["src/pages/teams/femenino.astro", _page4],
    ["src/pages/teams/masculino.astro", _page5],
    ["src/pages/teams.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: undefined
});
const _args = {
    "middlewareSecret": "44e070fe-213c-49da-b24b-5e686e59df72"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
