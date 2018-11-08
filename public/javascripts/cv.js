
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
        idioma.focus(0); 
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

    //Generando curriculum

    var cvBtn=$('#cvBtn');
    var s;
    var r;
    var p;
    var j;
    var l;
    cvBtn.on('click',()=>{
        (async ()=>{
            async function leng(){
                return $.ajax({
                    url:'http://localhost:3000/add-cv/showLeng',
                    method:'get',
                    dataType:'json',
                    success:function(response){
                    return response
                    }
                });
            }
             l= await leng();
            // console.log(l);
        

             async function proj(){
                return $.ajax({
                    url:'http://localhost:3000/add-cv/showProj',
                    method:'get',
                    dataType:'json',
                    success:function(response){
                    return response;
                     }
                });
            }
             p= await proj();
             //console.log(p);

             
             async function ref(){
                return $.ajax({
                    url:'http://localhost:3000/add-cv/showRef',
                    method:'get',
                    dataType:'json',
                    success:function(response){
                    return response;
                     }
                });
            }

             r= await ref();
             //console.log(r);


             async function sof(){
                return $.ajax({
                    url:'http://localhost:3000/add-cv/showSoft',
                    method:'get',
                    dataType:'json',
                    success:function(response){
                    return response;
                     }
                });
            }

             s= await sof();
             //console.log(s);
             

            await generar(s,p,r,l);

             async function generar(s,p,r,l)
             {
                 console.log(s);
                 console.log(p);
                 console.log(r);
                 console.log(l);
                var doc = new jsPDF();
		doc.setDrawColor(0);
		doc.setFillColor(165, 235, 247);
		doc.rect(0, 0, 62, 300, 'F');
		doc.setFillColor(204, 201, 201);
		doc.rect(0, 20, 230, 26, 'F');
		doc.setFontSize(22);
		doc.text(80, 30, 'NOMBRE APELLIDOS');

		doc.setFontSize(14);
		doc.text(82, 40, 'PUESTO OCUPADO/BUSCADO');
		doc.text(17,92,'Idiomas');
		doc.text(18, 138,'Programas');
		doc.text(18,184,'Referencias');
		doc.text(122, 54,'QUIEN SOY');
		doc.line(64, 52.5, 121, 52.5);
		doc.line(151, 52.5, 208, 52.5);
		doc.text(123 , 124,'ESTUDIOS');
		doc.line(64, 122.5, 121, 122.5);
		doc.line(151, 122.5, 208, 122.5);
		doc.text(107,173,'EXPERIENCIA LABORAL');
		doc.line(64, 172, 107, 172); 
        doc.line(165, 172, 208, 172); 
        


		doc.setFontSize(12);
		doc.text(10,70,'Dirección: XXXXXXXX');
		doc.text(10,76,'Telefono: XXXXXXXX');
		doc.text(10,82,'Email: XXXXXXXX');
		doc.text(10,98,'Español: Natal');
		doc.text(10,104,`Idioma: ${l[0].idioma}`);
        doc.text(10,110,`Idioma: ${l[1].idioma}`);
        if(l[2].idioma!=null)
        {
            console.log(l[2].idioma)
		doc.text(10,116,`Idioma: ${l[2].idioma}`);
        }else if(l[3].idioma!=null)
        {
            console.log(l[3].idioma);
            doc.text(10,122,`Idioma: ${l[3].idioma}`);
        }
        else if(l[4].idioma!=null)
        {
        
            console.log( l[4].idioma);
            doc.text(10,128,`Idioma: ${l[4].idioma}`);

        }else
        {

        
		doc.text(10,150,'^ Excel : Experto');
		doc.text(10,156,'^ Word: Experto');
		doc.text(10,162,'^ JSP: Excelperto');
		doc.text(10,168,'^ JSP: Excelperto');
		doc.text(10,174,'^ JSP: Excelperto');

        }
        doc.text(10,144,`Software: ${s[0].nombre} al ${s[0].mane} `);
		
		doc.text(10,190,'Nombre:');
		doc.text(10,196,'Dirección:');
		doc.text(10,202,'Correo:');
		doc.text(10,208,'Teléfono');
		doc.text(10,214,'Empresa');
		doc.text(10,220,'Cargo');
		doc.text(10,226,'Nacionalidad');
		doc.text(10,232,'Facebook');
		doc.text(10,238,'Twitter');
		doc.text(10,244 ,'Whatsapp');
		doc.text(65,130,'Año');
		doc.text(65,135,'País,Estado,Ciudad');
		doc.text(120,130,'Título:XXXXXXXXXXXX');
		doc.text(120,135,'Universidad o Institución');
		doc.text(65,145,'Año');
		doc.text(65,150,'País,Estado,Ciudad');
		doc.text(120,145,'Título:XXXXXXXXXXXX');
		doc.text(120,150,'Universidad o Institución');
		doc.text(65,160,'Año');
		doc.text(65,165,'País,Estado,Ciudad');
		doc.text(120,160,'Título:XXXXXXXXXXXX');
		doc.text(120,165,'Universidad o Institución');
		doc.text(65,180,'De XX/XX/XXXX');
		doc.text(65,185,'A XX/XX/XXXX');
		doc.text(65,190,'País, Ciudad');
		doc.text(110,180,'Nombre de la empresa');
		doc.text(110,185,'Cargo o puesto en la empresa');
		
		doc.text(65,215,'De XX/XX/XXXX');
		doc.text(65,220,'A XX/XX/XXXX');
		doc.text(65,225,'País, Ciudad');
		doc.text(110,215,'Nombre de la empresa');
		doc.text(110,220,'Cargo o puesto en la empresa');
		
		doc.text(65,250,'De XX/XX/XXXX');
		doc.text(65,255,'A XX/XX/XXXX');
		doc.text(65,260,'País, Ciudad');
		doc.text(110,250,'Nombre de la empresa');
		doc.text(110,255,'Cargo o puesto en la empresa');
		
		

		loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor. Sed at sapien urna. Fusce augue ipsum, molestie et adipiscing at, varius quis enim. Morbi sed magna est, vel vestibulum urna. Sed tempor ipsum vel mi pretium at elementum urna tempor. Nulla faucibus consectetur felis, elementum venenatis mi mollis gravida. Aliquam mi ante, accumsan eu tempus vitae, viverra quis justo.\n\nProin feugiat augue in augue rhoncus eu cursus tellus laoreet. Pellentesque eu sapien at diam porttitor venenatis nec vitae velit. Donec ultrices volutpat lectus eget vehicula. Nam eu erat mi, in pulvinar eros. Mauris viverra porta orci, et vehicula lectus sagittis id. Nullam at magna vitae nunc fringilla posuere. Duis volutpat malesuada ornare. Nulla in eros metus. Vivamus a posuere libero.'
		doc.setFontSize(11);
		//lineas = doc.splitTextToSize(palabra,número de letras) //Nota: por alguna extraña razón no concuenrda el valor de número de letras...
    	lines = doc.splitTextToSize(loremipsum, 138);
    	doc.text(66, 59, lines);


    	loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor.';

    	lines = doc.splitTextToSize(loremipsum, 100);
    	doc.text(110, 190, lines);
    	lines = doc.splitTextToSize(loremipsum, 100);
    	doc.text(110, 225, lines);
    	lines = doc.splitTextToSize(loremipsum, 100);
    	doc.text(110, 260, lines);
		/*var imgData = base;
		doc.addImage(imgData, 'JPEG', 9, 15, 45, 50);*/
        doc.save('test.pdf');
    } 



             



        
        
        
            })();
        


    });

    
    
    







});