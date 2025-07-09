import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

// This will be replaced by Workbox CLI or Webpack.
precacheAndRoute(self.__WB_MANIFEST || []);

// Example: Cache images with a StaleWhileRevalidate strategy
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images',
  })
);

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(async function() {
    // Try to get the preloaded response, if it's there
    const preloadedResponse = await event.preloadResponse;
    if (preloadedResponse) {
      return preloadedResponse;
    }

    // Otherwise, go to the network
    return fetch(event.request);
  }());
});