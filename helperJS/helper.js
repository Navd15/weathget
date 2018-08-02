/**
 * Created by navcer on 01-08-2018.
 */

const key='A2V9GFbwbk8jX6F2V1jua6KcHKtAy7on';

$(document).ready(function () {
    
    let searchLoc=(loc)=>{
return new Promise((resolve,rej)=>{

            
let url=`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${loc}`;

fetch(url).then(
(response)=>{
if(response.status==200)
response.json().then((locations)=>{
    resolve(locations)

})


}

)

})


     }

   let searchBar= $('#locSearch')[0];
   let searchBtn=$('#searchBtn');
   let locUl=$('#locUl')[0];
   searchBtn.on('click',()=>{
       if(searchBar.value!=undefined){
        searchLoc(searchBar.value).then((res)=>{
            gen.genList(res,locUl);
        })
    
    }
         else
         console.log('fdfd');
   })
    
    
    
    }
    




)
