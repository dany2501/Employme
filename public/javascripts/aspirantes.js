$(document).ready(function(){
  
    var interes=$('#guardar');
    var area = $('#github');
    var error="";
    var repositories = "";
    var areav=$('#video');

    interes.on('click',()=>{
      $.ajax({
        url:'http://54.85.253.12/aspirantes',
        type:'post',
        dataType:'json',success: function(respone){console.log('Se realizó con exito')},error:function(err){console.log(err)}
      });


    });

   $.post("http://54.85.253.12/aspirante", function(data){
      if(data=='Ocurrió un error')
      {
        repositories=`<div class="col-md-6">
        <p>Parece que este usuario no ha enlazado sus repositorios de Github.<br></p>
      </div>`;
      area.html(repositories);
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
      url:'http://54.85.253.12/aspirante',
      type:'put',
      dataType:'json',
      success : function(json) {
      var url = json;
      if(url==null)
      {
        error=`<div class="col-md-6">
        <p>Parece que este usuario no ha enlazado algún video.<br></p>
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