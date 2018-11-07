$(document).ready(function(){


    $(".card-side").on('click',()=>{
        $('.card-side--front').css('trasnform','rotateY(-180deg)');
        $('.card-side--back').css('transform','rotateY(0)');
    }) ;

    $('.btn').on('click',()=>{
        console.log("Click")
        $('.card-side--front').css('trasnform','rotateY(0)');
         $('.card-side--back').css('transform','rotateY(180deg)');

    });
        

});