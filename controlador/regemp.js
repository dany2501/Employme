var con = require('../conexionsql/conexion');
var nodemailer=require('nodemailer');

exports.registrarEmpresa = async function (req, res, next) {
    var settings = {
        password: 'HECD010225HMCRRNA6'
    }
    var flag=false;

    var device=req.body.device; 

    const userData=[req.body.nombre_e,req.body.usuario_e,req.body.password_e,req.body.email_e];
    const sqlQuery= "insert into datosempresa (nom_emp,usu_emp,psw_emp,email_emp) values (?,AES_ENCRYPT(?,'"+[settings.password]+"'),AES_ENCRYPT(?,'"+[settings.password]+"'),?)"
    const Query = "select (AES_DECRYPT(usu_emp,'" + settings.password + "')) as usu_emp,email_emp from datosempresa;";
    var emp = await con.consultaBd(Query);


if(req.body.password_e==req.body.cpassword_e){
    
        for (var i in emp) {
            if (emp[i].usu_emp == req.body.usuario_e || emp[i].email_emp == req.body.email_e) {
                flag = true;
            }
        }
        
        if(flag==true)
        {
            if(device=="Android")
            {
                res.json("Usuario o email ya registrado");
            }
            else{

            console.log("Usuario o email ya registrado");
            res.redirect('/error');
            }
        }
        else{
            
    try{
        var result= await con.consultaBd(sqlQuery,userData);

    }catch(err)
    {
        console.log(err);
        res.json('Ocurrio un error al registrarse');
    }

        if(device=="Android")
        {
            res.json("Registrado Correctamente");
        }
        else
        {
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
    
             
             res.redirect('/exito');
        }
        

        }

}
else{
    res.render('error')
}
    
}
