$(document).ready(function(){
  var area = $('#github');
  var error="";
  var repositories = "";
  var f="";
  var areav=$('#video');
  var foto=$('.information-photo');
  var pdfcv=$('#cv');

  $("#pdf").on('change',function() {
    var filesSelected = document.getElementById("pdf").files;
    tipo=filesSelected[0].type;
    if(tipo!='application/pdf')
    {
        alert("Formato no soportado");
        this.value = '';
    }
    else
    {
      var formdata = new FormData();
      formdata.append('file', $('#pdf')[0].files[0]);
      console.log("Comentado");

              $.ajax({
                   url:'http://18.233.147.158:8080/curriculum/upload',
                  method:'post',
                  data:formdata,
                  processData: false,
                  contentType: false,
                  success:function(response){
                    
                  var url = "http://18.233.147.158:8080/perfilasp";
                  $(location).attr('href', url);
                  console.log ("Se mandó");
                   },error:function(err){console.log(err)}

      });

    }
});

$.ajax({
  url:'http://18.233.147.158:8080/curriculum/showCv',
  method:'get',
  dataType:'json',
  success:function(response){
    console.log(response);
    var cvpdf=`<embed src="${response}" type="application/pdf" style="height: 100%;
    width: 100%;"></embed>`;

    pdfcv.html(cvpdf);
  },error:function(err){
  }

})



  $.ajax({
              url:'http://18.233.147.158:8080/fotoasp',
              method:'put',
              dataType:'json',
              success:function(response){
                var ruta=(response[0].ruta_imga);
                foto.attr("src",ruta);

              },
          });


  $.post("http://18.233.147.158:8080/perfilasp", function(data)
  {if(data=='Ocurrió un error')
  {
  }else
  {
    data.map((repository)=>{
      repositories += `
      <div class="repo">
      <a href="${repository.html_url}" class="github-element" target="_blank">
      ${repository.name}
            </a>
              <div class="github-link">
                Programado en: ${repository.language}
              </div>
              </div><br>
    `;
  });
  area.html(repositories)
  }
});

  $.ajax({
    url:'http://18.233.147.158:8080/perfilasp',
    type:'put',
    dataType:'json',
    success : function(json) {
    var url = json;
    if(url==null)
    {

    }
    else{
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('video', {
          height: '100%',
          width: '100%',
          videoId: url,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.stopVideo();
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      }
      $(window).on("load",onYouTubeIframeAPIReady());


    }

  },
  error : function(xhr, status) {
      alert('Existió un problema');
  }
  })


});
