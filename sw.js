const cacheName = 'weathCache-v2';
           
self.addEventListener('activate', event => {
    console.log(event);
})

self.addEventListener('install', event => {

})

self.addEventListener('fetch', event => {

    return fetch(event.request).then(response => {
        if (event.request.url.indexOf('http://api.apixu.com/v1//current.json?key') > -1) {

            response.json().then(res => {

                saveToDb(res);
            })

        }
        return response;
    })


})


let saveToDb = (data) => {
    return new Promise((response, reject) => {
        const idb = indexedDB.open(cacheName, 1);
        const cityName = `${data.location.name}_${data.location.region}_${data.location.country}`;
        idb.onupgradeneeded = (event) => {
            let objectStore;
            const db = event.target.result;
            console.log(event.oldVersion);
 
            if (event.oldVersion==0) {
                    objectStore = db.createObjectStore('locations', { keyPath: 'name' });

            }

            objectStore.transaction.oncomplete = (event) => {
                console.log(event);
                const trx = db.transaction('locations', 'readwrite').objectStore('locations').put({ name: cityName, info: data.current });
            }

        }

        idb.onsuccess = (event) => {

            const db = event.target.result;
            const trx = db.transaction('locations', 'readwrite').objectStore('locations').put({ name: cityName, info: data.current });

        }

    })
}