if(!self.define){let e,d={};const i=(i,c)=>(i=new URL(i+".js",c).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(d[s])return;let r={};const f=e=>i(e,s),a={module:{uri:s},exports:r,require:f};d[s]=Promise.all(c.map((e=>a[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-927b2f12"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"192.bundle.js",revision:"b2a0cdd1e6f66f1ed53cc60519ccc303"},{url:"198d07d4a138115e1f17.jpg",revision:null},{url:"2.bundle.js",revision:"07a1d6bfcd0d8cff4c68a4e64fd52845"},{url:"app.webmanifest",revision:"a55391b86366c6e146816950214c6530"},{url:"app~4e5ec22b.bundle.js",revision:"a4d41ae8fc2416329c3ecbc402fddcd9"},{url:"app~7bd12dde.bundle.js",revision:"f551d15e71a8f3d3fdc641b4c6dbb583"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"d9657ad95463b3c07286ed5c7c041706"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"42c99a3e22a63c7af1b26566569cc818"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"6f82d6b85ab177ed69bc7455a10588f7"},{url:"icons/icon-192.png",revision:"6f82d6b85ab177ed69bc7455a10588f7"},{url:"icons/icon-384.png",revision:"7e68128ff7f6862e81ce6f950bea7d1e"},{url:"icons/icon-600.png",revision:"d70c5c8f1da18c00b1f2b2a2c6fd7a3f"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"index.html",revision:"b53cd46d171d2b4ec50f65cd17bfe52d"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"restaurant",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
