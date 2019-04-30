var db = require('../conexionsql/conexion');
var moment = require('moment');
moment.locale('es');

exports.iniciarSesion = async function (req, res, next) {

    var device = req.body.device;
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
        sqlQuery = "SELECT id_asp,nom_asp,numtel_asp,FN_asp,sex_asp,email_asp,(AES_DECRYPT(usu_asp,'" + settings.password + "')) as usu_asp,(AES_DECRYPT(psw_asp, '" + settings.password + "')) as psw_asp FROM datosaspirante WHERE email_asp=? AND psw_asp=AES_ENCRYPT(?, '" + settings.password + "')";
    }
    else {

        sqlQuery = "SELECT id_asp,nom_asp,numtel_asp,FN_asp,sex_asp,email_asp,(AES_DECRYPT(usu_asp,'" + settings.password + "')) as usu_asp,(AES_DECRYPT(psw_asp, '" + settings.password + "')) as psw_asp FROM datosaspirante WHERE usu_asp=AES_ENCRYPT(? ,'" + settings.password + "') AND psw_asp=AES_ENCRYPT(?, '" + settings.password + "')";
    }
    var foto="select ruta_imga from imgaspirante where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";

    var foto="select ruta_imga from imgaspirante where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";

    try {
        var result = await db.consultaBd(sqlQuery, sqlData);
        var resfoto=await db.consultaBd(foto,result[0].id_asp);
        

        if (user == result[0].usu_asp || user == result[0].email_asp && req.body.contra == result[0].psw_asp) {

            if(device=="Android")
            {
                var pass=new Buffer.from(result[0].psw_asp,'hex');
                var response = new Buffer.from(result[0].usu_asp, 'hex');
                 var obj =
                {

                    "id_asp": result[0].id_asp,
		    "psw_asp":pass.toString(),
                    "nom_asp": result[0].nom_asp,
                    "usu_asp": response.toString(),
                    "fn_asp": moment(result[0].FN_asp).format('LL'),
                    "sex_asp":result[0].sex_asp,
                    "email_asp": result[0].email_asp,
                    "numtel_asp": result[0].numtel_asp,
		    "foto_asp":resfoto[0].ruta_imga
                }
console.log(obj);
	res.json(obj);
            }
            else 
            {
                var obj =
                {

                    id: result[0].id_asp,
                    nombre: result[0].nom_asp, 
                    usuario: result[0].usu_asp,
                    fn: moment(result[0].FN_asp).format('LL'),
                    sex: result[0].sex_asp,
                    email: result[0].email_asp,
                    num: result[0].numtel_asp

                }
            req.session.usuario = obj;
            res.redirect('/perfilasp');
            }
        } else if (result[0].usu_asp == undefined || result[0].psw_asp == undefined) {
            res.json('Datos incorrectos')
        }
    } catch (err) {
        console.log(err);
        res.redirect("/index");
    }
}

