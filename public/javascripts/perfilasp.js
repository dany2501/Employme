$(document).ready(function(){
    var area = $('#github');
    var error="";
    var repositories = "";
    var areav=$('#video');

    $.post("http://localhost:3000/perfilasp", function(data){
      if(data=='Ocurrió un error')
      {
        repositories=`<div class="col-md-6">
        <p>Parece que no haz enlazado tus repositorios de Github.<br> <a href="/portafolio">Enlazar ahora.</a></p>
      </div>`;
      area.html(repositories);
      }else
      {
        data.map((repository)=>{
          repositories += `
          <div class="card card-body mt-2 animated bounceInUp">
            <div class="row">
              <div class="col-md-6">
                <a href="${repository.html_url}" target="_blank">${repository.name}</a>
              </div>
              <div class="col-md-6">
                  <span class="badge badge-primary">
                    Language: ${repository.language}
                  </span>
              </div>
            </div>
          </div>
        `;
      });
      area.html(repositories)
      }
        
    })

    $.ajax({
      url:'http://localhost:3000/perfilasp',
      type:'put',
      dataType:'json',
      success : function(json) {
      var url = json;
      if(url==null)
      {
        error=`<div class="col-md-6">
        <p>Parece que no haz enlazado algún video.<br> <a href="/portafolio">Agregar ahora.</a></p>
      </div>`;

        areav.html(error);
      }
      else{
        console.log(url);
        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('video', {
            height: '200',
            width: '600',
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