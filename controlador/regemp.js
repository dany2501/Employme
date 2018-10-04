var con = require('../conexionsql/conexion');

exports.registrarEmpresa = async function (req, res, next) {

    const userData=[req.body.nombre_e,req.body.usuario_e,req.body.password_e,req.body.email_e];
    const sqlQuery= 'insert into datosempresa (nom_emp,usu_emp,psw_emp,email_emp) values (?,?,?,?)';

if(req.body.password_e==req.body.cpassword_e){

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