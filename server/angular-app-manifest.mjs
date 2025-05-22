
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mfanaka-photography/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5657, hash: '39b50507f5957ef9928c933961c9b4e29c73f3c1e8c73532901cfcfcc60cefc6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1035, hash: '8e1fd3155bd6949cce50c4171da0af2d52d1a9f5ed9a9d6fc8063a55529aff58', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HZH4O3ZJ.css': {size: 228018, hash: 'vuG+GNa2xrM', text: () => import('./assets-chunks/styles-HZH4O3ZJ_css.mjs').then(m => m.default)}
  },
};
