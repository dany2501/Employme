var con = require('../conexionsql/conexion');
var nodemailer = require('nodemailer');

exports.registrarAspirante = async function (req, res, next) {

    var settings = {
        password: 'HECD010225HMCRRNA6'
    }

    var device=req.body.device; 

    console.log(device);
    const userData = [req.body.nombre,req.body.usuario, req.body.password, req.body.email, req.body.fn, req.body.sexo, req.body.num];

    const sqlQuery = "insert into datosaspirante (nom_asp,usu_asp,psw_asp,email_asp,FN_asp,sex_asp,numtel_asp) values (?,AES_ENCRYPT(?,'" + [settings.password] + "'),AES_ENCRYPT(?,'" + [settings.password] + "'),?,?,?,?)";
    const Query = "select (AES_DECRYPT(usu_asp,'" + settings.password + "')) as usu_asp,email_asp from datosaspirante;";
    var asp = await con.consultaBd(Query);
    var flag = false;


    if (req.body.password == req.body.confpass) {
        for (var i in asp) {
            if (asp[i].usu_asp == req.body.usuario || asp[i].email_asp == req.body.email) {
                flag = true;
            }
        }

        if (flag == true) {

            if(device=="Android")
            {
                res.json("Usuario o email ya registrado");
            }
            else{

            console.log("Usuario o email ya registrado");
            res.redirect('/error');
            }

        } else {

            try {
                

                var result = await con.consultaBd(sqlQuery, userData);
                
            } catch (err) {
                console.log(err);
                res.json('Ocurrio un error al registrarse');
            }

            if(device=="Android")
            {
                

                res.json("Registrado Correctamente");

            }
            else{
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'aurantisoft@gmail.com',
                        pass: 'Correoempresa'
                    }
                });

                var mailOptions = { 
                    from: 'Employme <aurantisoft@outlook.com>',
                    to: req.body.email,
                    subject: 'Prueba de correo',
                    text: 'Se ha enviado la primer prueba',
                    html: '<h1> Se ha enviado la primer prueba con Nodemailer</h1> '

                };
                transporter.sendMail(mailOptions, function (err, info) {
                    console.log(err);
                });

                res.redirect("/exito");

            }
            
        }
    }

    else {
        res.render('error')
    }
}
