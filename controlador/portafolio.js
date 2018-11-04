var con = require('../conexionsql/conexion');

exports.agregarGH = async function (req, res, next) {
    var id=req.session.usuario;

    const userData=[req.body.usuario,id.id];
    const sqlQuery= 'update perfilaspirante set usugh_pasp=? where id_asp=?';
    

    try{

         var result= await con.consultaBd(sqlQuery,userData);
         res.redirect('/perfilasp');

    }catch(err)
    {
        console.log(err);
        res.json('Ocurrio un error al registrarse');
    }
}