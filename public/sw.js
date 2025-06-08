
const CACHE_NAME = 'bici-ros-v1';
const urlsToCache = [
  '/',
  '/cycling-trainer.html',
  '/manifest.json',
  '/lovable-uploads/01c937dc-57db-4d40-93cd-751fc488dfa4.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
