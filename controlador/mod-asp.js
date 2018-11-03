var con = require('../conexionsql/conexion');

exports.modificarDatos = async function (req, res, next) {

    var u=req.session.usuario;
    const userData=[req.body.correo,req.body.numero,u.id];
    const sqlQuery= 'update datosaspirante set email_asp=?,numtel_asp=? where id_asp=?';

if(req.body.password_e==req.body.cpassword_e){

    try{

         var result= await con.consultaBd(sqlQuery,userData);
         res.redirect('/perfilasp');

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