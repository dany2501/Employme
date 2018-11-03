var con = require('../conexionsql/conexion');

exports.registrarAspirante = async function (req, res, next) {

    var settings = {
        password: 'HECD010225HMCRRNA6'
    }
    const userData=[req.body.nombre, req.body.apt, req.body.apm, req.body.usuario, req.body.password, req.body.email, req.body.fn, req.body.sexo];
    const sqlQuery= "insert into datosaspirante (nom_asp,apt_asp,apm_asp,usu_asp,psw_asp,email_asp,FN_asp,sex_asp) values (?,?,?,AES_ENCRYPT(?,'"+[settings.password]+"'),AES_ENCRYPT(?,'"+[settings.password]+"'),?,?,?)";

    if(req.body.password==req.body.confpass){

    try{
         var result= await con.consultaBd(sqlQuery,userData);
         res.redirect('/');

    }catch(err)
    {
        console.log(err);
        res.json('Ocurrio un error al registrarse');
    }

      

}
else{
    res.render('error')
}
    
}