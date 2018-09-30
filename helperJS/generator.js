class gen {

    static genList(locs, ul) {

        return new Promise((resolve,reject)=>{

            ul.innerHTML = "";
            for (let location of locs) {
                let li = document.createElement('li');
                li.classList.add('list-group-item');
                li.classList.add('list-group-item-action');
                li.id = `${location.name}`;
                li.setAttribute("onclick", `setListClick(this.id)`);
                li.innerText = `${location.name}`;
                ul.appendChild(li);
                ul.appendChild(document.createElement('hr'));
            }
            resolve(true);
        })
       


    }



}