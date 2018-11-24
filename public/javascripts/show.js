$(document).ready(()=>{

    console.log("Jquery");
    var form=$('#modal1');
    var close=$('#cerrar');


    form.slideDown("slow",function(){
    });

    close.on('click',()=>{
        form.slideUp("fast",function(){
        });
});
});