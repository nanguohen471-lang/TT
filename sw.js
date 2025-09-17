self.addEventListener('install', e=>{
  e.waitUntil(caches.open('tetris-neo-v3').then(c=>c.addAll([
    './index.html','./manifest.json','./icon.png',
    './bgm.mp3','./rotate.mp3','./clear.mp3','./tspin.mp3','./gameover.mp3'
  ])));
});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});