$(document).ready(
    function () {
        let list=$('#list');
        let out=false;
        let searchDiv=$('#search');
        let add=$('#add');
        let slider = $('#slider');
        let set = $('#sett');

        set.on('hover', () => {
            $(this).css({
                'opacity': 1
            });

        })
        set.click(function () {

            $('.noLocMsg').css({
                "filter": "blur(3px)"
            })
            slider.animate({
                left: "0px"
            }, 100);


        })

add.on('click',()=>{
console.log(out);
if(out){
list.animate({'margin-top':'-40px'},100)
searchDiv.animate({
left:'-150px'

},100)
out=false;
return;
}
else
out=true;
list.animate({'margin-top':'0px'},100)
searchDiv.animate({
    left:'0px'
},100);

})

        $('#replacer').on('click', () => {
            $('.noLocMsg').css({
                "filter": ''
            });

            list.animate({'margin-top':'-40px'},100)
            searchDiv.animate({
                left:'-150px'
                
                },100);
            slider.animate({
                left: '-180px'

            }, 100)
        })




    }())