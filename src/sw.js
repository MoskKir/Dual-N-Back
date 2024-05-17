import { precacheAndRoute } from 'workbox-precaching';

let self;

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
});

precacheAndRoute(self.__WB_MANIFEST)
