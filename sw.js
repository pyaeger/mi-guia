const CACHE = 'mi-guia-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      Promise.all(
        ['./', './index.html', './o-hache-eme.mp3'].map((u) => c.add(u).catch(() => {}))
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    // Red primero para que las actualizaciones lleguen; caché si no hay internet.
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copia = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copia));
          return res;
        })
        .catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
    );
    return;
  }
  // Recursos (la canción): caché primero, red de respaldo.
  e.respondWith(
    caches.match(e.request).then((r) =>
      r ||
      fetch(e.request).then((res) => {
        const copia = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copia));
        return res;
      })
    )
  );
});
