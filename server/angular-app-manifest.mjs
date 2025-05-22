
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Mmoke-Nape.github.io/mfanaka-photography/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5685, hash: '9c06ed337937e27fe3dc5bf25067b413932c39c1a4aec0fe3de765fc36751bc2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1063, hash: 'b48e4b8492252dde0dedd8ecd7dfb5aa892c860fe892737f2699769e8c98a44c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HZH4O3ZJ.css': {size: 228018, hash: 'vuG+GNa2xrM', text: () => import('./assets-chunks/styles-HZH4O3ZJ_css.mjs').then(m => m.default)}
  },
};
