$(document).ready(()=>{
// Para registrar aspirantes

var name_asp=$('#nombre');
var apt_asp=$('#apt');
var apm_asp=$('#apm');
var email_asp=$('#email');
var user_asp=$('#usuario');
var fecha=$('#datepicker');

$( function() {
    fecha.datepicker();
  } );

var pass1_asp=$('#password');
var pass2_asp=$('#confpass');
var submit_asp=$('#submit');
var str;
$( "#sel" ).change(()=> {
   str="";
    $( "select option:selected" ).each(function() {
      str = $( this ).text();
      if(str=='Seleccionar sexo.')
      {

      }
      else{
      console.log(str);
    }});
}).change();


submit_asp.on('click',()=>{
    var fn=fecha.val();
    var nom=name_asp.val();
    var apt=apt_asp.val();
    var apm=apm_asp.val();
    var user=user_asp.val();
    var mail=email_asp.val();
    var pass1=pass1_asp.val();
    var pass2=pass2_asp.val();
    var sexo=str;
    var data={nombre:nom,apt:apt,apm:apm,usuario:user,password:pass1,email:mail,fn:fn,sexo:sexo};
    if(pass1==pass2)
    {
        console.log(data);

        $.ajax({
            url:'http://localhost:3000/regasp/registro',
            method:'post',
            dataType:'json',
            data:{nombre:nom,apt:apt,apm:apm,usuario:user,password:pass1,email:mail,fn:fn,sexo:sexo}
        });
    }
    else
    {
        alert("Las contraseñas no coinciden.")
        pass1_asp.val("")
        pass2_asp.val("");
        pass1_asp.focus();
    }

    

});





});