$(document).ready(function(){
    var area = $('#github');
    var error="";
    var repositories = "";
    var f="";
    var areav=$('#video');
    var foto=$('.information-photo');


    $.ajax({
                url:'http://localhost:3000/fotoasp',
                method:'put',
                dataType:'json',
                success:function(response){
                  var ruta=(response[0].ruta_imga);
                  foto.attr("src",ruta);
                
                },
            });


    $.post("http://localhost:3000/perfilasp", function(data)
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
      url:'http://localhost:3000/perfilasp',
      type:'put',
      dataType:'json',
      success : function(json) {
      var url = json;
      if(url==null)
      {
        error=`<div>
        <p>Parece que no haz enlazado algún video.<br> <a id="youtube">Agregar ahora.</a></p>
      </div>`;

        areav.html(error);
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