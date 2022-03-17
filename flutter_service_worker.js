'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "114b689f55fef417343ff17d77d5a8b1",
".git/config": "e148b38410f044ec0eef4a747c2b946d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15afbe9e8a49b232bb502184b461fe23",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb6dd4dce2119a8a8cc62e7ad7eacb72",
".git/logs/refs/heads/main": "e72a89eb2a32824328425690e4952333",
".git/logs/refs/remotes/origin/main": "67182e2b23af772e746c0dc82bfdc81b",
".git/objects/00/e37d377db8fe5ea27ee65fa3fe84c5cc61e579": "ed5b2eb26472bcfa6023427c36d8fe29",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e6a24fbf70663f1cd64edf2288586294b30348": "0fd6bd9268cd5b47575493ef65167f3c",
".git/objects/09/1444ca74d8fb484f842dce83b2e20adb093b51": "da3965e45f1689ed46bdbf706704d481",
".git/objects/0f/95f8b8583237b546f03a1da10be368a2b73431": "d903bb92b32cac09147ba2fe245011d8",
".git/objects/22/8306d906c7451cbae0b24eb64030ec0ce3b98c": "a5b8db27f9e0f7fac681fb6f07b9e1d1",
".git/objects/24/bbedaea0bb26a9fc0bf7750d49e68e1a5fcb8a": "e79a7032c69ecb2d5da42201803c737d",
".git/objects/2b/af3295a097eac73285e32a62bcb846a0ec7eaa": "bd67ef8db81508cbf5529912e6897aa2",
".git/objects/31/27933e27d43736eaafe801208922aed026b8b4": "4232e40b1a597ceeede16cf31ff73176",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3a/8265beba0e5cba8f5704818565d45ea7b3a2db": "346859c3db22f8cd18d61e5a5f76faeb",
".git/objects/3a/f4e1b86d7f9b737a22f6598fe51a5f83dd9f77": "9a08a2899cb2dde9d1c6003fbcdfc4e1",
".git/objects/3d/ff4aa3cdbe05818901cca5b7f4eca1151a37a8": "a02d92ff9a556a25176231e903ebdfb0",
".git/objects/40/1a6df30fc8a0afbb1869360cfa6190bca59d46": "f37923e3c8686655fb5718f005d8e5be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/417731350de5b6d5bf400838baf95d550cf5e7": "649dc835a16ba0152b62965e42bbab0f",
".git/objects/51/ce30721fc8649e340fdf591ac931b0e90c4f3a": "7b7b4503b277ab1a926937ab46c025c5",
".git/objects/52/54856665d7f23d8f5e748f66f69ff70291fa87": "018688b2cbace788f38cd10aa1df8034",
".git/objects/57/1e44f5e383f48ecaee685d053af0dc32a36a3f": "ce88c9d2fd7e8301a2403096a9b37446",
".git/objects/59/8a4b9196905da7b259d612a1ca9198903d7452": "76378416066b2e04105dec9856bf06ca",
".git/objects/5a/5a2041db10efc1c95fa0817d7c565f4fa6b63f": "0430a00d6d01783334394b20f404ac73",
".git/objects/60/1379edf0f7c5a2c33f5a3711a274197c4794c3": "c0b1e821c4640f908c52e687720a388e",
".git/objects/60/487df405d8dab9aa67886c3930a5987f2b2f3d": "c4743dd97df246e596f4d21861b88b90",
".git/objects/6d/70ee5329eb0c35d3c9469bce500ef9726e9abc": "06084affe190188fb8a8f57ea9e9802a",
".git/objects/72/d138004cc471d19a3af03616daf1a9806f136f": "59453d2150af09484873ed3495f3cd4e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/d2a7cf93f98716d61741d866ad3f5ca117a5a4": "f3e5c1990199f2a1b290bd9e00bebfec",
".git/objects/82/1b90ea30038b6910a2c6f6a3d356dfb9483bc1": "3a0972f1268db7f0678f92cbb781c610",
".git/objects/83/ae7eac8cf1dc6a0d0598311d914ee1c1b11a01": "8217dafa37fb02d277aff396b70fc9b0",
".git/objects/85/0f6711b305e322ef689cf98bc30ddf12c18000": "a780f81fa100c00aed76f49e4aeb5371",
".git/objects/88/4c8b002544890e089bd06fd8aef7959af73ac2": "05b6fbab555b83cafdc14c0f78c8cc43",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/91/6d08d1a0487c8a60f880dd752fab3672db1742": "ab368d17b993d3fdf95020345022e80c",
".git/objects/97/ddb518080eb41a7c47d602527f49c67af6a48a": "ff851b09232359091387b1317b956fd5",
".git/objects/99/21b04b7f37dd97d36c9e3114f1f024b3ac0806": "f9000a6812378e7b025f889df59b11a0",
".git/objects/99/a4297ac308cd2ef65acf64c152fbef8591ab96": "001be4f122da83dc24d45efa3d07fd19",
".git/objects/9b/7f073b27de3cd6185fe118a7a30bafc2eea438": "8bdf6e4605bea3404b340ca4a1c24db9",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/9a6ea70f3bc3da8668381a8cf7b313b9627fbe": "da38f54cd4189ac0ba0cb13e0a74d0e0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/6c049a4d80589d94bd75e9f34845d4b44b1d75": "7a4fb8a47174b184ad0757ae75b0c1f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ce8db422a625e98ca75fa6517ca033b1157373": "68653d78bd9c084f96a2b30cefab4413",
".git/objects/bc/0cc78bf5d75f3a12fc5acd385360be58dd8032": "4db1b1a84572e41025748819712a37e8",
".git/objects/c1/2dcb4ad7618d61d48af635c70a799c9ad99009": "82e9be69adc7c94cf79e7a05f943118e",
".git/objects/c2/01e4eb5f4e96993e44226ae224c79637cf703c": "e9b782c5fe8aa2d6c524c7ac47c83ab5",
".git/objects/c3/f23ecadf6b9379ac5ead06068b8e26f1853888": "735b515646b0afa5cff4df77d044749a",
".git/objects/d2/1325e0ccefcdb7fc8f5754b9b2bbf852ad439b": "af338d837e67697dc810e99b6abe6b3d",
".git/objects/d5/458a821eb1be22fe8a0decc72b28de0e0b8a4a": "02cacf87d8760696cd99abf1662e4b8a",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/794412958240b9b2dc7dc34dfdad4cea8031b2": "5d477fd87453f9a071b0c8631242f99e",
".git/objects/e9/4aae2150177ef8c51faf251a0aa64f6779ffad": "63682f0147ccac378b8f6eda60c71783",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/317c6d1f0d065dd920a16ae3a6f4ba269e728f": "e212294674b983b92e82242d17182605",
".git/objects/f5/e95792b59c395ee831ca130784f180b8d9258c": "6cdc3df67b1710b4234c643a9103ada4",
".git/refs/heads/main": "0184b38626177b512c4bdfd0b7a69610",
".git/refs/remotes/origin/main": "0184b38626177b512c4bdfd0b7a69610",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b3415a190d20cb8c8f1b56e1c908e668",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "449194f4fdf0f49e9f4fb27cbc38255a",
"/": "449194f4fdf0f49e9f4fb27cbc38255a",
"main.dart.js": "ede4faafba19ec6c1b20579c1d833596",
"manifest.json": "c2e4cb32a899dd3949820bf55d850e35",
"version.json": "006b9253ef7fbc513ad1a463c55db1c3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
