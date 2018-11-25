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

    save.click(()=>{
        var data={correo:correo.val(),sitio:sitio.val(),contra:contra.val(),contrac:contrac.val()}
        console.log(data);
        if(correo.val()=="" && sitio.val()=="" &&contra.val()=="" && contrac.val()=="")
        {
            modal.slideUp("fast",()=>{});
        }
        else {
        $.ajax({});
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

    



});