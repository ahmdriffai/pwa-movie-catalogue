self.addEventListener('install', (event) => {
  console.log('Installing service worker ..');

  // TODO: Caching App Shell
});

self.addEventListener('activate', (event) => {
  console.log('Activate service worker ..');
  // TODO : Delete old cache
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
