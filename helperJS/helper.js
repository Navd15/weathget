'use-strict';

let replacer;

/* Class contains keys and stuff for API calling */
class Creds {

    static Keys() {
        return {
            key: `a2aa7c3e0225461dada105616172206`,  // Replace with your apixu API key | www.apixu.com
            // key : 'A2V9GFbwbk8jX6F2V1jua6KcHKtAy7on',
            // initialURL : `http://dataservice.accuweather.com`,
            initialURL: `http://api.apixu.com/v1`,
            '12HourApi': `/forecast.json`,

        }
    }
}

/* This method triggeres when user selects the location from 
list from html page
*/
function setListClick(id) {
    let key = Creds.Keys().key;
    let initialURL = Creds.Keys().initialURL;
    let url = `/current.json?key=${key}&q=${id}`
    fetch(`${initialURL}/${url}`).then((resolve) => {
        resolve.json().then((resolve) => {

            new FutureCast(id, initialURL, key).castRes().then((hourly) => {

                let whole = {
                    currentCond: resolve,
                    hourCond: hourly
                }

                fill.makeHTML(whole, (res) => {
                    replacer.innerHTML = res;
                })
            })



        })

    }, (reject) => {
        console.log("Rejected");
    })

}



$(document).ready(function () {
    replacer = document.getElementById('replacer');
     let search=$('#searchInput')[0];
     console.log(search)
    let go = $('#searchButton');
     let locList=$('#locList')[0];
     console.log(locList);
     
go.on('click',()=>{
if(search.value!="")
console.log(search.value);
searchLoc(search.value).then((resolve)=>{
 gen.genList(resolve,locList).then((resolve)=>{
/* Hide loading animation  */
if(resolve==true)
$(locList).css('display', 'block')
 })

})
})


    /* --------------------------------------------------------------- */

    function searchLoc(loc) {
        let key = Creds.Keys().key;
        let initialURL = Creds.Keys().initialURL;
        return new Promise((resolve, err) => {
            let url = `${initialURL}/search.json?key=${key}&q=${loc}`;
            fetch(url).then(
                (response) => {
                    if (response.status == 200){
                        response.json().then((locations) => {
                            resolve(locations)
                        })
                    }
                },(reject)=>{
                    err({'error':'Error at server side'})
                    console.log('Some error occured in fetching data from server !'+reject);
                    
                }

            )

        })


    }
}

)

/* Class contains methods for data fetching from apixu api */

class FutureCast {

    constructor(cityId, initialURL, key) {
        this.cityId = cityId;
        this.initialURL = initialURL;
        this.key = key;
        this.api = Creds.Keys()["12HourApi"];
    }

    /* For next 12 hours forecast */

    castRes() {

        let url = `${this.initialURL}${this.api}?key=${this.key}&q=${this.cityId}`;

        return new Promise((outResolve) => {

            fetch(url).then((resolve) => {
                if (resolve.status == 200) {
                    resolve.json().then((res) => {
                        outResolve(res);

                    })

                }
            })

        })

    }
    weekCast(callback) {

        /* For weeklyForCast */
    }
}