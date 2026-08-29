// Self-destructing Service Worker v2
// Replaces any old broken SW, clears all caches, then unregisters itself
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.registration.unregister(),
      caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))),
      self.clients.claim()
    ]).then(() => {
      // Notify all clients to reload
      return self.clients.matchAll({ type: 'window' });
    }).then(clients => {
      clients.forEach(c => c.navigate(c.url));
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Always pass through to network, never use cache
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
  }
});
