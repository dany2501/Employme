
var db = require("../conexionsql/conexion");
var nodemailer = require('nodemailer');
var settings = { password: 'HECD010225HMCRRNA6' }

exports.recuperarAsp = async function (req, res, next) {

    var email = req.body.usu;
    var flag = false
    var sqlData;

    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            flag=true;
        }
    }

    
    if(flag==true)
    {

        sqlData = email;
        var sqlQuery = "select email_asp ,(AES_DECRYPT(psw_asp, '" + settings.password + "')) as psw_asp FROM datosaspirante WHERE email_asp = ? ";

        
    var result = await db.consultaBd(sqlQuery, sqlData);
console.log(result.length);
    if (result.length == 0 ) {
        res.redirect('/');
      
    }
    
    else {
        try {
            var response = new Buffer.from(result[0].psw_asp, 'hex');
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'aurantisoft@gmail.com',
                    pass: 'Correoempresa'
                }
            });

            var mailOptions = {
                from: 'Employme <aurantisoft@outlook.com>',
                to: result[0].email_asp,
                subject: 'Recuperación de contraseña',
                text: 'Se ha solicitado la recuperación de la contraseña de su cuenta',
                html: '<h1> A través de este mail, le proporcionamos la contraseña de su cuenta<br>Es muy importante que la guardes un lugar seguro <br>La contraseña es: ' + response.toString() + '</h1> '

            };
            transporter.sendMail(mailOptions, function (err, info) {
                console.log(err);

            });

        }
        catch (err) { console.log(err) }
        res.redirect('/')
    }
    
    }

    else 
    {

        res.json("Correo no encontrado.");
    }
    
}








