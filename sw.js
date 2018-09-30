var contentCache = 'restaurants-static-v3';
var contentImgsCache = "restaurants-content-imgs";

var allCaches = [
  contentCache,
  contentImgsCache
];

self.addEventListener('install', function(event) {
  // e.waitUntil Delays the event until the Promise is resolved
  event.waitUntil(
    // Open the cache
    caches.open(contentCache).then(function(cache) {
//
    // Add all the default files to the cache
    return cache.addAll([
        '/',
        '/icon/icon-192.png',
        '/icon/icon-512.png',
        "index.html",  
        "restaurant.html",
        "css/styles.css",
        "data/restaurants.json",
        "js/dbhelper.js",
        "js/main.js",
        "js/restaurant_info.js",
        "js/idb.js",
        "img/1.webp",
        "img/2.webp",
        "img/3.webp",
        "img/4.webp",
        "img/5.webp",
        "img/6.webp",
        "img/7.webp",
        "img/8.webp",
        "img/9.webp",
        "img/10.webp",
        'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
      ]).catch((error) => console.log("caches open : " ,error));
    })
  ); // end event.waitUntil
});


self.addEventListener('activate', function(event) {

  event.waitUntil(
    // Get all the cache keys (cacheName)
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurants-') &&
                 !allCaches.includes(cacheName);
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  ); // end event.waitUntil
});

self.addEventListener('fetch', function(event){
  var requestUrl = new URL(event.request.url);

  if (requestUrl.pathname.startsWith('/restaurants/')) {
    return;
  }

  if(requestUrl.pathname.startsWith('/img/')){
    event.respondWith(servePhoto(event.request));
    return;
  }

  event.respondWith(
    caches.open(contentCache).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

function servePhoto(request){
  return caches.open(contentImgsCache).then(function(cache) {
    return cache.match(request).then(function(response) {
      if (response) return response;

      return fetch(request).then(function(networkResponse) {
        cache.put(request, networkResponse.clone());
        return networkResponse;
      });
    });
  });

}