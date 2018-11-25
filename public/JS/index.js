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
    }});
}).change();


submit_asp.on('click',()=>{
    console.log("Dió click");
    var data={nombre:name_asp.val(),apt:apt_asp.val(),apm:apm_asp.val(),usuario:user_asp.val(),password:pass1_asp.val(),confpass:pass2_asp.val(),email:email_asp.val(),fn:fecha.val(),sexo:str};
    if(pass1_asp.val()==pass2_asp.val())
    {

        $.ajax({
            url:'http://localhost:8080/regasp/registro',
            method:'post',
            dataType:'json',
            data:data,
            success:function(response){alert("Usuario registrado correctamente");
        },error:function(err){console.log(err);}
        });
    }
    else
    {
        alert("Las contraseñas no coinciden.")
        pass1_asp.val("")
        pass2_asp.val("");
        pass1_asp.focus();
    }
    
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
    console.log(data);
    if(pass1E==pass2E)
    {
        console.log("Antes de petición");
        $.ajax({
            
            url:'http://localhost:8080/regemp/registro',
            type:'post',
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