/*
 *
 * Created by navcer on 01-08-2018.
 *
 */
const key = 'A2V9GFbwbk8jX6F2V1jua6KcHKtAy7on';
const initialURL = `http://dataservice.accuweather.com`

function setListClick(id) {
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