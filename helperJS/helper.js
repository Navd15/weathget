/*
 *
 * Created by navcer on 01-08-2018.
 *
 */

 /* Class contains keys and stuff for API calling */
 let replacer;
class creds{
    static Keys(){
return {
    key:`a2aa7c3e0225461dada105616172206`,
    // key : 'A2V9GFbwbk8jX6F2V1jua6KcHKtAy7on',
// initialURL : `http://dataservice.accuweather.com`,
initialURL:`http://api.apixu.com/v1`,
'12HourApi' : `/forecast.json`,

}
    }
}

/* ---This method triggeres when user selects the location from 
list from html page---
*/
function setListClick(id) { 
    let key=creds.Keys().key;
    let initialURL=creds.Keys().initialURL;
    let url = `/current.json?key=${key}&q=${id}`
    fetch(`${initialURL}/${url}`).then((resolve) => {
        resolve.json().then((resolve) => {

 new FutureCast(id,initialURL,key).castRes().then((hourly)=>{

                let whole={ currentCond:resolve,
        hourCond:hourly
                }

fill.makeHTML(whole,(res)=>{
replacer.innerHTML=res;
})
            })
           

            
        })

    }, (reject) => {
        console.log("Rejected");
    })

}



$(document).ready(function () {
 replacer=document.getElementById('replacer');
let addLocBut=$('#but_addLoc');
addLocBut.on('click',()=>{
    console.log(addLoc.material())
    replacer.innerHTML=addLoc.material()
    exploit()

})
    

/* --------------------------------------------------------------- */

        function searchLoc(loc){
            let key=creds.Keys().key;
            let initialURL=creds.Keys().initialURL;
            return new Promise((resolve, rej) => {
                let url = `${initialURL}/search.json?key=${key}&q=${loc}`;
                fetch(url).then(
                    (response) => {
                        if (response.status == 200)
                            response.json().then((locations) => {
                                resolve(locations)

                            })


                    }

                )

            })


        }

function exploit(){
       let loading=$('#loading');
       console.log(loading)
        let searchBar = $('#locSearch')[0];
        console.log(searchBar)
        let searchBtn = $('#searchBtn');
        let locUl = $('#locUl')[0];
        searchBtn.on('click', () => {
            loading.css('display','block')
            if (searchBar.value != undefined) {
                searchLoc(searchBar.value).then((res) => {
                    gen.genList(res, locUl).then((res)=>{
                       if(res==true){
                      loading.css('display','none')
                       }
                    })


                })

            } else
                console.log('fdfd');
        })

    }
    }

)



class FutureCast{
    
    constructor(cityId,initialURL,key){
        this.cityId=cityId;
this.initialURL=initialURL;
this.key=key;
this.api=creds.Keys()["12HourApi"];
    }

    /* For next 12 hours forecast */

     castRes(){

let url=`${this.initialURL}${this.api}?key=${this.key}&q=${this.cityId}`;

        return new Promise((outResolve)=>{

            fetch(url).then((resolve)=>{
                if (resolve.status==200){
                resolve.json().then((res)=>{
outResolve(res);

                })

                }
                
                
                
                })

        })
        
       


    }
weekCast(callback){

/* For weeklyForCast */
}


}