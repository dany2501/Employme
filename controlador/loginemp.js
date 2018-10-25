var db =require('../conexionsql/conexion');


exports.iniciarSesion = async function (req, res, next) {

    const sqlQuery = "SELECT id_emp,usu_emp,psw_emp,nom_emp FROM datosempresa WHERE usu_emp = ? AND psw_emp= ?";
    const sqlData = [req.body.usu_e, req.body.pass_e];

    try {
        //Se consulta a la bd para buscar el usuario de la empresa 
        var result = await db.consultaBd(sqlQuery, sqlData);
        if (req.body.usu_e == result[0].usu_emp && req.body.pass_e == result[0].psw_emp) {
            //de ser correctos los datos se crea un objeto con el id y el usuario para crear la sesion

            var obj = {
                id: result[0].id_emp,
                usuario: result[0].usu_emp,
                nom:result[0].nom_emp
            }
            req.session.usuario = obj;

            //Se obtienen y se muestran todos los aspirantes registrados
            db.getAspirantes()
             .then((respuesta)=>{
                 res.render('buscarasp', {aspirantes: respuesta});
             })

        } else if (result[0].usu_asp == undefined || result[0].psw_asp == undefined) {
            res.json('Datos incorrectos')
        }
    } catch (err) {
        console.log(err);
        res.redirect("/index");
    }
}

