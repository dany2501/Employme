var con = require('../conexionsql/conexion');

exports.interesados = async function (req, res, next) {
    var e=req.session.usuario;
    var uno=e.id
    const userData=[uno];
    const sqlQuery= 'select id_emp,nom_emp,email_emp,id_asp from interes natural join datosempresa where id_asp=?';
    

    try{

         var obj= await con.consultaBd(sqlQuery,userData);
         req.session.empresas=obj;

    }catch(err)
    {
        console.log(err);
        res.json('Ocurrio un error al registrarse');
    }
}