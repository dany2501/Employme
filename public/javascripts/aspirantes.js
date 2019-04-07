$(document).ready(function () {

  var interes = $('#guardar');
  var area = $('#github');
  var error = "";
  var repositories = "";
  var areav = $('#video');

  interes.on('click', () => {
    $.ajax({
      url: 'http://localhost:8080/aspirantes',
      type: 'post',
      dataType: 'json',
      success: function (respone) { console.log('Se realizó con exito') }, error: function (err) { console.log(err) }
    });

    interes.hide();
  });

  $.post("http://localhost:8080/aspirante", function (data) {
    if (data == 'Ocurrió un error') {
      repositories = `<div class="col-md-6">
        <p>Parece que este usuario no ha enlazado sus repositorios de Github.<br></p>
      </div>`;
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



  $.ajax({
    url: 'http://localhost:8080/aspirante',
    type: 'put',
    dataType: 'json',
    success: function (json) {
      var url = json;
      if (url == null) {
        error = `<div class="col-md-6">
        <p>Parece que este usuario no ha enlazado algún video.<br></p>
      </div>`;

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
    url: 'http://localhost:8080/aspirantes/know',
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
        console.log("Ya está interesado");
        interes.hide();


      }

    }
  })

});