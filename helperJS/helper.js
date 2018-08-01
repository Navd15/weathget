/**
 * Created by navcer on 01-08-2018.
 */

$(document).ready(function () {
    let searchLoc=(loc)=>{


    }

   let searchBar= $('#locSearch');
   let searcBtn=$('#searchBtn');

   searcBtn.on('click',()=>{
       if(searchBar.value!="")
           searchLoc(searchBar.value)
   })
    
    
    
    }
    




)
