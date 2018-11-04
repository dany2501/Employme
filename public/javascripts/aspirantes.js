$(document).ready(function(){
  
    var interes=$('#guardar');
    var area = $('#github');
    var error="";
    var repositories = "";
    var areav=$('#video');

    interes.on('click',()=>{
      $.ajax({
        url:'http://localhost:3000/asp-interested',
        type:'post',
        dataType:'json'
      });
      var url = "http://localhost:3000/aspirantes";
      $(location).attr('href',url);


    });

   $.post("http://localhost:3000/aspirante", function(data){
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
    });



    $.ajax({
      url:'http://localhost:3000/aspirante',
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