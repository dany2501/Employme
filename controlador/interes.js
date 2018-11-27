var con = require('../conexionsql/conexion');
var nodemailer=require('nodemailer');
exports.interesado = async function (req, res, next) {
    var uno=req.session.usuario.id
    var dos=req.session.asp.id
    console.log("Empresa")
    console.log(req.session.usuario);
    console.log("Aspirante");
    console.log(req.session.asp);

    const userData=[uno,dos];
    const sqlQuery= 'insert into interes (id_emp,id_asp) values (?,?)';
    

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
                to: req.session.asp.email,
                subject:'Prueba interes',
                text:'A alguna empresa le haz interesado',
                html:"<h1> La empresa "+req.session.usuario.nom+" ha visitado tu perfil y parece ser que le interesó tu portafolio de trabajos </h1> "+
                "<a href='http://18.233.147.158:8080/empresa' target= '_blank'>Click aquí para saber más</a>"
            
            };
            transporter.sendMail(mailOptions,function(err,info){
                console.log(err);
            });

         con.consultaBd(sqlQuery,userData);
         res.redirect('/aspirantes');

    }catch(err)
    {
        console.log(err);
        res.json('Ocurrió un error.');
    }
}


exports.intereses=async function (req,res,next)
{

    var emp=req.session.usuario.id
    console.log(emp);
    const sqlQuery="select id_emp,id_asp from interes where id_emp=?"
    try
    {
        var result=await con.consultaBd(sqlQuery,emp);
        res.json(result);
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
        res.json("Ocurrió un error");
    }


    
}