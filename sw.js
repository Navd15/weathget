const cacheName = 'weathCache-v2';

self.addEventListener('activate',event=>{
console.log(event);
})

self.addEventListener('install',event=>{

})

self.addEventListener('fetch',event=>{
console.log(event.request.url);
return fetch(event.request).then(response=>{
    return response;
})


})
