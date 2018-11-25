var db =require('../conexionsql/conexion');
var moment=require('moment');
exports.iniciarSesion = async function (req, res, next) {
    moment.locale('es');

var settings = {password: 'HECD010225HMCRRNA6'}

    const sqlQuery = "SELECT id_asp,nom_asp,apt_asp,numtel_asp,apm_asp,FN_asp,sex_asp,email_asp,(AES_DECRYPT(usu_asp,'"+settings.password+"')) as usu_asp,(AES_DECRYPT(psw_asp, '"+settings.password+"')) as psw_asp FROM datosaspirante WHERE AES_DECRYPT(usu_asp, '"+settings.password+"')=? AND AES_DECRYPT(psw_asp, '"+settings.password+"')= ?";
    const sqlData = [req.body.usu, req.body.contra];
    try {
            var result = await db.consultaBd(sqlQuery, sqlData);
            var idasp=result[0].id_asp;

        if ((req.body.usu == result[0].usu_asp || req.body.usu==result[0].email_asp) && req.body.contra == result[0].psw_asp) {

            var obj =
            {
                id: result[0].id_asp,
                nombre:result[0].nom_asp+" "+result[0].apt_asp+" "+result[0].apm_asp,
                usuario: result[0].usu_asp,
                fn:moment(result[0].FN_asp).format('LL'),
                sex:result[0].sex_asp,
                email:result[0].email_asp,
                num:result[0].numtel_asp
            }
            req.session.usuario = obj;
            res.redirect('/perfilasp',);
        } else if (result[0].usu_asp == undefined || result[0].psw_asp == undefined) {
            res.json('Datos incorrectos')
        }
    } catch (err) {
        console.log(err);
        res.redirect("/index");
    }
}
