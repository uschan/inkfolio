// Basic Service Worker for PWA installability
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through strategy. 
  // We rely on browser caching or Vite's hashing for assets 
  // and prioritize network to ensure content is fresh.
  event.respondWith(fetch(event.request));
});