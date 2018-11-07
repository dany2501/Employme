$(document).ready(()=>{

    //Registrar Idiomas que habla
    var idiomas="";
    var idioma=$('#lenguage');
    var oidioma=$('#botn');
    var btnIdioma=$('#agregarI');

    oidioma.on('click',()=>{
        idiomas=idioma.val();
        console.log(idiomas); 
        $.ajax({
            url:'http://localhost:3000/add-cv',
            method:'post',
            dataType:'json',
            data:{
                idioma:idiomas
            },
            success:function(response){}
        });
        idioma.val('');
        idioma.focus(); 
    });

    //Registrar proyecto en que participó
    var nomPro="";
    var puesto="";
    var empresa="";
    var nom=$('#projectName');
    var emp=$('#companyName');
    var pos=$('#position');
    var pbtn=$('#pBtn');

    pbtn.on('click',()=>{
        nomPro=nom.val();
        empresa=emp.val();
        puesto=pos.val();

        console.log("Proyecto: "+nomPro+" desarrollado en: "+empresa+" con el puesto de: "+puesto);
        $.ajax({
            url:'http://localhost:3000/add-cv',
            method:'put',
            dataType:'json',
            data:{
                nom:nomPro,
                puesto:puesto,
                emp:empresa
            },
            success:function(response){}
        });
        nom.val('');
        emp.val('');
        pos.val('');
        nom.focus();
    });


    //Registrar referencias de su trabajo

    var ref="";
    var tel="";
    var email="";
    //elementos del dom
    var refName=$('#refName');
    var telRef=$('#telRef');
    var emailRef=$('#emailRef');
    var refBtn=$('#refBtn');

    //capturando el evento click

    refBtn.on('click',()=>{
        ref=refName.val();
        tel=telRef.val();
        email=emailRef.val();
console.log("Nombre de la referencia: "+ref+" su telefono es: "+tel+" y su email es: "+email);

        $.ajax({
            url:'http://localhost:3000/add-cv/referencias',
            method:'post',
            dataType:'json',
            data:{
                nomRef:ref,
                telRef:tel,
                emailRef:email
            },
            success:function(response){}
        });

        refName.val('');
        telRef.val('');
        emailRef.val('');
        refName.focus();


    });

    //Registrar sofwares que sabe utilizar

    var nameSoft="";
    var percentage="";
    //Capturando elementos del dom
    var softName=$('#softName');
    var softPor=$('#softPor');
    var softBtn=$('#softBtn');

    softBtn.on('click',()=>{
        nameSoft=softName.val();
        percentage=softPor.val();

        console.log("Maneja: "+nameSoft+" al "+percentage+" %");
        $.ajax({
            url:'http://localhost:3000/add-cv/software',
            method:'post',
            dataType:'json',
            data:{
                nomSoft:nameSoft,
                manejo:percentage
            },
            success:function(response){}
        });

        softName.val('');
        softPor.val('');
        softName.focus();

    });
    
    
    







});