
$(document).ready(()=>{

    //Registrar Idiomas que habla
    var idiomas="";
    var idioma=$('#lenguage');
    var oidioma=$('#botn');
    var btnIdioma=$('#agregarI');

    oidioma.on('click',()=>{
        idiomas=idioma.val(); 
        $.ajax({
            url:'http://54.85.253.12/add-cv',
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

        $.ajax({
            url:'http://54.85.253.12/add-cv',
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

        $.ajax({
            url:'http://54.85.253.12/add-cv/referencias',
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
        $.ajax({
            url:'http://54.85.253.12/add-cv/software',
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
    var tipo;
    var base="";
    var du="";
            $("#inputFileToLoad").on('change',function() {
                var filesSelected = document.getElementById("inputFileToLoad").files;
                tipo=filesSelected[0].type;
                if(tipo!='image/jpeg')
                {
                    alert("Formato no soportado");
                    this.value = '';
                }else
                if (filesSelected.length > 0) {
                    var fileToLoad = filesSelected[0];
                    var fileReader = new FileReader();
                    fileReader.onload = function(fileLoadedEvent) {
                        var base64value = fileLoadedEvent.target.result;
                        base=base64value;
                    };
                    fileReader.readAsDataURL(fileToLoad);	 
                }
            });
            
            
            cvBtn.on('click',()=>{
        (async ()=>{
            async function leng(){
                return $.ajax({
                    url:'http://54.85.253.12/add-cv/showLeng',
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
                    url:'http://54.85.253.12/add-cv/showProj',
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
                    url:'http://54.85.253.12/add-cv/showRef',
                    method:'get',
                    dataType:'json',
                    success:function(response){
                    return response;
                     }
                });
            }

             r= await ref();
             //console.log(r);

             async function DU(){
                return $.ajax({
                    url:'http://54.85.253.12/add-cv/showDU',
                    method:'get',
                    dataType:'json',
                    success:function(response){
                    return response;
                     }
                });
            }

            du=await DU();


             async function sof(){
                return $.ajax({
                    url:'http://54.85.253.12/add-cv/showSoft',
                    method:'get',
                    dataType:'json',
                    success:function(response){
                    return response;
                     }
                });
            }

             s= await sof();
             //console.log(s);
             

            

            
             
            await generar(s,p,r,l,du);
             async function generar(s,p,r,l,du)
             {
                 
                var doc = new jsPDF();
		doc.setDrawColor(0);
		doc.setFillColor(165, 235, 247);
		doc.rect(0, 0, 62, 300, 'F');
		doc.setFillColor(204, 201, 201);
		doc.rect(0, 20, 230, 26, 'F');
		doc.setFontSize(22);
		doc.text(80, 30,`${du.nom}`);

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
		doc.text(10,70,`Dirección: ${du.ubi}`);
		doc.text(10,76,`Telefóno: ${du.tel}`);
		doc.text(10,82,`Email: ${du.email}`);
        doc.text(10,98,'Español: Natal');
                var seg=104;
        for (var i in l) {
            doc.text(10,seg,`Idioma: ${l[i].idioma}`);
            seg+=6;

        }
        var se=144;
        for (var i in s)

        {
            doc.text(10,se,`${s[i].nombre} al ${s[i].mane}% `);
            se+=6;
        }
        var s= 190;
        for(var i in r)
        {
            doc.text(2,s,`Nombre: ${r[i].nombre}`);
            s+=6;
            doc.text(2,s,`Correo: ${r[i].email}`);
            s+=6;
            doc.text(2,s,`Telefono: ${r[i].tel}`);
            s+=12;
        }


        
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
        

        var sec=180;
        for (var i in p)
        {
            doc.text(110,sec,`Nombre del proyecto: ${p[i].nombre}`);
            sec+=6;
            doc.text(110,sec,`Nombre de la empresa: ${p[i].emps}`);
            sec+=6;
            doc.text(110,sec,`Puesto ocupado: ${p[i].puesto}`);
            sec+=12;
        }
		
		
		

		loremipsum =du.des;
		doc.setFontSize(11);
		//lineas = doc.splitTextToSize(palabra,número de letras) //Nota: por alguna extraña razón no concuenrda el valor de número de letras...
    	lines = doc.splitTextToSize(loremipsum, 138);
    	doc.text(66, 60, lines);


    	loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor.';

    	lines = doc.splitTextToSize(loremipsum, 100);
    	doc.text(110, 225, lines);
    	lines = doc.splitTextToSize(loremipsum, 100);
    	doc.text(110, 260, lines);
        var imgData = base;
        if(tipo=='image/jpeg')
        {
            console.log("JPEG");
            doc.addImage(imgData, 'JPEG', 9, 15, 45, 50);
            doc.save('test.pdf');
        }
        
    } 



             



        
        
        
            })();
        


    });

    
    
    







});