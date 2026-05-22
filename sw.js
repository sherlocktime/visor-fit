const CACHE_NAME = 'visor-fit-v1';
// No necesitamos cachear imágenes externas porque se cargan de forma local mediante blobs

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Estrategia bypass estándar
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
