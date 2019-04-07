var db = require('../conexionsql/conexion');
var moment = require('moment');

exports.iniciarSesion = async function (req, res, next) {
    moment.locale('es');

    var settings = { password: 'HECD010225HMCRRNA6' }

    var user = req.body.usu;
    var contra = req.body.contra;
    var sqlData = [user, contra];
    var sqlQuery
    var flag = false;

    for (var i = 0; i < user.length; i++) {
        if (user[i] == "@") {
            flag = true
        }
    }


    if (flag == true) {
        sqlQuery = "SELECT id_asp,nom_asp,apt_asp,numtel_asp,apm_asp,FN_asp,sex_asp,email_asp,(AES_DECRYPT(usu_asp,'" + settings.password + "')) as usu_asp,(AES_DECRYPT(psw_asp, '" + settings.password + "')) as psw_asp FROM datosaspirante WHERE email_asp=? AND psw_asp=AES_ENCRYPT(?, '" + settings.password + "')";
    }
    else {

        sqlQuery = "SELECT id_asp,nom_asp,apt_asp,numtel_asp,apm_asp,FN_asp,sex_asp,email_asp,(AES_DECRYPT(usu_asp,'" + settings.password + "')) as usu_asp,(AES_DECRYPT(psw_asp, '" + settings.password + "')) as psw_asp FROM datosaspirante WHERE usu_asp=AES_ENCRYPT(? ,'" + settings.password + "') AND psw_asp=AES_ENCRYPT(?, '" + settings.password + "')";
    }

    try {
        var result = await db.consultaBd(sqlQuery, sqlData);

        if (user == result[0].usu_asp || user == result[0].email_asp && req.body.contra == result[0].psw_asp) {

            var obj =
                {

                    id: result[0].id_asp,
                    nombre: result[0].nom_asp + " " + result[0].apt_asp + " " + result[0].apm_asp,
                    usuario: result[0].usu_asp,
                    fn: moment(result[0].FN_asp).format('LL'),
                    sex: result[0].sex_asp,
                    email: result[0].email_asp,
                    num: result[0].numtel_asp

                }
            req.session.usuario = obj;
            res.redirect('/perfilasp', );
        } else if (result[0].usu_asp == undefined || result[0].psw_asp == undefined) {
            res.json('Datos incorrectos')
        }
    } catch (err) {
        console.log(err);
        res.redirect("/index");
    }
}
