var db =require('../conexionsql/conexion');



exports.iniciarSesion = async function (req, res, next) {

    const sqlQuery = "SELECT * FROM datosaspirante WHERE usu_asp = ? AND psw_asp= ?";
    const sqlData = [req.body.usu, req.body.contra];
    const query='select ruta_imga from imgaspirante where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)';
    const f= 'Select DATE_FORMAT((select FN_asp from datosaspirante where id_asp=?)," %d %M %Y ") as fecha;'
    try {
            var result = await db.consultaBd(sqlQuery, sqlData);
            var result3=await db.consultaBd(query,result[0].id_asp);
            var fec=await db.consultaBd(f,result[0].id_asp);
        
        if (req.body.usu == result[0].usu_asp && req.body.contra == result[0].psw_asp) {
         
            var obj = 
            {
                id: result[0].id_asp,
                nombre:result[0].nom_asp+" "+result[0].apt_asp+" "+result[0].apm_asp,
                usuario: result[0].usu_asp,
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