var con = require('../conexionsql/conexion');

exports.interesado = async function (req, res, next) {
    var e=req.session.usuario;
    var uno=e.id
    var id=req.session.asp;
    var dos=id.id
    const userData=[uno,dos];
    const sqlQuery= 'insert into interes (id_emp,id_asp) values (?,?)';
    

    try{
         con.consultaBd(sqlQuery,userData);
         res.redirect('/aspirantes');

    }catch(err)
    {
        console.log(err);
        res.json('Ocurrió un error.');
    }
}