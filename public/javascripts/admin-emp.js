$(document).ready(function(){

var empresas="";
var container=$("#empresas")

    $.ajax({
        url:"http://34.227.162.181/admin/emp",
        type:"get",
        dataType: 'json',
        success:function (response){
            for (var i in response)
            {
                
            empresas+=`
            <div class="information-table-list">        
        <div class="information-tr">
          <div class="information-td-data">
            <div class="information-td-data-photo"><img class="data-user-photo" src="${response[i].ruta_imge}"/></div>
            <div class="information-td-data-name">Nombre: ${response[i].nom_emp}</div>
          </div>
          <div class="information-td-email-container">
            <div class="information-td-email">Email: ${response[i].email_emp}</div>
          </div>
          <div class="information-td-speciality-container">
            <div class="information-td-tag"><a href="/admin/empresa/${response[i].id_emp}" class="btn btn-blue">Ver perfil</a> </div>
          </div>
          
          <div class="information-td-speciality-container">
            <div class="information-td-tag"><a href="/admin/deleteE/${response[i].id_emp}" class="btn btn-blue">Eliminar</a> </div>
          </div>
    
        </div></div><br>`
    
            }
            container.html(empresas);
        }
    
    });

});

