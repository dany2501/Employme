$(document).ready(()=>{

    //Botones y el modal

    var btn1=$('#complete');
    var modal=$('#modal1');
    var save=$('#guardar');
    var close=$('#cerrar')

    //Campos de texto y valores

    var correo=$('#correo');
    var sitio=$('#sitio');
    var contra=$('#contra');
    var contrac=$('#contrac');

    btn1.click(()=>{
        console.log("Funciona bien");
        modal.slideDown("slow", function () {
        });
    });

    //Petición AJAX 
    $.ajax({
        url:'http://localhost:8080/fotoemp/foto',
        method:'post',
        dataType:'json',
        success:function(response){
            console.log(response);
          var ruta=(response[0].ruta_imge);
          console.log(ruta);
          foto.attr("src",ruta);

        },
    });

    




    save.click(()=>{
        var data={mail:correo.val(),sitio:sitio.val(),contra:contra.val(),contrac:contrac.val()}
        console.log(data);
        if(correo.val()=="" && sitio.val()=="" && contra.val()=="" && contrac.val()=="")
        {
            modal.slideUp("fast",()=>{});
            console.log("Campos vacíos");
        }
        else {
        $.ajax({

            url: 'http://localhost:8080/updateE',
            method: 'post',
            dataType: 'json',
            data: data,
            success: function (response) { console.log(response) }

        });
        alert('Datos actualizados');
        correo.val("");
        sitio.val("");
        contra.val("");
        contrac.val("");
        modal.slideUp("fast",()=>{});
    }
    });

    close.click(()=>{
        modal.slideUp("fast",()=>{});
    });


    //Para fotos.

    var file=$('#file')
    var foto=$('.information-photo');

    file.on('change', () => {
        var formdata = new FormData();
        var xhr = new XMLHttpRequest();
        console.log(file[0].files[0])
        formdata.append('file', file[0].files[0]);
        xhr.open('POST', 'http://localhost:8080/fotoemp/', true);
        xhr.onreadystatechange = response => console.log(response);
        xhr.send(formdata);
        
        var url = "http://localhost:8080/emp-profile";
            $(location).attr('href', url);
    
        });

        



        
    });