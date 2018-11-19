$(document).ready(function() {

    //Empresa
    $(".card-side--front-company").on('click', () => {
        $('.card-side--front-company').css('transform', 'rotateY(-180deg)');
        $('.card-side--back-company').css('transform', 'rotateY(0)');
    });
    $(".card-exit--company").on('click', () => {
        $('.card-side--front-company').css('transform', 'rotateY(0)');
        $('.card-side--back-company').css('transform', 'rotateY(180deg)');
    });
    //Aspirante
    $(".card-side--front-employee").on('click', () => {
        $('.card-side--front-employee').css('transform', 'rotateY(-180deg)');
        $('.card-side--back-employee').css('transform', 'rotateY(0)');
    });
    $(".card-exit--employee").on('click', () => {
        $('.card-side--front-employee').css('transform', 'rotateY(0)');
        $('.card-side--back-employee').css('transform', 'rotateY(180deg)');
    });



//Iniciar Sesion
    $('#btn-form-1').click(function(){
        $('#btn-form-1').attr('class',"btn btn-form btn-form-active ");
        $('#btn-form-2').attr('class',"btn btn-form");
        $('#form1Emp').hide();
        $('#form2Emp').show();
     });
//Registrarse      
     $('#btn-form-2').click(function(){
        $('#btn-form-2').attr('class',"btn btn-form btn-form-active ");
        $('#btn-form-1').attr('class',"btn btn-form");
        $('#form2Emp').hide();
        $('#form1Emp').show();
     });

//Registrarse
     $('#btn-form-2A').click(function(){
        $('#btn-form-2A').attr('class',"btn btn-form btn-form-active ");
        $('#btn-form-1A').attr('class',"btn btn-form");
        $('#form2Asp').hide();
        $('#form1Asp').show();
        
     });

//Iniciar Sesion     
     $('#btn-form-1A').click(function(){
        $('#btn-form-1A').attr('class',"btn btn-form btn-form-active ");
        $('#btn-form-2A').attr('class',"btn btn-form");
        $('#form1Asp').hide();
        $('#form2Asp').show();
     });
});