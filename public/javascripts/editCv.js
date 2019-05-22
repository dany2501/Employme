$(document).ready(()=>{

    //Idiomas
    var divI=$("#idiomas");
    var leng="";

    $.ajax({
        url: 'http://3.93.218.234/add-cv/showLeng',
        method: 'get',
        dataType: 'json',
        success: function (response) {
            for (var i=0;i<response.length;i++)
            {
                leng+=`
                <div>
                <input class="form-input form-input-dark" type="text" readonly="readonly" value="`+response[i].idioma_idio+`"/>
                
                <a class="btn-blue btn" href="/delete/lenguaje/`+response[i].id_relidioasp+`">Eliminar</a></div>

                `
            }

            divI.html(leng);
        }
    });

//Proyectos

    var divP=$("#projects");
    var projects="";

    $.ajax({
        url: 'http://3.93.218.234/add-cv/showProj',
        method: 'get',
        dataType: 'json',
        success: function (response) {
            console.log(response);

            for (var i in response)
            {
                projects+=`
                <div>
                <textarea class="form-input form-input-dark" style="margin: 30px 0px 11.9922px; width: 400px; height: 116px;" type="text" readonly="readonly">Participaste en el proyecto: `+response[i].nombre+` \nde la empresa: `+response[i].emps+` \ncon el puesto de: `+ response[i].puesto+`</textarea>
                <a class="btn-blue btn" href="/delete/proyecto/`+response[i].id+`">Eliminar</a>
                </div>
                <br>
                `
            }

            divP.html(projects);

        }
    });


    //Referencias

    var refes=$("#refes");
    var refs="";

    $.ajax({
        url: 'http://3.93.218.234/add-cv/showRef',
        method: 'get',
        dataType: 'json',
        success: function (response) {

            for (var i in response)
            {
                refs+=`
                <div>
                <textarea class="form-input form-input-dark" style="margin: 30px 0px 11.9922px; width: 400px; height: 116px;" type="text" readonly="readonly">Agregaste a: `+response[i].nombre+` como referencia con el número: `+response[i].tel+` y el email `+ response[i].email+`</textarea>
                <a class="btn-blue btn" href="/delete/referencia/`+response[i].id+`">Eliminar</a>
                </div>
                <br>
                `
            }

            refes.html(refs);

        }
    });

    //Descripcion Ubicacion y más

    var textA=$("#desc");
    $.ajax({
        url: 'http://3.93.218.234/add-cv/showDU',
        method: 'get',
        dataType: 'json',
        success: function (response) {

            if(response.des==null)
            {

            }
            else{
                textA.val(response.des);
            }

        }
    });

    // Herramientas

    var soft=$("#soft");
    var sw="";

    $.ajax({
        url: 'http://3.93.218.234/add-cv/showSoft',
        method: 'get',
        dataType: 'json',
        success: function (response) {

            for (var i=0;i<response.length;i++)
            {
                sw+=`
                <div>
                <input class="form-input form-input-dark" type="text" readonly="readonly" value="`+response[i].nom_soft+` al `+ response[i].niv_soft+`%"/>
                
                <a class="btn-blue btn" href=/delete/software/`+response[i].id_rel+`>Eliminar</a></div>
                `
            }

            soft.html(sw);
        }
    });

});