self.addEventListener('install', e=>{
  e.waitUntil(caches.open('tetris-neo-bgm').then(c=>c.addAll([
    './index.html','./manifest.json','./icon.png','./bgm.mp3'
  ])));
});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});