$(document).ready(()=>{

var data={id:$('#id').val()}
console.log(data.id);
var foto=$('.information-photo');
    $.ajax({
        url:'http://34.227.162.181:8080/fotoemp/fotoE',
       method:'post',
       dataType:'json',
       data:data,
       success:function(response){
           console.log(response);
        var ruta=(response[0].ruta_imge);
        foto.attr("src",ruta);
    }
    });



});