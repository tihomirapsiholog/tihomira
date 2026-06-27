const CACHE = 'vreme-v1';
const ASSETS = [
  '/vreme/',
  '/vreme/index.html',
  '/vreme/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || 'Razgovor sa vremenom';
  const options = {
    body: data.body || 'Otvori dan.',
    icon: '/vreme/icon-192.png',
    badge: '/vreme/icon-192.png',
    tag: data.tag || 'vreme',
    data: { url: '/vreme/' },
    actions: [
      { action: 'open', title: 'Otvori' }
    ]
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      for (const c of list) {
        if (c.url.includes('/vreme') && 'focus' in c) return c.focus();
      }
      return clients.openWindow('/vreme/');
    })
  );
});
