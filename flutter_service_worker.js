'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e9009429bced51a0702b7596071a65e1",
"index.html": "500b60390c7404111751f7df0e32444b",
"/": "500b60390c7404111751f7df0e32444b",
"main.dart.js": "5e8d9ad03ecd74bcd1b730141fde6795",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d26b379bfd5e442d619e7d4176adda71",
"assets/AssetManifest.json": "c80f99544e70cd9d108603224ff0739d",
"assets/NOTICES": "8e8b67495a794c0abc5405cd6c296e80",
"assets/FontManifest.json": "96d69ad81740e7ec83e09444e9a6c90f",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5ac1d7ff3298eefc763d02cc5228348b",
"assets/fonts/MaterialIcons-Regular.otf": "1d89af49327f9c0e5967475cf272fcd1",
"assets/assets/svg/icons/categories/agricultural.svg": "52158c312214448e21148192d3b634b5",
"assets/assets/svg/icons/categories/spare_part.svg": "93c9ca4cc46eefab6566241bc90e8f5d",
"assets/assets/svg/icons/categories/port_equipment.svg": "8196632e9c3cef254e733e14a9e2d38f",
"assets/assets/svg/icons/categories/quarry_machinery.svg": "a44f73f1558479b4165ea4b80913b7e1",
"assets/assets/svg/icons/categories/rollers.svg": "ed17ac6487f0a720a84e5114152dfbc9",
"assets/assets/svg/icons/categories/forklift.svg": "d224457676e3a7ca3e5415dba555867a",
"assets/assets/svg/icons/categories/industrial.svg": "34534ab2035f97099576b3ca89cd1d07",
"assets/assets/svg/icons/categories/crones.svg": "1ed9c09e00ebc30f16c979ce9e55265e",
"assets/assets/svg/icons/categories/special_dumper.svg": "f6571779784982109092d94f06de8c1e",
"assets/assets/svg/icons/categories/crushing_equipment.svg": "dcd13b7baa5a1e52de8da4e0abd6eb9b",
"assets/assets/svg/icons/categories/municipal_vehicles.svg": "3241c0bcfb88b7f732882ea964058e9c",
"assets/assets/svg/icons/categories/mhe.svg": "5762d1579790085416e6b158048c6851",
"assets/assets/svg/icons/categories/construction.svg": "311f282d6c2de8c6242d6c998a2c89b5",
"assets/assets/svg/icons/categories/mining_equipment.svg": "07d4c2d63a175866e33e1b3edc720d22",
"assets/assets/svg/icons/categories/drilling_machinery.svg": "285aefc6f3ab930c2883316f85b0bb9e",
"assets/assets/svg/icons/categories/road_construction.svg": "00bfc4b9fa2c4aa40d5b906c7c910a52",
"assets/assets/svg/icons/categories/trucks_and_buses.svg": "d801f6eea929ad9984cd09047cdec2f9",
"assets/assets/svg/logo.svg": "ba1bf571cbe3f00ec15f39242cf104bd",
"assets/assets/svg/logo_type.svg": "aa260c011401a1330e0c44153f15c87c",
"assets/assets/images/saved/4.jpg": "a85ce242e69cb88c56a7e4f9b0b01654",
"assets/assets/images/saved/2.jpg": "99fbc8b0f554fca0baba17f90c4d4d72",
"assets/assets/images/saved/3.jpg": "9e01cbd20c695a13de37fda058a9f67c",
"assets/assets/images/saved/1.jpg": "56e4588d88f8b3d0192dacbb2de7628d",
"assets/assets/images/saved/0.jpg": "e53a3c0b3cad6700eec611273865805d",
"assets/assets/images/similar/2.jpg": "a8147fc8a2e9bedc93d61addaec9797d",
"assets/assets/images/similar/3.jpg": "463ba79c43e72dd54ba4fa2962560693",
"assets/assets/images/similar/1.jpg": "94ca293a09df5667bc5e1619457e0421",
"assets/assets/images/similar/0.jpg": "142f051d7b2753ce1316294ce2ff14b0",
"assets/assets/images/review/2.jpg": "c0eba98a2aa34b756c66b131d6ac21c6",
"assets/assets/images/review/1.jpg": "a09d4d036312c79a5103241f57d9d9bd",
"assets/assets/images/review/0.jpg": "b0c44e3325cc92f574125faea32f9565",
"assets/assets/images/auctions/8.jpg": "70f91936f4dae5bbaa45ae6a00b1530d",
"assets/assets/images/auctions/9.jpg": "51be3de338f6a007bfd4facde39ca805",
"assets/assets/images/auctions/11.jpg": "463ba79c43e72dd54ba4fa2962560693",
"assets/assets/images/auctions/10.jpg": "928e815cb31d9c3a9d8c22bdf4675cd3",
"assets/assets/images/auctions/4.jpg": "30340b2ecb918b9063598e1ba5c1e8b4",
"assets/assets/images/auctions/5.jpg": "8897a24a6401b2c4c65887e14bfb1217",
"assets/assets/images/auctions/7.jpg": "f3ad234333014c041cab0cac387bbf1e",
"assets/assets/images/auctions/6.jpg": "a8147fc8a2e9bedc93d61addaec9797d",
"assets/assets/images/auctions/2.jpg": "142f051d7b2753ce1316294ce2ff14b0",
"assets/assets/images/auctions/3.jpg": "b764ed8550fac2810818d835f16dd961",
"assets/assets/images/auctions/1.jpg": "94ca293a09df5667bc5e1619457e0421",
"assets/assets/images/auctions/0.jpg": "72c7aba90c46fd038d276de98275262a",
"assets/assets/images/sample_slide.png": "a5b9d41b8c583c517f48aea40cf2f217",
"assets/assets/images/sample_image.png": "780dd59be656384cc243468f200c2832",
"assets/assets/http_translations/lang.json": "e8ebd06265a87fc58d6444043e5885d4",
"assets/assets/fonts/IRANSans/IRANSansMobile_fa_num_Light.ttf": "b32c65557db8be5c071cefbf7af03e8f",
"assets/assets/fonts/IRANSans/IRANSans_Bold.ttf": "55df8d3e6b411e5e6fd7a7be3b7ec694",
"assets/assets/fonts/IRANSans/IRANSansMobile_fa_num_Medium.ttf": "526a6bd26539434715bc5587a513d716",
"assets/assets/fonts/IRANSans/IRANSans.ttf": "b337fc92bb6f2ede6ba18c4265e6be77",
"assets/assets/fonts/IRANSans/IRANSansMobile_fa_num.ttf": "80470e5cc0dea2d75af2700d8c35ba6a",
"assets/assets/fonts/IRANSans/IRANSans_Light.ttf": "5f9ee24d5dcaa374e9e0774f69234344",
"assets/assets/fonts/IRANSans/IRANSansMobile_fa_num_Bold.ttf": "c0196c974a06ffefa19e651baddebf3f",
"assets/assets/fonts/IRANSans/IRANSans_Black.ttf": "682a4a0e8f5268c6f0305e08ce59a51e",
"assets/assets/fonts/IRANSans/IRANSansMobile_fa_num_UltraLight.ttf": "28387adefd8bee9ccc1ad4f60b25e8fb",
"assets/assets/fonts/IRANSans/IRANSans_Medium.ttf": "82f29074c5942a0f0673aa2397cb3c8e",
"assets/assets/fonts/IRANSans/IRANSansMobile_fa_num_Black.ttf": "7eee3556cad54caaa9c240709f775e69",
"assets/assets/fonts/IRANSans/IRANSans_UltraLight.ttf": "206c6a36ff3dcbbba5106a98ab390dfe",
"assets/assets/translations/en.json": "ea68b58402820b5adf3d0d12523a27ce",
"assets/assets/translations/fa.json": "fc30069a86fa7391b01abb679a499c86",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
