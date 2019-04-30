$(document).ready(()=>{

var container =$("#aspirantes");
var aspirantes="";
$.ajax({
    url:"http://3.93.218.234:80/admin/asp",
    type:"get",
    dataType: 'json',
    success:function (response){
        for (var i in response)
        {
            
        aspirantes+=`
        <div class="information-table-list">        
    <div class="information-tr">
      <div class="information-td-data">
        <div class="information-td-data-photo"><img class="data-user-photo" src="${response[i].ruta_imga}"/></div>
        <div class="information-td-data-name">${response[i].nom_asp} ${response[i].apt_asp} ${response[i].apm_asp}</div>
      </div>
      <div class="information-td-email-container">
        <div class="information-td-email">${response[i].email_asp}</div>
      </div>
      <div class="information-td-phone-container">
        <div class="information-td-phone">${response[i].numtel_asp}</div>
      </div>
      <div class="information-td-sex-container">
        <div class="information-td-sex">${response[i].sex_asp}</div>
      </div>
      <div class="information-td-speciality-container">
        <div class="information-td-tag"><a href="/admin/aspirante/${response[i].id_asp}" class="btn btn-blue">Ver perfil</a> </div>
      </div>
      
      <div class="information-td-speciality-container">
        <div class="information-td-tag"><a href="/admin/delete/${response[i].id_asp}" class="btn btn-blue">Eliminar</a> </div>
      </div>

    </div></div><br>`

        }
        container.html(aspirantes);
    }

});



});
