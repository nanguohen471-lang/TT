self.addEventListener('install', e=>{
  e.waitUntil(caches.open('tetris-neo-v4').then(c=>c.addAll([
    './index.html','./manifest.json','./icon.png'
  ])));
});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});