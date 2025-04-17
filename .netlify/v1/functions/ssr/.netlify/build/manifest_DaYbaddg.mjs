import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_ClUm7ASJ.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/rafab/github/Baloncesto-Calasanz/","cacheDir":"file:///C:/Users/rafab/github/Baloncesto-Calasanz/node_modules/.astro/","outDir":"file:///C:/Users/rafab/github/Baloncesto-Calasanz/dist/","srcDir":"file:///C:/Users/rafab/github/Baloncesto-Calasanz/src/","publicDir":"file:///C:/Users/rafab/github/Baloncesto-Calasanz/public/","buildClientDir":"file:///C:/Users/rafab/github/Baloncesto-Calasanz/dist/","buildServerDir":"file:///C:/Users/rafab/github/Baloncesto-Calasanz/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DxcrXRZ-.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DxcrXRZ-.css"}],"routeData":{"route":"/news","isIndex":false,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DxcrXRZ-.css"}],"routeData":{"route":"/noticias/[id]","isIndex":false,"type":"page","pattern":"^\\/noticias\\/([^/]+?)\\/?$","segments":[[{"content":"noticias","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/noticias/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DxcrXRZ-.css"}],"routeData":{"route":"/teams/femenino","isIndex":false,"type":"page","pattern":"^\\/teams\\/femenino\\/?$","segments":[[{"content":"teams","dynamic":false,"spread":false}],[{"content":"femenino","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teams/femenino.astro","pathname":"/teams/femenino","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DxcrXRZ-.css"}],"routeData":{"route":"/teams/masculino","isIndex":false,"type":"page","pattern":"^\\/teams\\/masculino\\/?$","segments":[[{"content":"teams","dynamic":false,"spread":false}],[{"content":"masculino","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teams/masculino.astro","pathname":"/teams/masculino","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DxcrXRZ-.css"}],"routeData":{"route":"/teams","isIndex":false,"type":"page","pattern":"^\\/teams\\/?$","segments":[[{"content":"teams","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teams.astro","pathname":"/teams","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DxcrXRZ-.css"},{"type":"external","src":"/_astro/index.BcpcUFzC.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/news.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/noticias/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams/femenino.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafab/github/Baloncesto-Calasanz/src/pages/teams/masculino.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/news@_@astro":"pages/news.astro.mjs","\u0000@astro-page:src/pages/noticias/[id]@_@astro":"pages/noticias/_id_.astro.mjs","\u0000@astro-page:src/pages/teams/femenino@_@astro":"pages/teams/femenino.astro.mjs","\u0000@astro-page:src/pages/teams/masculino@_@astro":"pages/teams/masculino.astro.mjs","\u0000@astro-page:src/pages/teams@_@astro":"pages/teams.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DaYbaddg.mjs","C:/Users/rafab/github/Baloncesto-Calasanz/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/rafab/github/Baloncesto-Calasanz/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CIN4nMPp.mjs","C:/Users/rafab/github/Baloncesto-Calasanz/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.Bzf3hMiH.js","C:/Users/rafab/github/Baloncesto-Calasanz/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/rafab/github/Baloncesto-Calasanz/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const s=document.querySelectorAll(\"section\"),r=document.querySelectorAll(\"header nav a\"),c=e=>{e.forEach(n=>{n.isIntersecting&&r.forEach(o=>{o.getAttribute(\"aria-label\")==n.target.id?o.classList.add(\"text-green-500\"):o.classList.remove(\"text-blue-500\")})})},t=new IntersectionObserver(c,{root:null,rootMargin:\"0px\",threshold:.3});s.forEach(e=>{t.observe(e)}),document.onvisibilitychange=()=>{document.visibilityState===\"hidden\"?t.disconnect():s.forEach(e=>{t.observe(e)})}});"]],"assets":["/_astro/merriweather-cyrillic-400-normal.AvfsDsMQ.woff2","/_astro/merriweather-latin-ext-400-normal.CWVzVQq3.woff2","/_astro/merriweather-vietnamese-400-normal.hNacsVs_.woff2","/_astro/merriweather-latin-400-normal.G4kZaoXi.woff2","/_astro/merriweather-cyrillic-ext-400-normal.D9NYhYTq.woff2","/_astro/merriweather-vietnamese-400-normal.B_i5Fvg4.woff","/_astro/merriweather-cyrillic-400-normal.DS47APPU.woff","/_astro/merriweather-latin-ext-400-normal.Ckm7TlJj.woff","/_astro/merriweather-latin-400-normal.DrYwLvMc.woff","/_astro/merriweather-cyrillic-ext-400-normal.BI4EjMhz.woff","/_astro/contact.DxcrXRZ-.css","/_astro/index.BcpcUFzC.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"nILhJjCx8gnNo30xGSEr/TuamnXiCQDDalRkWVVqRW0=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\rafab\\github\\Baloncesto-Calasanz\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
