$(document).ready(()=>{
// Para registrar aspirantes

var name_asp=$('#nombre');
var apt_asp=$('#apt');
var apm_asp=$('#apm');
var email_asp=$('#email');
var user_asp=$('#usuario');
var fecha=$('#datepicker');

$( function() {
    fecha.datepicker({ dateFormat: 'yy/mm/dd' });
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
    var data={nombre:nom,apt:apt,apm:apm,usuario:user,password:pass1,confpass:pass2,email:mail,fn:fn,sexo:sexo};
    if(pass1==pass2)
    {

        $.ajax({
            url:'http://localhost:3000/regasp/registro',
            method:'post',
            dataType:'json',
            data:data,
            success:function(response){alert("Usuario registrado correctamente");
            fecha.val("");
            name_asp.val("");
            apt_asp.val("");
            apm_asp.val("");
            user_asp.val("");
            email_asp.val("");
            pass1_asp.val("");
            pass2_asp.val("");
            $('#form1Asp').hide();
            $('#form2Asp').slideDown("slow",()=>{});
        }
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

//Para registrar empresas

var nomEmp   =$('#nombre_e');
var userEmp  =$('#usuario_e'); 
var pass1_emp=$('#password_e'); 
var pass2_emp=$('#cpassword_e');
var email_emp=$('#email_e');
var btnEmp=$('#submit_emp');

btnEmp.on('click',()=>{

    var nomE  = nomEmp.val();   
    var userE = userEmp.val();  
    var pass1E= pass1_emp.val();
    var pass2E= pass2_emp.val();
    var emailE= email_emp.val();
    var data={nombre_e:nomE,usuario_e:userE,password_e:pass1E,email_e:emailE,cpassword_e:pass2E};
    if(pass1E==pass2E)
    {
        console.log(data);
        $.ajax({
            
            url:'http://localhost:3000/regemp/registroE',
            method:'post',
            dataType:'json',
            data:data,
            success:function(response)
            {
                alert("Usuario registrado correctamente");
                nomEmp   .val("");
                userEmp  .val("");
                pass1_emp.val("");
                pass2_emp.val("");
                email_emp.val("");
                $('#form1Emp').hide();
                $('#form2Emp').slideDown("slow",()=>{});
        
            }
        
              });
    }
    else
    {
        alert("Las contraseñas no coinciden");
        pass1_emp.val("");
        pass2_emp.val("");
        pass1_emp.focus();
    }
    
        });




});