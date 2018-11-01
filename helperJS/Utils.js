class Utils {

    static checkIDB=()=> {
       return new Promise((res, rej) => {
         const db=   indexedDB.open('weathCache-v2',1);
         db.onupgradeneeded=(event)=>{
             if(event.oldVersion==0){
                event.target.result.createObjectStore('locations', { keyPath: 'name' });
            rej();
             }
             
         }
                db.onsuccess = (event) => {
                    if(event.old)
                    event.target.result
                    .transaction('locations', 'readwrite')
                    .objectStore('locations').getAll().onsuccess = (event) => { res(event.target.result) }
                }
        })



    }



}