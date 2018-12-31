self.addEventListener("install", (event) => {
    const offlinePage = new Request("/");
    event.waitUntill(
        fetch(offlinePage).then(response => {
            return caches.open("lim-store").then(cache => {
                return cache.put(offlinePage, response);
            });
        })
    );
});


self.addEventListener("fetch", (event) => {
    event.respondWith(
        //fetch(event.requset).catch(() => console.log("Offline"))
        fetch(event.request).catch(error => {
            return caches.open("lim-store").then(cache => cache.match("/"));
        })
    );
});