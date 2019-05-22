var con = require('../conexionsql/conexion');
var nodemailer = require('nodemailer');




<<<<<<< HEAD

=======
>>>>>>> 174aceedb2a7581c78fe7b90b8cdfab66e990a7f
exports.interesAndroid = async function (req, res, next) {
    
    var obj_emp = [req.body.idEmp , req.body.NameEmp];
    var obj_asp = [req.body.idAsp , req.body.emailAsp];

<<<<<<< HEAD
    const ids = [obj_emp[0], obj_asp[0]];
    const sqlQuery = 'insert into interes (id_emp,id_asp) values (?,?)';

    try {
        con.consultaBd(sqlQuery, userData);

        var transporter = nodemailer.createTransport({
=======
	const ids = [obj_emp[0], obj_asp[0]];
    const sqlQuery = 'insert into interes (id_emp,id_asp) values (?,?)';

    try {
        con.consultaBd(sqlQuery, ids);
var transporter = nodemailer.createTransport({
>>>>>>> 174aceedb2a7581c78fe7b90b8cdfab66e990a7f
            service: 'gmail',
            auth: {
                user: 'aurantisoft@gmail.com',
                pass: 'Correoempresa'
            }
<<<<<<< HEAD
        });
        var mailOptions = {
=======
        });        
var mailOptions = {
>>>>>>> 174aceedb2a7581c78fe7b90b8cdfab66e990a7f
            from: 'Employme <aurantisoft@gmail.com>',
            to: obj_asp[1],
            subject: 'Interes',
            text: 'A alguna empresa le haz interesado',
            html: "<h1> La empresa " + obj_emp[1] + " ha visitado tu perfil y parece ser que le interesó tu portafolio de trabajos </h1> " +
                "<a href='http://34.227.162.181/empresa' target= '_blank'>Click aquí para saber más</a>"

        };
        transporter.sendMail(mailOptions, function (err, info) {
            console.log(err);
        });
<<<<<<< HEAD

        res.json("Agregado a la lista");
=======
        res.json("¡Agregado a la lista!");
>>>>>>> 174aceedb2a7581c78fe7b90b8cdfab66e990a7f
    }
    catch (err) {
        console.log(err)
        res.json("Error al asignar el interes");
    }


}

exports.interesado = async function (req, res, next) {
    var uno = req.session.usuario.id
    var dos = req.session.asp.id

    const userData = [uno, dos];
    const sqlQuery = 'insert into interes (id_emp,id_asp) values (?,?)';


    try {

<<<<<<< HEAD
        var transporter = nodemailer.createTransport({
=======
var transporter = nodemailer.createTransport({
>>>>>>> 174aceedb2a7581c78fe7b90b8cdfab66e990a7f
            service: 'gmail',
            auth: {
                user: 'aurantisoft@gmail.com',
                pass: 'Correoempresa'
            }
        });
        var mailOptions = {
            from: 'Employme <aurantisoft@outlook.com>',
            to: req.session.asp.email,
            subject: 'Interes',
            text: 'A alguna empresa le haz interesado',
            html: "<h1> La empresa " + req.session.usuario.nom + " ha visitado tu perfil y parece ser que le interesó tu portafolio de trabajos </h1> " +
                "<a href='http://34.227.162.181/empresa' target= '_blank'>Click aquí para saber más</a>"

        };
        transporter.sendMail(mailOptions, function (err, info) {
            console.log(err);
        });

        con.consultaBd(sqlQuery, userData);
        res.redirect('/aspirantes');

    } catch (err) {
        console.log(err);
        res.json('Ocurrió un error.');
    }
}


exports.intereses = async function (req, res, next) {

    var emp = req.session.usuario.id
    console.log(emp);
    const sqlQuery = "select id_emp,id_asp from interes where id_emp=?"
    try {
        var result = await con.consultaBd(sqlQuery, emp);
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.json("Ocurrió un error");
    }
}

<<<<<<< HEAD
=======

>>>>>>> 174aceedb2a7581c78fe7b90b8cdfab66e990a7f
exports.interesesAndroid = async function (req,res,next)
{
    var emp = req.body.idEmp;
    var asp = req.body.idAsp;
    const sqlQuery = "select id_emp,id_asp from interes where id_emp=? and  id_asp=?"
    
    try {
        var result = await con.consultaBd(sqlQuery, [emp,asp]);
	console.log(result.length);
        if(result.length>=1)
        {
            res.json(true)
        }
        else 
        {
            res.json(false);
        }
    }
    catch (err) {
        console.log(err);
        res.json("Ocurrió un error");
    }

}

exports.interesados = async function (req, res, next) {

    var device = req.body.device;
    if (device == "Android") {
        var e = req.body.id;
        var sqlQuery = 'select id_emp,email_emp,nom_emp,usu_emp,ruta_imge from perfilempresa natural join datosempresa natural join imgempresa where id_emp in (select id_emp from interes where id_asp=?)';
        var Query = " select ruta_imge from imgempresa where id_pemp=(select id_pemp from perfilempresa where id_emp=(select id_emp from interes where id_asp=?))"
    }
    else {
        var s = req.session.usuario;
        var e = s.id;
        var sqlQuery = 'select id_emp as iemp, ruta_imge as photo ,nom_emp as nomemp,email_emp as emaile, ruta_imge as photo from perfilempresa natural join datosempresa natural join imgempresa where id_emp in (select id_emp from interes where id_asp=?)';

    }
    const userData = [e];


    try {
        var emps = [];
        var obj = await con.consultaBd(sqlQuery, userData);
        
        if(req.body.device=="Android")
        {
            for (var i = 0; i < obj.length; i++) {
                emps[i] = { "nom_emp": obj[i].nom_emp, "foto_emp": obj[i].ruta_imge, "email_emp": obj[i].email_emp, "id_emp": obj[i].id_emp }
            }
            res.json(emps);
        }
        else 
        {
            res.json(obj);
        }

    } catch (err) {
        console.log(err);
        res.json('Ocurrio un error');
    }
}
