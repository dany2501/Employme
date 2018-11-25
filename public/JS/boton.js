$(document).ready(function(){

    var form=$('#modal');
    var boton=$('#but');
    var agregar=$('#guardar');
    var save=$('#save');
    var template="";
    var escuelas =[];
    var i=0;

    save.on('click',function(){
        $.ajax({})
    });

    boton.click(function(){
        form.slideDown("slow",function(){
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
    form.slideUp("fast",function(){
    });
    contenedor.html(template);
    });


});