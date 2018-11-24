var con = require('../conexionsql/conexion');
var nodemailer= require('nodemailer');

exports.registrarAspirante = async function (req, res, next) {

    var settings = {
        password: 'HECD010225HMCRRNA6'
    }
    const userData=[req.body.nombre, req.body.apt, req.body.apm, req.body.usuario, req.body.password, req.body.email, req.body.fn, req.body.sexo];
   
    const sqlQuery= "insert into datosaspirante (nom_asp,apt_asp,apm_asp,usu_asp,psw_asp,email_asp,FN_asp,sex_asp) values (?,?,?,AES_ENCRYPT(?,'"+[settings.password]+"'),AES_ENCRYPT(?,'"+[settings.password]+"'),?,?,?)";

    const Query = "select (AES_DECRYPT(usu_asp,'"+settings.password+"')) as usu_asp,email_asp from datosaspirante;";
    var asp=await con.consultaBd(Query);
    var flag=false;
    
    
    if(req.body.password==req.body.confpass){
        for (var i in asp) {
            if(asp[i].usu_asp==req.body.usuario || asp[i].email_asp==req.body.email)
            {
                flag=true;
            }
        }
    
        if(flag==true)
        {
            console.log("Usuario o email ya registrado");
            res.redirect('/error');

        }else{

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
    to: req.body.email,
    subject:'Prueba de correo',
    text:'Se ha enviado la primer prueba',
    html:'<h1> Se ha enviado la primer prueba con Nodemailer</h1> '

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
        }
      


else{
    res.render('error')
}
    }
    