const CACHE = 'space-shooter-v1';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  './fighter_topdown.png',
  './rocket_cutout.png',
  './rocket_blue_cutout.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
