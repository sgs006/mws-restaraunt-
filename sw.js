var cacheID = "mws";

let myCache = [
  "/",
  "/restaurant.html",
  "/index.html",
  "/css/styles.css",
  "/data/restaurants.json",
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg",
  "/js/main.js",
  "/js/restaurant_info.js",
  "/js/dbhelper.js"
];

//install service worker
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches
      .open(myCache)
      .then(function(cache) {
        return cache.addAll(myCache);
      })
      .catch(error => {
        console.log(error);
      })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        console.log("Found ", e.request);
        return response;
      } else {
        console.log("Could not find ", e.request);
        return fetch(e.request);
      }
    })
  );
});
