self.addEventListener('install',e=>{
  e.waitUntil(caches.open('ut-final').then(c=>c.addAll([
    './index.html','./icon.png','./manifest.json','./bgm.mp3'
  ])));
});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});