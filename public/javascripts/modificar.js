$(document).ready(function(){

    var close=$('#cerrar');
    var close2=$('#cerrar2');
    var close3=$('#cerrar3');
    var foto=$('#file');
    var link=$('#link');
    var sub=$('#submit');
    var form=$('#modal1');
    var form2=$('#modal2');
    var form3=$('#modal3');
    var git=$('#git');
    var u=$('#usuario');
    var v=$('#vid');
    var yt=$('#video')
    var agregar=$('#guardar');
    var agregar2=$('#guardar2');
    var agregar3=$('#guardar3');
    var numero=$('#numero');
    var correo=$('#correo');

    close.on('click',()=>{
            form.slideUp("fast",function(){
            });
    });

    close2.on('click',()=>{
        form2.slideUp("fast",function(){
        });
    });

    close3.on('click',()=>{
        form3.slideUp("fast",function(){
        });
                    });



    foto.on('click',()=>{
        sub.show();
        $('#camara').hide();
    });

    link.on('click',function(){
        
        form.slideDown("slow",function(){
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
        var c=correo.val();

        if(n.length==0 || c.length==0)
        {
            alert("No puedes dejar campos vacíos.")
            
            form.slideUp("fast",function(){
            });
        }else
        {
            $.ajax({
                url:'http://localhost:3000/update',
                method:'post',
                dataType:'json',
                data:{
                    numero:n,
                    correo:c
                },
                success:function(response){console.log(response) }
            });
            form.slideUp("fast",function(){
            });
            
            var url = "http://localhost:3000/perfilasp";
            $(location).attr('href',url);
            
            correo.empty();
            numero.empty();

        }
     
    });


    agregar2.on('click',()=>{
        
        var usu=u.val();
        console.log(usu);
        if(usu.length==0)
        {
            alert("No puedes dejar campos vacíos.");
            
        }else
        {
            
            $.ajax({
                        url:'http://localhost:3000/portafolio',
                        method:'post',
                        dataType:'json',
                        data:{usuario:usu},
                        success:function(response){console.log(response);
                        }
                  });
                  
            var url = "http://localhost:3000/perfilasp";
            $(location).attr('href',url);
            u.empty();
            form2.slideUp("fast",function(){
            });
            

        }
        
        form2.slideUp("fast",function(){
        }); 
     
    });

    agregar3.on('click',()=>{
        
        var vid=v.val();
        console.log(vid);
        if(vid.length==0)
        {
            alert("No puedes dejar campos vacíos.");
            
        }else
        {
            
            $.ajax({
                        url:'http://localhost:3000/video',
                        method:'post',
                        dataType:'json',
                        data:{video:vid},
                        success:function(response){console.log(response);
                        }
                  });
                  
            var url = "http://localhost:3000/perfilasp";
            $(location).attr('href',url);
            v.empty();
            form3.slideUp("fast",function(){
            });
            

        }
        
        form3.slideUp("fast",function(){
        }); 
     
    });


});