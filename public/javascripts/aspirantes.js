$(document).ready(function () {

  var interes = $('#guardar');
  var area = $('#github');
  var error = "";
  var repositories = "";
  var areav = $('#video');

  interes.on('click', () => {
    $.ajax({
      url: 'http://34.227.162.181:8080/aspirantes',
      type: 'post',
      dataType: 'json',
      success: function (respone) { console.log('Se realizó con exito') }, error: function (err) { console.log(err) }
    });

    interes.hide();
  });

  $.post("http://34.227.162.181:8080/aspirante", function (data) {
    if (data == 'Ocurrió un error') {
      repositories = `<div class="curriculum-required">
      <svg class="curriculum-required-icon">
        <use xlink:href="images/sprite.svg#icon-github-square"></use>
      </svg><span class="curriculum-required-link">Este usuario no ha vinculado su cuenta de Github</span></div>`;
      area.html(repositories);
    } else {
      data.map((repository) => {
        repositories += `
          <div class="repo">
          <a href="${repository.html_url}" class="github-element" target="_blank">
          ${repository.name}
                </a>
                  <div class="github-link">
                    <p>Programado en: ${repository.language}</p>
                  </div>
                  </div>
                  <br>
        `;
      });
      area.html(repositories)
    }
  });

var prevyt =$("#youtube");

prevyt.on("click",function(e){
  console.log("click")
e.preventDefault() ;
});

  $.ajax({
    url: 'http://34.227.162.181:8080/aspirante',
    type: 'put',
    dataType: 'json',
    success: function (json) {
      var url = json;
      if (url == null) {
        error = `<div class="curriculum-required" >
        <svg class="curriculum-required-icon" id="youtube">
          <use xlink:href="images/sprite.svg#icon-youtube" ></use>
        </svg><span class="curriculum-required-link">El usuario no ha agregado su vídeo.</span></div>`;

        areav.html(error);
      }
      else {
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
        $(window).on("load", onYouTubeIframeAPIReady());


      }

    },
    error: function (xhr, status) {
      alert('Existió un problema');
    }
  });


  //Para saber si ya hubo interés.
  var id = $('#id').val();
  var bandera = false;
  $.ajax({
    url: 'http://34.227.162.181:8080/aspirantes/know',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      console.log(json);

      for (var i in json) {
        if (json[i].id_asp == id) {
          bandera = true;

        }

      }
      if (bandera == true) {
        interes.hide();


      }

    }
  });


  //Para saber si tiene ruta de pdf

  var embed =$("#pdf");

  var src=embed.prop('src');

  if(src=="http://34.227.162.181:8080/null")
  {
    $("#curriculum").html(`<div class="curriculum" id="cv"><a class="curriculum-required"></a>
        <label for="pdf">
          <svg class="curriculum-required-icon">
            <use xlink:href="images/sprite.svg#icon-address-card "></use>
          </svg><span class="curriculum-required-link">El usuario no ha subido su curriculum.</span>
        </label>
  </div>`)
  }

  else 
  {
    
  }

});