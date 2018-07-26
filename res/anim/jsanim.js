$( document ).ready(
    function(){
        let slider=$('#slider');
        let set=$('#settings');

        set.on('hover',()=>{
$(this).css({'opacity':1});

        })
       set.click(function(){

        $('.noLocMsg').css({"filter":"blur(3px)"})
slider.animate({
left:"0px"


},100);
   
   
   }
   )

   $('.noLocMsg').on('click',()=>{
    $('.noLocMsg').css({"filter":''});
    slider.animate({
left:'-140px'

    },100)
})




})
