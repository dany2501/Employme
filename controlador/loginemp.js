var db =require('../conexionsql/conexion');


exports.iniciarSesion = async function (req, res, next) {

    const sqlQuery = "SELECT id_emp,usu_emp,psw_emp,nom_emp FROM datosempresa WHERE usu_emp = ? AND psw_emp= ?";
    const sqlData = [req.body.usu_e, req.body.pass_e];

    try {
        //Se consulta a la bd para buscar el usuario de la empresa 
        var result = await db.consultaBd(sqlQuery, sqlData);
        if (req.body.usu_e == result[0].usu_emp && req.body.pass_e == result[0].psw_emp) {

            var obj = {
                id: result[0].id_emp,
                usuario: result[0].usu_emp,
                nom:result[0].nom_emp
            }
            req.session.usuario = obj;
            const Query = "select id_pasp,id_asp,ruta_imga,nom_asp,FN_asp,sex_asp,email_asp from imgaspirante natural join perfilaspirante natural join datosaspirante;";
            var asp=await db.consultaBd(Query);
            req.session.aspirantes=asp;
            res.redirect('/aspirantes')
            /* .then((respuesta)=>{
                 res.render('aspirantes', {aspirantes:respuesta});
             });*/

        } else if (result[0].usu_asp == undefined || result[0].psw_asp == undefined) {
            res.json('Datos incorrectos')
        }
    } catch (err) {
        console.log(err);
        res.redirect("/index");
    }
}

