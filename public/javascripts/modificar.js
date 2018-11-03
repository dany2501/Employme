$(document).ready(function(){

    var link=$('#link');
    var form=$('#modal1');
    var form2=$('#modal2');
    var form3=$('#modal3');
    var git=$('#github');
    var yt=$('#video')
    var agregar=$('#guardar');
    var numero=$('#numero');
    var correo=$('#correo');

    link.on('click',function(){
        form1.slideDown("slow",function(){
        });
    });
    
    git.on('click',()=>{

        form2.slideDown("slow",function(){
        });
    });

    yt.on('click',()=>{
        
        form3.slideDown("slow",function(){
        });
    });


    agregar.on('click',()=>{
     var n=numero.val();
     console.log(n);
     var c=correo.val();
     console.log(c);
     correo.val('');
     numero.val('');
     
    form.slideUp("fast",function(){
    });

    $.ajax({
        url:'http://localhost:3000/update',
        method:'post',
        dataType:'json',
        data:{
            numero:n,
            correo:c
        },
        success:function(response){console.log(response) }
    })
    
    var url = "http://localhost:3000/loginasp";
    $(location).attr('href',url);

    });


});