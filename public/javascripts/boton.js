$(document).ready(function(){

    var form=$('#modal');
    var boton=$('#but');
    var agregar=$('#guardar');
    var template="";
    var escuelas =[];
    var i=0;

    boton.click(function(){
        form.slideDown("slow",function(){
            console.log('Debió de haber bajado');
        });

    });

    
    agregar.click(function(){

        var contenedor=$('#contenedor');
        var dato=($('#input').val());
        escuelas[i]=dato;
        i++;
        template+=`
        <div class="about-you-feature selected-feature">             
        <div class="about-you-feature-information">
            <p class="about-you-add-feature-information-text">
                ${dato}
            </p>

        </div>
    </div>`;
    console.log(escuelas);  
    form.slideUp("fast",function(){
        console.log('Debió de haber subido');
    })
    contenedor.html(template);
    });


});