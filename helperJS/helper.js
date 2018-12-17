'use-strict';
let replacer;
let locList;
let locations = []; /* Array to sync locations from local Storage */
let now; /*Selected location index  from above array.Update it with each click on location list*/

/* Class contains keys and stuff for API calling */

class Creds {

    static Keys() {
        return {
            key: `a2aa7c3e0225461dada105616172206`, // Replace with your apixu API key | www.apixu.com
            initialURL: `http://api.apixu.com/v1`,
            forecast: `/forecast.json`,

        }
    }
}

/* This method triggeres when user selects the location from 
list from html page
*/

function setListClick(id, network = true, data = null) {
    if (id != now) {
        if (network == true || data == null) {

            let key = Creds.Keys().key;
            let initialURL = Creds.Keys().initialURL;
            let url = `/forecast.json?key=${key}&q=${id}&days=10`

            fetch(`${initialURL}/${url}`).then((resolve) => {
                resolve.json().then((resolve) => {

                    new FutureCast(id, initialURL, key).castRes().then((hourly) => {

                        /* Make an object of current weather and forecast weather */
                        let whole = {
                            currentCond: resolve,
                            hourCond: hourly
                        }

                        whole['id'] = id;
                        now = id;
                        localStorage.setItem(resolve.location.name, JSON.stringify(whole));
                        fill.makeHTML(whole, (res) => {
                            $(locList).appendHTML = "";
                            $(locList).css('display', 'none');
                            replacer.innerHTML = "";
                            replacer.innerHTML = res;
                        })
                    })



                })

            }, (reject) => {
                console.log("Rejected");
            })

        } else {
            fill.makeHTML(data, (res) => {
                $(locList).appendHTML = "";
                $(locList).css('display', 'none');
                replacer.innerHTML = "";
                replacer.innerHTML = res;
            })

        }

    }
}
$(document).ready(function () {
        Utils.checkIDB((response) => {

            if (response.length > 0) {
                locations = response;

                function next(arg) {
                    if(arg==='Prev'){
                        if(now>0){
                            const locData=JSON.parse(localStorage.getItem(locations[now-1]));
                            if(navigator.onLine){
                                setListClick(locData.id);
                            }
                            else{
                                setListClick(locData.id,false,locData);
                            }
                        }
                    }
                    if(arg=='Next'){
if(now<locations.length){
    const locData=JSON.parse(localStorage.getItem(locations[now-1]));
    if(navigator.onLine){
        setListClick(locData.id);
    }
    else{
        setListClick(locData.id,false,locData);
    }

}
                    }
                }

                let permList = document.getElementById('permLocList');
                let data = JSON.parse(localStorage.getItem(response[0]));
                now = 0;
                for (let i of response) {
                    let tempLI = document.createElement('li');
                    let tempHR = document.createElement('hr');
                    tempLI.innerText = i;
                    tempLI.id = i
                    tempLI.classList.add('fromLocalSto');
                    tempLI.addEventListener('click', (event) => {
                        if (navigator.onLine) {
                            setListClick(event.srcElement.id)
                        } else {
                            let data = JSON.parse(localStorage.getItem(event.srcElement.id));
                            console.log(data);
                            setListClick(event.srcElement.id, false, data)
                        }

                    })

                    permList.appendChild(tempLI);
                    permList.appendChild(tempHR);
                }
                /*Fetch weather for default location  */
                if (navigator.onLine) {
                    setListClick(data.id)
                } else {
                    setListClick(data.id, false, data)
                }
            } else {
                document.getElementsByClassName('noLocMsg')[0].style.display = 'block';
            }
        })

        replacer = document.getElementById('replacer');
        let search = $('#searchInput')[0];
        locList = $('#locList')[0];
        let go = $('#searchButton');

        go.on('click', () => {
            if (search.value != "")
                console.log(search.value);
            searchLoc(search.value).then((resolve) => {
                gen.genList(resolve, locList).then((resolve) => {
                    /* Hide loading animation  */
                    if (resolve == true)
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
                        if (response.status == 200) {
                            response.json().then((locations) => {
                                resolve(locations)
                            })
                        }
                    }, (reject) => {
                        err({
                            'error': 'Error at server side'
                        })
                        console.log('Some error occured in fetching data from server !' + reject);

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
        this.api = Creds.Keys()['forecast'];
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