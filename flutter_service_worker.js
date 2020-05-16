'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2b63847be3547a371f436811960557b6",
".git/config": "f95993919d70be08110539b0077b435a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "310b9d54f9eb08b9399c3d0af9b6ff66",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3a0f2b9a0f33a091e9080e8ca6a0c73",
".git/logs/refs/heads/master": "b3a0f2b9a0f33a091e9080e8ca6a0c73",
".git/logs/refs/remotes/origin/master": "35180f3bd393b846c22979aa8f74401a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1d/3e26b8be19cb9f187f03d3ae7de5b07ac113d9": "c6c451c13f6952e76f7784d747f3eea2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/53b31e7b810f599c646495a153639d353cce48": "97a663ac75a0823b8a45aa4cf09c6c3a",
".git/objects/2f/a89205b34191c37cfa657be79b57991406ccb9": "a3736d482898d04f3f07acf98327b22a",
".git/objects/40/5e7917d0459fdeadece410b52e0190d9dcc7a4": "1c8c0be67977a0cb4346928560630e05",
".git/objects/51/d8b8d301e37c882287964ffa498760a19b0acb": "b874c44a68bb368d3b19e7f1d557b07e",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/798c83cba871dbf954b130f23fc98b5a384109": "4ff0698ec42e590a6efdc94d0b6164a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a6/3658f89be37181b6b25d27e41a86853e2a0c6a": "60bc1d13b15c7afe5185f76d82de4e9c",
".git/objects/ab/8cb4e9aac6b10b6324d3d5d52bf5129cd21b77": "a4bc327d66b2d48bb6cf138a0b76fcb7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e3/3d7685775d11dbe0f4a56670d29a0b0cbffe2d": "c7645788e35a8646f79b624218c55882",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "e3f52dc98de2ce9fb6eb52ac77edd5b3",
".git/refs/remotes/origin/master": "e3f52dc98de2ce9fb6eb52ac77edd5b3",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "d7972a8462a688ee12e51108e5cbe384",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6bb5fb2f2533d24402d0c02c4e7e9775",
"/": "6bb5fb2f2533d24402d0c02c4e7e9775",
"main.dart.js": "adcf3c3555d6ff4d8edb692f74c8cead",
"manifest.json": "a859e40dbe449b8296a376039f8dc29b"
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
