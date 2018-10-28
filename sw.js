const cacheName = 'weathCache-v2';

self.addEventListener('activate',event=>{
console.log(event);
})

self.addEventListener('install',event=>{

})

self.addEventListener('fetch',event=>{

return fetch(event.request).then(response=>{
    return response;
})


})


let saveToDb=()=>{
return new Promise((response,reject)=>{
const idb=indexedDB.open(cacheName,1);


idb.onupgradeneeded=(event)=>{
    let objectStore;
const db=event.target.result;
switch(event.oldVersion){
case 0:
db.createObjectStore('locations',{autoIncrement:true})
WritableStreamDefaultWriter
}
}
})
}