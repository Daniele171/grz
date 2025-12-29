const CACHE_NAME = 'secret-code-v1';
const ASSETS = [
  './',
  './index.html',
  './main.js',
  './src/constants.js',
  './src/game-logic.js',
  './src/ui-renderer.js'
];

// Installazione: scarica i file nella cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Attivazione: pulisce vecchie cache
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// Fetch: serve i file dalla cache se offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});