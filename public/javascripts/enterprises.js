$(document).ready(() => {
    var container = $("#container");
    var data = "";

    $.ajax({
        url: 'http://34.227.162.181:8080/asp-interested',
        type: 'post',
        dataType: 'json',
        success: function (respone) {

            for (var i=0;i<respone.datos.length;i++) {
                        data += `<a class="information-tr" href="/empresa/${respone.datos[i].iemp}">
                        <div class="information-td-data">
                        <div class="information-td-data-photo"></div><img class="data-user-photo" src="${respone.images[i].photo}"/>
                        <div class="information-td-data-name">${respone.datos[i].nomemp}</div>
                        </div>
                        <div class="information-td-email-container">
                        <div class="information-td-email">${respone.datos[i].emaile}</div>
                        </div>
                        <div class="information-td-location-container">
                        <div class="information-td-location">CDMX</div>
                        </div>
                        <div class="information-td-speciality-container">
                        <div class="information-td-speciality"></div>
                        <div class="information-td-tag"></div>
                        </div></a>
                    `;

            }
            container.html(data);

        },
        error: function (err) { console.log(err) }
    });
});


