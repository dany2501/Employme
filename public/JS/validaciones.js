$(document).ready(()=>{
var sa=$("#btnasp");
var se=$("#btnemp");

//Aspirantes
var name_asp=$('#nombre');
var apt_asp=$('#apt');
var apm_asp=$('#apm');
var email_asp=$('#email');
var user_asp=$('#usuario');
var pass1_asp=$('#password');
var pass2_asp=$('#confpass');
var fn=$("#fn");




});

  function soloNum(e){
    var teclado= (document.all) ? e.keyCode : e.which;
    var patron = /^[0-9]/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);
    }
    function soloContra(e){
  var teclado= (document.all) ? e.keyCode : e.which;
    var patron = /^[a-z]|[A-Z]|[0-9]|[.]|[+]|[-]/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);
    }
    function soloCorreo(e){   
    var teclado= (document.all) ? e.keyCode : e.which;
    var patron = /[0-9]|[a-z]|[A-Z]|[.]|[_]|[-]|[@]/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);
    }
    function soloGit(e){   
    var teclado= (document.all) ? e.keyCode : e.which;
    var patron = /[0-9]|[a-z]|[A-Z]|[-]/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);
    }
    function soloDesc(e)
    {
    var teclado= (document.all) ? e.keyCode : e.which;
    var patron = /^[a-z]|[A-Z]|[áéíóúÁÉÍÓÚñÑ]|[\s]|[.]|[-]|[_]|[0-9]/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);
    }
    function soloLetras(e)
    {
    var teclado= (document.all) ? e.keyCode : e.which;
    var patron = /^[a-z]|[A-Z]|[áéíóúÁÉÍÓÚñÑ]|[\s]/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);
    }


