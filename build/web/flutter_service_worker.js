'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5790bcc0148bfb3bda7796545bec0958",
"assets/assets/avatar.png": "91cf1b0e0c9b3c077f4a8d4e57dea1a4",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "fbc1b8f61911f5ecc3d608e39af0b521",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/Mobile.jpg": "af5902e01ca447c1edde48c7b37fdbe4",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/skill/ux.webp": "76a61d9f6e4c06374562bf39a50eff93",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/ux.png": "76a61d9f6e4c06374562bf39a50eff93",
"assets/assets/web.jpg": "74357cc6132c7d497b23ae16144f1884",
"assets/assets/works/bangdu.jpg": "429ff005d9203b5098581ab22d533d96",
"assets/assets/works/jempolan.png": "a37051877e45cd3f1f1ff46ae3143147",
"assets/assets/works/katalogue.jpg": "981a1007a00757b42ef520fabf7e135c",
"assets/assets/works/persija.jpg": "ac4510c6a7d13256db4d75555f2ad8ff",
"assets/assets/works/redesign.jpg": "b14c17de0ca10252effa351da50ef60b",
"assets/FontManifest.json": "8d5a07cac855684a51e3ff7a9bebcc1a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a05fef31b70df1747a229c8e646f1452",
"/": "a05fef31b70df1747a229c8e646f1452",
"main.dart.js": "2c7153436d3805b94877b9ab747cb208",
"manifest.json": "535c5353314d6df92beb238b9f79e910"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
