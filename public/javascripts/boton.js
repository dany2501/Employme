$(document).ready(function(){
    var boton=$('#but');
    var agregar=$('#guardar');
    var contenedor=$('#contenedor');
    var template="";

    boton.click(function(){
        console.log('Diste click');
    });
    agregar.click(function(){
        var dato=$('#input').val();
        template=` 
        <div class="about-you-modal-container" id="modal">
                            <div class="about-you-modal">
                                <h2 class="heading-tertiary">
                                    Grado Academico
                                </h2>
                                <input class="about-you-modal-input" type="text" id="input" placeholder="Ingresar....">
                                <div class="about-you-btn-container">
                                    <a class="btn btn-blue">Cerrar</a>
                                    <a class="btn btn-blue" id="guardar">Guardar</a>
                                    <a class="btn btn-blue">Eliminar</a>
                                </div>
                            </div>
                        </div>
        <a class="test" id="but" href="#modal">
        <div class="about-you-feature selected-feature" href="#modal">
            <div class="about-you-feature-information">
                <p class="about-you-add-feature-information-text">Agregar</p>
            </div>
        </div>
    </a>
        <div class="about-you-feature selected-feature">             
        <div class="about-you-feature-information">
            <p class="about-you-add-feature-information-text">
                ${dato}
            </p>

        </div>
    </div>`;
    contenedor.html(template);
    // window.location.replace("http://localhost:3000/portafolio");
    });
   /* $.ajax({
        url:"http://localhost:3000/portafolio",
        type:'post',
        dataType:'json',
        success : function(json) 
        {
            console.log(json);
        },
        error : function(xhr, status) {
            alert('Existió un problema');
        }


        
    });*/


});