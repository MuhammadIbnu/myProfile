'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b474253a97d54ec9e6cffafdfe6b85e4",
"assets/assets/avatar.png": "91cf1b0e0c9b3c077f4a8d4e57dea1a4",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "fbc1b8f61911f5ecc3d608e39af0b521",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/works/bangdu.jpg": "429ff005d9203b5098581ab22d533d96",
"assets/assets/works/jempolan.png": "a37051877e45cd3f1f1ff46ae3143147",
"assets/assets/works/katalogue.jpg": "981a1007a00757b42ef520fabf7e135c",
"assets/assets/works/persija.jpg": "ac4510c6a7d13256db4d75555f2ad8ff",
"assets/assets/works/redesign.jpg": "b14c17de0ca10252effa351da50ef60b",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "1ecd3b018655a0e2b816584f6be5dae1",
"/": "1ecd3b018655a0e2b816584f6be5dae1",
"main.dart.js": "1d6c392ce6a179ace82e74b3c54a6a9b"
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
