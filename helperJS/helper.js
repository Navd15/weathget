/*
 *
 * Created by navcer on 01-08-2018.
 *
 */

 /* Class contains keys and stuff for API calling */
class creds{
    static Keys=()=>{
return {key : 'A2V9GFbwbk8jX6F2V1jua6KcHKtAy7on',
initialURL : `http://dataservice.accuweather.com`,
'12HourApi' : `/forecasts/v1/hourly/12hour/`,

}
    }
}

/* ---This method triggeres when user selects the location from 
list from html page---
*/
function setListClick(id) { 
    let key=creds.Keys().key;
    let url = `/forecasts/v1/daily/1day/${id}?apikey=${key}&details=false&metric=true`
    fetch(`${initialURL}/${url}`).then((resolve) => {
        resolve.json().then((resolve) => {
            module.exports.info=resolve;
            console.log(resolve)
        })

    }, (reject) => {
        console.log("Rejected");
    })

}



$(document).ready(function () {


    let replacer=document.getElementById('replacer');
    
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
                let url = `${initialURL}/locations/v1/cities/autocomplete?apikey=${key}&q=${loc}`;

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
                    fill.s(res)
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
    static castRes=(key,initialURL)=>{
let url=`${initialURL}`
        return fetch().then((resolve)=>{

})


    }
}