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




    $('#btn-form-1').click(function(){
        $('#form1Emp').hide();
        $('#form2Emp').show();
     });
     $('#btn-form-2').click(function(){
        $('#form2Emp').hide();
        $('#form1Emp').show();
     });
     $('#btn-form-2A').click(function(){
        $('#form2Asp').hide();
        $('#form1Asp').show();
     });
     $('#btn-form-1A').click(function(){
        $('#form1Asp').hide();
        $('#form2Asp').show();
     });
});