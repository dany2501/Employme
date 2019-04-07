var con = require('../conexionsql/conexion');

exports.interesados = async function (req, res, next) {
    var e=req.session.usuario;
    var uno=e.id
    const userData=[uno];
    const sqlQuery= 'select id_emp,nom_emp,email_emp,id_asp from interes natural join datosempresa where id_asp=?';
    const Query=" select ruta_imge from imgempresa where id_pemp=(select id_pemp from perfilempresa where id_emp=?)"

    try{

         var obj= await con.consultaBd(sqlQuery,userData);
         console.log(obj);
         req.session.empresas=obj;

    }catch(err)
    {
        console.log(err);
        res.json('Ocurrio un error');
    }
}
