self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            //👇🏽 addAll takes an array of URLs, retrieves them, and adds the resulting response objects to the given cache
            return cache.addAll(["./","./app.js"])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})