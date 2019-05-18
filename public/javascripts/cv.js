$(document).ready(() => {

var imagen =$("#img");
    //Para descripción

    var btndesc=$("#btndesc");
    var textArea=$("#desc");
    var descrip="";

    btndesc.on("click",()=>{

        descrip=textArea.val();

        $.ajax({
            url: 'http://34.227.162.181/add-cv/descripcion',
            method: 'post',
            dataType: 'json',
            data: {
                descripcion: descrip
            },
            success: function (response) { }

        });
location.reload();
    });

    //Registrar Idiomas que habla
    var nombre 
    var idiomas = "";
    var idioma = $('#lenguage');
    var oidioma = $('#botn');
    var btnIdioma = $('#agregarI');

    oidioma.on('click', () => {
    
        if (idioma.val()=="0")
        {
            alert("Debes elegir un idioma que sepas hablar.")
            
        }
        else
        {
            
        idiomas = idioma.val();
        $.ajax({
            url: 'http://34.227.162.181/add-cv',
            method: 'post',
            dataType: 'json',
            data: {
                idioma: idiomas
            },
            success: function (response) { }
        });
        idioma.val('0');

        location.reload();

        }
    });

    //Registrar proyecto en que participó
    var nomPro = "";
    var puesto = "";
    var empresa = "";
    var nom = $('#projectName');
    var emp = $('#companyName');
    var pos = $('#position');
    var pbtn = $('#pBtn');

    pbtn.on('click', () => {
        nomPro = nom.val();
        empresa = emp.val();
        puesto = pos.val();

        $.ajax({
            url: 'http://34.227.162.181/add-cv',
            method: 'put',
            dataType: 'json',
            data: {
                nom: nomPro,
                puesto: puesto,
                emp: empresa
            },
            success: function (response) { }
        });
        nom.val('');
        emp.val('');
        pos.val('');
        nom.focus();
        location.reload();
    });


    //Registrar referencias de su trabajo

    var ref = "";
    var tel = "";
    var email = "";
    //elementos del dom
    var refName = $('#refName');
    var telRef = $('#telRef');
    var emailRef = $('#emailRef');
    var refBtn = $('#refBtn');

    //capturando el evento click

    refBtn.on('click', () => {
        ref = refName.val();
        tel = telRef.val();
        email = emailRef.val();

        $.ajax({
            url: 'http://34.227.162.181/add-cv/referencias',
            method: 'post',
            dataType: 'json',
            data: {
                nomRef: ref,
                telRef: tel,
                emailRef: email
            },
            success: function (response) { }
        });
        location.reload();
        refName.val('');
        telRef.val('');
        emailRef.val('');
        refName.focus();


    });

    //Registrar sofwares que sabe utilizar

    var nameSoft = "";
    var percentage = "";
    //Capturando elementos del dom
    var softName = $('#softName');
    var softPor = $('#softPor');
    var softBtn = $('#softBtn');

    softBtn.on('click', () => {
        nameSoft = softName.val();
        percentage = softPor.val();
        console.log(percentage);
        if (percentage=="")
        {
            alert("No hay porcentaje");
        }
        else 
        {
            
        $.ajax({
            url: 'http://34.227.162.181/add-cv/software',
            method: 'post',
            dataType: 'json',
            data: {
                nomSoft: nameSoft,
                manejo: percentage
            },
            success: function (response) { }
        });
        location.reload();
        softPor.val('');
        softName.val(0);

        }

    });

    //Generando curriculum

    var cvBtn = $('#cvBtn');
    var s;
    var r;
    var p;
    var j;
    var l;
    var tipo;
    var base = "";
    var du = "";

    //Pasando imagen a base 64 para ser mostrada en el cv

  
    async function getBase64Image(imgUrl) {
        
        var img = new Image();
        img.src = imgUrl;
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL;
    }

    
      



    cvBtn.on('click', () => {
        (async () => {
            async function leng() {
                return $.ajax({
                    url: 'http://34.227.162.181/add-cv/showLeng',
                    method: 'get',
                    dataType: 'json',
                    success: function (response) {
                        return response
                    }
                });
            }
            l = await leng();


            async function proj() {
                return $.ajax({
                    url: 'http://34.227.162.181/add-cv/showProj',
                    method: 'get',
                    dataType: 'json',
                    success: function (response) {
                        return response;
                    }
                });
            }
            p = await proj();


            async function ref() {
                return $.ajax({
                    url: 'http://34.227.162.181/add-cv/showRef',
                    method: 'get',
                    dataType: 'json',
                    success: function (response) {
                        return response;
                    }
                });
            }

            r = await ref();

            async function DU() {
                return $.ajax({
                    url: 'http://34.227.162.181/add-cv/showDU',
                    method: 'get',
                    dataType: 'json',
                    success: function (response) {
                        return response;
                    }
                });
            }

            du = await DU();


            async function sof() {
                return $.ajax({
                    url: 'http://34.227.162.181/add-cv/showSoft',
                    method: 'get',
                    dataType: 'json',
                    success: function (response) {
                        return response;
                    }
                });
            }

            s = await sof();

            await generar(s, p, r, l, du);
            async function generar(s, p, r, l, du) {

                var doc = new jsPDF();
                doc.setDrawColor(0);
                doc.setFillColor(165, 235, 247);
                doc.rect(0, 0, 62, 300, 'F');
                doc.setFillColor(204, 201, 201);
                doc.rect(0, 20, 230, 26, 'F');
                doc.setFontSize(22);
                doc.text(80, 30, `${du.nombre}`);

                doc.setFontSize(14);
                doc.text(82, 40, 'PUESTO OCUPADO/BUSCADO');
                doc.text(17, 92, 'Idiomas');
                doc.text(18, 138, 'Programas');
                doc.text(18, 184, 'Referencias');
                doc.text(122, 54, 'QUIEN SOY');
                doc.line(64, 52.5, 121, 52.5);
                doc.line(151, 52.5, 208, 52.5);
                doc.text(123, 124, 'ESTUDIOS');
                doc.line(64, 122.5, 121, 122.5);
                doc.line(151, 122.5, 208, 122.5);
                doc.text(107, 173, 'EXPERIENCIA LABORAL');
                doc.line(64, 172, 107, 172);
                doc.line(165, 172, 208, 172);



                doc.setFontSize(12);
                doc.text(10, 70, `Dirección: ${du.ubi}`);
                doc.text(10, 76, `Telefóno: ${du.tel}`);
                doc.text(10, 82, `Email: ${du.email}`);
                var seg = 104;
                for (var i in l) {
                    doc.text(10, seg, ``+i+parseInt(1)+`: ${l[i].idioma_idio}`);
                    seg += 6;

                }
                var se = 144;
                for (var i in s) {
                    doc.text(10, se, `${s[i].nom_soft} al ${s[i].niv_soft}% `);
                    se += 6;
                }
                var s = 190;
                for (var i in r) {
                    doc.text(2, s, `Nombre: ${r[i].nombre}`);
                    s += 6;
                    doc.text(2, s, `Correo: ${r[i].email}`);
                    s += 6;
                    doc.text(2, s, `Telefono: ${r[i].tel}`);
                    s += 12;
                }


                var sec = 180;
                for (var i in p) {
                    doc.text(110, sec, `Nombre del proyecto: ${p[i].nombre}`);
                    sec += 6;
                    doc.text(110, sec, `Nombre de la empresa: ${p[i].emps}`);
                    sec += 6;
                    doc.text(110, sec, `Puesto ocupado: ${p[i].puesto}`);
                    sec += 12;
                }



                var nombre = du.nombre
                loremipsum = du.des;
                doc.setFontSize(11);
                //lineas = doc.splitTextToSize(palabra,número de letras) //Nota: por alguna extraña razón no concuenrda el valor de número de letras...
                lines = doc.splitTextToSize(loremipsum, 138);
                doc.text(66, 60, lines);


                l
                var randomNumber=makeid(100);
                
                var base64 =  await getBase64Image(imagen.prop('src'));
                console.log(base64);
                    

                doc.addImage(base64, 'JPEG', 9, 15, 45, 50);
                
                doc.save("'cv_"+nombre+"_'"+randomNumber+"'.pdf");

            }
            alert("Recuerda que una vez descargado el documento es necesario que lo subas a la plataforma");


        })();


    });
    function makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < length; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }


});