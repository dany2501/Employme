var db =require('../conexionsql/conexion');

exports.iniciarSesion = async function (req, res, next) {
    var settings = {
        password: 'HECD010225HMCRRNA6'
    }
    const sqlQuery = "SELECT id_asp,nom_asp,numtel_asp,apt_asp,apm_asp,sex_asp,email_asp,(AES_DECRYPT(usu_asp, '"+settings.password+"')) as usu_asp,(AES_DECRYPT(psw_asp, '"+settings.password+"')) as psw_asp FROM datosaspirante WHERE AES_DECRYPT(usu_asp, '"+settings.password+"')= ? AND AES_DECRYPT(psw_asp, '"+settings.password+"')= ?";
    const sqlData = [req.body.usu, req.body.contra];
    const query='select ruta_imga from imgaspirante where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)';
    const f= 'select DATE_FORMAT((select FN_asp from datosaspirante where id_asp=?)," %d %M %Y ") as fecha;'
    try {
            var result = await db.consultaBd(sqlQuery, sqlData);
            var idasp=result[0].id_asp;
            var result3=await db.consultaBd(query,idasp);
            var fec=await db.consultaBd(f,idasp);
        
        if ((req.body.usu == result[0].usu_asp || req.body.usu==result[0].email_asp) && req.body.contra ==result[0].psw_asp) {
         
            var obj = 
            {
                id: result[0].id_asp,
                nombre:result[0].nom_asp+" "+result[0].apt_asp+" "+result[0].apm_asp,
                usuario: result[0].usu_asp,
                numero:result[0].numtel_asp,
                fn:fec[0].fecha,
                sex:result[0].sex_asp,
                email:result[0].email_asp,
                ruta:result3[0].ruta_imga 
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