$(document).ready(function(){
    var area = $('#github');
    var error="";
    var repositories = "";
    var areav=$('#video');

    $.post("http://localhost:3000/perfilasp", function(data){
      if(data=='Ocurrió un error')
      {
        repositories=`<div>
        <p>Parece que no haz enlazado tus repositorios de Github.<br> <div id="git">Enlazar ahora.</div></p>
      </div>`;
      area.html(repositories);
      }else
      {
        data.map((repository)=>{
          console.log(repository);
          repositories += `
          <div>
            <div>
              <div>
                <a href="${repository.html_url}" target="_blank">${repository.name}</a>
              </div>
              <div>
                  <span>
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
        <p>Parece que no haz enlazado algún video.<br> <a id="youtube">Agregar ahora.</a></p>
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