const staticCacheName = 'bureauDchange'
self.addEventListener('install', function (event) {
    event.waitUntil (
        caches.open(staticCacheName)
        .then(cache => {
            return cache.add('/client/Homepage/calculator.html')
            console.log('yea')
        })
    )
})