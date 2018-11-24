var con = require('../conexionsql/conexion');
var nodemailer=require('nodemailer');

exports.registrarEmpresa = async function (req, res, next) {
    var settings = {
        password: 'HECD010225HMCRRNA6'
    }

    const userData=[req.body.nombre_e,req.body.usuario_e,req.body.password_e,req.body.email_e];
    const sqlQuery= "insert into datosempresa (nom_emp,usu_emp,psw_emp,email_emp) values (?,AES_ENCRYPT(?,'"+[settings.password]+"'),AES_ENCRYPT(?,'"+[settings.password]+"'),?)"
console.log(userData);
if(req.body.password_e==req.body.cpassword_e){

    try{

        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'aurantisoft@gmail.com',
                pass: 'Correoempresa'
            }
            });
            
            var mailOptions= {
                from: 'Employme <aurantisoft@outlook.com>',
                to: req.body.email_e,
                subject:'Prueba de correo en empresas',
                text:'Se ha enviado la primer prueba en empresas',
                html:'<h1> Se ha enviado la primer prueba para empresas con Nodemailer</h1> '
            
            };
            transporter.sendMail(mailOptions,function(err,info){
                console.log(err);
            });

         var result= await con.consultaBd(sqlQuery,userData);
         res.redirect('/exito');

    }catch(err)
    {
        console.log(err);
        res.json('Ocurrio un error al registrarse');
    }

      

}
else{
    res.render('error')
}
    
}