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
      $("#pdfForm").submit();
      }

    
});



  $.ajax({
              url:'http://3.93.218.234/fotoasp',
              method:'put',
              dataType:'json',
              success:function(response){
                foto.attr("src",response.img);
                console.log(response.img);
                if(response.cv==undefined)
      {

      }
      else{
        
      var cvpdf=`<embed src="${response.cv}" type="application/pdf" style="height: 100%;
      width: 100%;"></embed>`;
  
      pdfcv.html(cvpdf);

      }

              },
          });


  $.post("http://3.93.218.234/perfilasp", function(data)
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
    url:'http://3.93.218.234/perfilasp',
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
