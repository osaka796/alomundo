const cacheName = 'ola-pwa';
var filesToCache = [
'./',
'./manifest.webmanifest',
'./index.html',
'./css/style.css',
'./js/main.js'

];

self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(fillesToCache);
        })
    );
    self.skipWaiting();
})

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.resquest).then(function(response){
            return response || fetch(e.resquest);
        })
    );
});