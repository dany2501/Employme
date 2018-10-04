var db =require('../conexionsql/conexion');


exports.iniciarSesion = async function (req, res, next) {

    const sqlQuery = "SELECT * FROM datosaspirante WHERE usu_asp = ? AND psw_asp= ?";
    const sqlData = [req.body.usu, req.body.contra];

    try {
        var result = await db.consultaBd(sqlQuery, sqlData);

        if (req.body.usu == result[0].usu_asp && req.body.contra == result[0].psw_asp) {
            var obj = {
                id: result[0].id_asp,
                usuario: result[0].usu_asp,

                
            }
            // mira, quita el render que tienes aqui abajo y cuando inicies sesion lo rediriges a la ruta de perfilasp por ejemplo y ahi haces la logica de todo, con el objeto de la sesion puedes hacer la consulta para tener todos los datos que pusiste abajo 
            req.session.usuario = obj;
            res.redirect('/perfilasp');
        } else if (result[0].usu_asp == undefined || result[0].psw_asp == undefined) {
            res.json('Datos incorrectos')
        }
    } catch (err) {
        console.log(err);
        res.redirect("/login");
    }
}
}