
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5637, hash: 'bebeeda5eeb16fdc3d1e143d6a8b2fce9c17db2de5301496d00b1077cd90e0e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: '8937f5f9b28738f4b3d7eb5072bec201173b3a496f11a82e075c262ab6d77947', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HZH4O3ZJ.css': {size: 228018, hash: 'vuG+GNa2xrM', text: () => import('./assets-chunks/styles-HZH4O3ZJ_css.mjs').then(m => m.default)}
  },
};
