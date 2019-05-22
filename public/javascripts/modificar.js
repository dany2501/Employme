$(document).ready(function () {

    var email = $('#correo')
    var close = $('#cerrar');
    var close2 = $('#cerrar2');
    var close3 = $('#cerrar3');
    var foto = $('#file');
    var link = $('#link');
    var sub = $('#submit');
    var form = $('#modal1');
    var form2 = $('#modal2');
    var form3 = $('#modal3');
    var git = $('#git');
    var u = $('#usuario');
    var v = $('#vid');
    var yt = $('#video')
    var agregar = $('#guardar');
    var agregar2 = $('#guardar2');
    var agregar3 = $('#guardar3');
    var numero = $('#numero');
    var correo = $('#correo');


    link.on('click', function () {

        form.slideDown("slow", function () {
        });

    });

    close.on('click', () => {
        form.slideUp("fast", function () {
        });
        correo.empty();
        numero.empty();
    });

    close2.on('click', () => {
        console.log("Click boton");
        form2.hide();
        u.empty();
    });

    close3.on('click', () => {
        form3.slideUp("fast", function () {
        });
        v.empty();
    });



    foto.on('change', ()=>{
        $("#picture").submit();
    });


    git.on('click', () => {

        form2.slideDown("slow", function () {
        });
    });

    yt.on('click', () => {
        form3.slideDown("slow", function () {
        });
    });

    agregar.on('click', () => {

        var n = numero.val();
        var c = correo.val();
            $.ajax({
                url: 'http://3.93.218.234/update',
                method: 'post',
                dataType: 'json',
                data: {
                    numero: n,
                    correo: c
                },
                success: function (response) { console.log(response) }
            });


            form.slideUp("fast", function () {
            });

            var url = "http://3.93.218.234/perfilasp";
            $(location).attr('href', url);

            correo.empty();
            numero.empty();

        

    });


    agregar2.on('click', () => {
        var usu = u.val();
        console.log(usu);
        if (usu.length == 0) {
            alert("No puedes dejar campos vacíos.");

        } else {

            $.ajax({
                url: 'http://3.93.218.234/portafolio',
                method: 'post',
                dataType: 'json',
                data: { usuario: usu },
                success: function (response) {
                    console.log(response);
                }
            });

            var url = "http://3.93.218.234/perfilasp";
            $(location).attr('href', url);
            u.empty();
            form2.slideUp("fast", function () {
            });


        }

        form2.slideUp("fast", function () {
        });

    });

    agregar3.on('click', () => {

        var vid = v.val();
        if (vid.length == 0) {

        } else {

            $.ajax({
                url: 'http://3.93.218.234/video',
                method: 'post',
                dataType: 'json',
                data: { video: vid },
                success: function (response) {
                    console.log(response);
                }
            });

            var url = "http://3.93.218.234/perfilasp";
            $(location).attr('href', url);
            v.empty();
            form3.slideUp("fast", function () {
            });


        }

        form3.slideUp("fast", function () {
        });

    });

    //para agregar YT
    var editYt=$('#editYT');

    $.ajax({
        url:'http://3.93.218.234/perfilasp',
        type:'put',
        dataType:'json',
        success : function(json) {
        var url = json;
        if(url==null)
        {
  
        }
        else
        {
            v.attr("placeholder",json);
        }
    }
    });
    editYt.click(()=>{
        form3.slideDown("Fast",()=>{});
    });


    $.get("http://3.93.218.234/perfilasp/user", function(data)
    {if(data=='Ocurrió un error')
    {

    }else
    {
        u.attr("placeholder",data)
    }
});

var editGH=$('#editGit')

editGH.click(()=>{
    form2.slideDown("fast",()=>{});

});

//Subir pdf


});