class gen{

static genList(locs,ul){
    ul.innerHTML="";
    for(let location of locs){
let li=document.createElement('li');
li.classList.add('list-group-item');
li.innerText=`${location.LocalizedName},${location.AdministrativeArea.ID},${location.Country.LocalizedName}`;
ul.appendChild(li);
}




}



}