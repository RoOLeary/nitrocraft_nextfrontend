if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LMVuwRJkksTrnzgV8ycdf/_buildManifest.js",revision:"3c8005c56948456ee6b49d2252c53e7a"},{url:"/_next/static/LMVuwRJkksTrnzgV8ycdf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/165-ad3eb2135a2756c2.js",revision:"ad3eb2135a2756c2"},{url:"/_next/static/chunks/486-1d7e265d4415504c.js",revision:"1d7e265d4415504c"},{url:"/_next/static/chunks/685-dbacbde863c63a1d.js",revision:"dbacbde863c63a1d"},{url:"/_next/static/chunks/741-1227144d507734d0.js",revision:"1227144d507734d0"},{url:"/_next/static/chunks/85-5aba43d6dc6f1c94.js",revision:"5aba43d6dc6f1c94"},{url:"/_next/static/chunks/958-a83833e06410e578.js",revision:"a83833e06410e578"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-831590d34d10badd.js",revision:"831590d34d10badd"},{url:"/_next/static/chunks/pages/%5Bcategory%5D-09a4cbdf35ad8234.js",revision:"09a4cbdf35ad8234"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/%5Bslug%5D-62d30a1049b981ed.js",revision:"62d30a1049b981ed"},{url:"/_next/static/chunks/pages/_app-d5ad087ea9d5dbe8.js",revision:"d5ad087ea9d5dbe8"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/about-8305712403834734.js",revision:"8305712403834734"},{url:"/_next/static/chunks/pages/all-components-c6132d4c899dc9a0.js",revision:"c6132d4c899dc9a0"},{url:"/_next/static/chunks/pages/contact-2e9b9faa3efe4838.js",revision:"2e9b9faa3efe4838"},{url:"/_next/static/chunks/pages/index-6b8230efa5885948.js",revision:"6b8230efa5885948"},{url:"/_next/static/chunks/pages/members-eecf01f693431904.js",revision:"eecf01f693431904"},{url:"/_next/static/chunks/pages/posts-5db4a1040cbfe807.js",revision:"5db4a1040cbfe807"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-fe9aaf6ecead3959.js",revision:"fe9aaf6ecead3959"},{url:"/_next/static/chunks/pages/retest-59d4dffa25639913.js",revision:"59d4dffa25639913"},{url:"/_next/static/chunks/pages/tech-aa1d229547a8f536.js",revision:"aa1d229547a8f536"},{url:"/_next/static/chunks/pages/tech/%5Bslug%5D-22944b0ddabb8fbf.js",revision:"22944b0ddabb8fbf"},{url:"/_next/static/chunks/pages/topics-1490015fb900d179.js",revision:"1490015fb900d179"},{url:"/_next/static/chunks/pages/topics/%5Btag%5D-0453c3fb6a85ccdd.js",revision:"0453c3fb6a85ccdd"},{url:"/_next/static/chunks/pages/withclick-547971f5a87454fd.js",revision:"547971f5a87454fd"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f61b98a3487640ff.js",revision:"f61b98a3487640ff"},{url:"/_next/static/css/2acfb845fbf8f3b4.css",revision:"2acfb845fbf8f3b4"},{url:"/_next/static/css/3130cc23038613f6.css",revision:"3130cc23038613f6"},{url:"/_next/static/css/776f3d17ab415e10.css",revision:"776f3d17ab415e10"},{url:"/assets/fonts/graphik-medium.woff",revision:"66a39c52d7476e7c823af80341a7fcc2"},{url:"/assets/fonts/graphik-medium.woff2",revision:"9d52fdc183d101a1eacb5a6e5fd82b95"},{url:"/assets/fonts/graphik-regular-italic.woff",revision:"5e1f1b641a3f8c7a133dcfa0329d0bd7"},{url:"/assets/fonts/graphik-regular-italic.woff2",revision:"b67d9a0ab593c17cc2d44fdfecae807b"},{url:"/assets/fonts/graphik-regular.woff",revision:"810cfa0faa09964ed34b28cdae213e8c"},{url:"/assets/fonts/graphik-regular.woff2",revision:"3f97ed33719cc57b85648b5b6b0d8115"},{url:"/assets/fonts/shentox-medium.woff",revision:"1d04a9986c9c8a8ceb2f3f6f6634080c"},{url:"/assets/fonts/shentox-medium.woff2",revision:"ae282d9fad8d91075d8139ee873d91f3"},{url:"/assets/fonts/tnw-avalon-bold.woff",revision:"4d60170699188c45e916e68c735c5dc4"},{url:"/assets/fonts/tnw-avalon-bold.woff2",revision:"bd1f08918c3b46c85f59d6cdaa95f436"},{url:"/assets/img/Garage_innovationhub2.png",revision:"d22a9f58fe26d35cafab7734ccad313c"},{url:"/assets/img/__conf.jpg",revision:"15cf211325bcb43e1e275834a326d72c"},{url:"/assets/img/_htn-floats-2.png",revision:"3734dac08039c13741abc98a96231434"},{url:"/assets/img/_ye_olde_hero-bg.jpg",revision:"3ac6a1420c2bbd2aad9ea8e0d28e57fb"},{url:"/assets/img/audience-member-photo.jpeg",revision:"9e5f98ea6d08c11121371fc42d6ba632"},{url:"/assets/img/beko.svg",revision:"56101c2bbd660bc2eaf5e502fa372dfa"},{url:"/assets/img/cc-bg.jpg",revision:"34fbc22ff3916fe0dc98f39d46d67957"},{url:"/assets/img/cc-floats-2.png",revision:"2431d99677707e9819ffce3a9370aca3"},{url:"/assets/img/ce-bg.jpg",revision:"22d2ff504ca0d055013262cee9f495ee"},{url:"/assets/img/ce-floats-2.png",revision:"547b5cd24710be81859e0e2416cf7324"},{url:"/assets/img/conf.jpg",revision:"298a9073f1b16f4829d62e29c121f77f"},{url:"/assets/img/dj.jpeg",revision:"ed5e9f88c7f1e51afed4bbef593f8d1a"},{url:"/assets/img/facebook.svg",revision:"f44ba9bcad1dbdbc7681c6d082bbe843"},{url:"/assets/img/favicon/apple-touch-icon-114x114.png",revision:"d46186dfd795dda1fa7a0e3325c511e5"},{url:"/assets/img/favicon/apple-touch-icon-120x120.png",revision:"6bdd788c3e86adeb9aa0f0777c2418b2"},{url:"/assets/img/favicon/apple-touch-icon-144x144.png",revision:"2caffc090d2647dc0b16e973cd37649a"},{url:"/assets/img/favicon/apple-touch-icon-152x152.png",revision:"4643ca0195ab2355518d7c6d8f922e60"},{url:"/assets/img/favicon/apple-touch-icon-180x180.png",revision:"5c05be09646b18f205b3b97f7a944e79"},{url:"/assets/img/favicon/apple-touch-icon-57x57.png",revision:"e287ed3d73aa215dde45bdc18914e18a"},{url:"/assets/img/favicon/apple-touch-icon-60x60.png",revision:"5b71468ce1b75b4dc72db8f224b9d9ca"},{url:"/assets/img/favicon/apple-touch-icon-72x72.png",revision:"659245477d8dbc13ddd032a03bdaa32d"},{url:"/assets/img/favicon/apple-touch-icon-76x76.png",revision:"8d5dde6ede9121130c49d1cbb18047db"},{url:"/assets/img/favicon/favicon-16x16.png",revision:"b3598c6132f87839691e6e4f71096866"},{url:"/assets/img/favicon/favicon-192x192.png",revision:"1b147b22301852d8bf47dd282faa2fb7"},{url:"/assets/img/favicon/favicon-194x194.png",revision:"555748fa8c8652aef0296fe64dc5cc77"},{url:"/assets/img/favicon/favicon-32x32.png",revision:"9cd71bf405d0b443c0f56ff21a8a8fa7"},{url:"/assets/img/favicon/favicon-48x48.png",revision:"014397910656e9785b67d9ed75baa04a"},{url:"/assets/img/favicon/favicon-96x96.png",revision:"ec56f721705fac5c8fd66250304e6d6d"},{url:"/assets/img/favicon/favicon.png",revision:"7534dba10d7e4a8422a335e9e05ab87e"},{url:"/assets/img/ft-talent.svg",revision:"ae3a6278eb3d9eae8bd32c2cc9bb57dd"},{url:"/assets/img/ft-tnw-dublin.svg",revision:"8a346ab9239129ebf53ce20d67ce3ab2"},{url:"/assets/img/hack-the-normal-2022.svg",revision:"6dc6e70e556dfb164b57996e258bb9ab"},{url:"/assets/img/header-glow.jpg",revision:"1f78f0433387ec3c6647b5509e2b52d7"},{url:"/assets/img/header-layer-1.png",revision:"6037f5fd43f203dd97297e697e9044a9"},{url:"/assets/img/header-layer-2.png",revision:"06776c7f3eddd38a168baf3cfe8f76df"},{url:"/assets/img/hero-bg.jpg",revision:"e5fabf24b48a95c1b6e559ba1e207021"},{url:"/assets/img/hero-fg.png",revision:"664734e26d8f58af954251a8748f1cca"},{url:"/assets/img/hero-glow.jpg",revision:"6855a2d802b1406732b32b1efcddb95e"},{url:"/assets/img/htn-bg.jpg",revision:"a46f52dd07ee3c5e4d23feb181b478a9"},{url:"/assets/img/htn-floats-2.png",revision:"14f0283167745c162540f3c47ec85621"},{url:"/assets/img/icons.svg",revision:"720490798de9cc71a0755eace9cdc496"},{url:"/assets/img/instagram.svg",revision:"439d1a40a23a14e2f036d8971d27aa98"},{url:"/assets/img/linkedin.svg",revision:"adcc9fbb671d46b0a7f1137be9856100"},{url:"/assets/img/logo.png",revision:"20012e526943c23f738c0f9d3cc89c06"},{url:"/assets/img/modal-header.jpg",revision:"e5752a4e9f3b8dc20fa5aede8b8e0193"},{url:"/assets/img/partner-ft.png",revision:"b5f5c4eb1f2d691312b459e7cdc1ab47"},{url:"/assets/img/reward-appliances.svg",revision:"c7b9b4e54c45f5dd1569cc3a85a8e5ec"},{url:"/assets/img/reward-network.svg",revision:"872bfff82e8fbab305cd632dc4a5c39c"},{url:"/assets/img/reward-preaccelerator.svg",revision:"2cab6398110b3fea6ee9f4277a1a71b5"},{url:"/assets/img/reward-prize.svg",revision:"e1d2382198871a2b30c74088913774df"},{url:"/assets/img/shapes.svg",revision:"8e6636390c8e08b1ee9f858d8cac3e9f"},{url:"/assets/img/speaker-overlay.png",revision:"327c17d1325c8705a52350e377b42f62"},{url:"/assets/img/speaker.jpeg",revision:"96577d89fcc9e3c17d936473b0eaf125"},{url:"/assets/img/spinner.png",revision:"46bba147f4c1a4c91617a58278d9452a"},{url:"/assets/img/stage.jpeg",revision:"4c305485ea7e28038be1fb5de6d8248d"},{url:"/assets/img/tnw.png",revision:"8b6098a5338bbb19c46d55c851a14f6f"},{url:"/assets/img/tnw.svg",revision:"865e6ed4d3090269d35304e2b3417a59"},{url:"/assets/img/trophy.svg",revision:"b2589e6159f81b5809ca8d7b3083f811"},{url:"/assets/img/twitter.svg",revision:"56a1f4d6f9ae7e0330748b038c50d13c"},{url:"/assets/img/wm-bg.jpg",revision:"762b9fc3a44ade0b65b4283dbed933ec"},{url:"/assets/img/youtube.svg",revision:"1395eba5e46133c022333efd3b0e6f45"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/icon-192x192.png",revision:"469f1824f7ca5408c8f919163fd18e99"},{url:"/icons/icon-256x256.png",revision:"ed951865a7c8b24b16b1f7e7ca400a4d"},{url:"/icons/icon-384x384.png",revision:"14a10ed1a95d1599ae34c151a24dff76"},{url:"/icons/icon-512x512.png",revision:"ba31e2018e235b0931ea829bc13cd678"},{url:"/icons/maskable.png",revision:"40513148be233633cbf6c086c8823669"},{url:"/icons/maskable_icon.png",revision:"ca1c191700c948041729dfad23a58d45"},{url:"/manifest.json",revision:"3b6ba1751172e6c8e515c5a3fdce57f8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
