$(document).ready(()=>{

    var form=$('#modal1');
    var close=$('#cerrar');


    form.slideDown("slow",function(){
    });

    close.on('click',()=>{
        form.slideUp("fast",function(){
        });
});
});