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


        // modal.slideDown("slow", function () {
        });
    });

    //Petición AJAX 
    $.ajax({
        url:'http://18.233.147.158:8080/fotoemp/foto',
        method:'post',
        dataType:'json',
        success:function(response){
          var ruta=(response[0].ruta_imge);
          foto.attr("src",ruta);

        },
    });
    
    $.ajax({

        url: 'http://18.233.147.158:8080/updateE/show',
        method: 'get',
        dataType: 'json',
        success: function (response) {
            
        $('#em').val(response[0].email_emp);
        correo.attr("value",response[0].email_emp)
        sitio.attr("value",response[0].sitio_pemp)
        $('#site').val(response[0].sitio_pemp);

        if(response[0].des_emp==null)
        {
            edit.hide();
        }
        else 
        {
            $('#des').val(response[0].des_emp);
            $('#des').attr('readonly', true);;
            $('#save').hide();
        }
        $('#num').val()
        }

    });
    
    //Para descripción
    
    var savebtn=$('#save');
    var txtarea=$('#des');

    savebtn.click(()=>{
        console.log(txtarea.val());
        $.ajax({

            url: 'http://18.233.147.158:8080/updateE/add',
            method: 'put',
            dataType: 'json',
            data: {desc:txtarea.val()},
            success: function (response) { console.log(response) }

        });
        var url = "http://18.233.147.158:8080/emp-profile";
            $(location).attr('href', url);
        alert('Datos actualizados');

    });

    //Editar descripción
    var edit=$('#edit')

    edit.click(()=>{
        
        $('#des').attr('readonly', false);
        $('#save').show();
        edit.hide();

    });


    



//Para demás datos
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

            url: 'http://18.233.147.158:8080/updateE',
            method: 'put',
            dataType: 'json',
            data: data,
            success: function (response) { console.log(response) }

        });
        var url = "http://18.233.147.158:8080/emp-profile";
            $(location).attr('href', url);
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
        formdata.append('file', file[0].files[0]);
        xhr.open('POST', 'http://18.233.147.158:8080/fotoemp/', true);
        xhr.onreadystatechange = response => console.log(response);
        xhr.send(formdata);
        
        var url = "http://18.233.147.158:8080/emp-profile";
            $(location).attr('href', url);
    
        });

        



        
    });