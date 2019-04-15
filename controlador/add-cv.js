var db = require('../conexionsql/conexion');

var settings = {
    password: 'HECD010225HMCRRNA6'
}

exports.add = async function (req, res, next) {


    var user = req.session.usuario;
    try {
        var sqlQuery = "update descripcioncv set des_cv=AES_ENCRYPT(?,'" + [settings.password] + "') where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData = [req.body.descripcion, user.id];
        var result = await db.consultaBd(sqlQuery, sqlData);
        res.redirect('/asp-cv')

    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.addIdiomas = async function (req, res, next) {
    var user = req.session.usuario;
    try {
        var sqlQuery = "insert into relidioasp (id_pasp,id_idio) values((select id_pasp from perfilaspirante where id_asp=?),?)";
        var sqlData = [user.id, req.body.idioma];
        var result = await db.consultaBd(sqlQuery, sqlData);

    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.addProjects = async function (req, res, next) {
    var user = req.session.usuario;
    try {
        var sqlQuery = "insert into proyectos (id_pasp,nom_pro,puesto_pro,emp_pro) values((select id_pasp from perfilaspirante where id_asp=?),AES_ENCRYPT(?,'" + [settings.password] + "'),AES_ENCRYPT(?,'" + [settings.password] + "'),AES_ENCRYPT(?,'" + [settings.password] + "'))";
        var sqlData = [user.id, req.body.nom, req.body.puesto, req.body.emp];
        var result = await db.consultaBd(sqlQuery, sqlData);

    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.addReferences = async function (req, res, next) {
    var user = req.session.usuario;
    try {
        var sqlQuery = "insert into referencias (id_pasp,nom_ref,tel_ref,email_ref) values((select id_pasp from perfilaspirante where id_asp=?),AES_ENCRYPT(?,'" + [settings.password] + "'),AES_ENCRYPT(?,'" + [settings.password] + "'),AES_ENCRYPT(?,'" + [settings.password] + "'))";
        var sqlData = [user.id, req.body.nomRef, req.body.telRef, req.body.emailRef];
        var result = await db.consultaBd(sqlQuery, sqlData);

    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.addSoftware = async function (req, res, next) {
    var user = req.session.usuario;
    try {
        var sqlQuery = "insert into relsoftasp (id_pasp,id_soft,niv_soft) values((select id_pasp from perfilaspirante where id_asp=?),?,?)";
        var sqlData = [user.id, req.body.nomSoft, req.body.manejo];
        var result = await db.consultaBd(sqlQuery, sqlData);

    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}



exports.showSoftware = async function (req, res, next) {
    var user = req.session.usuario;
    try {
        var sqlQuery = "select * from relsoftasp natural join software where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData = [user.id];
        var result = await db.consultaBd(sqlQuery, sqlData);
        console.log(result);
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.showReferences = async function (req, res, next) {
    var emails = [];
    var output = [];
    var tels = [];
    var data = {};
    var user = req.session.usuario;
    try {
        var sqlQuery = "select id_ref,AES_DECRYPT(nom_ref,'" + settings.password + "')as nom_ref,AES_DECRYPT(tel_ref,'" + settings.password + "')as tel_ref,AES_DECRYPT(email_ref,'" + settings.password + "')as email_ref from referencias where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData = [user.id];
        var result = await db.consultaBd(sqlQuery, sqlData);
        for (var i = 0; i < result.length; i++) {
            tels[i] = new Buffer.from(result[i].tel_ref, 'hex');
            output[i] = new Buffer.from(result[i].nom_ref, 'hex');
            emails[i] = new Buffer.from(result[i].email_ref, 'hex');
            data[i] = { id: result[i].id_ref, nombre: (output[i]).toString(), tel: (tels[i]).toString(), email: (emails[i]).toString() }

        }
        console.log(data);
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.showProjects = async function (req, res, next) {
    var emps = [];
    var output = [];
    var puestos = [];
    var data = {};
    var user = req.session.usuario;

    try {
        var sqlQuery = "select id_pro,AES_DECRYPT(nom_pro,'" + settings.password + "')as nom_pro,AES_DECRYPT(puesto_pro,'" + settings.password + "')as puesto_pro,AES_DECRYPT(emp_pro,'" + settings.password + "')as emp_pro from proyectos where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData = [user.id];
        var result = await db.consultaBd(sqlQuery, sqlData);
        for (var i = 0; i < result.length; i++) {
            emps[i] = new Buffer.from(result[i].emp_pro, 'hex');
            output[i] = new Buffer.from(result[i].nom_pro, 'hex');
            puestos[i] = new Buffer.from(result[i].puesto_pro, 'hex');
            data[i] = { id: result[i].id_pro, nombre: (output[i]).toString(), emps: (emps[i]).toString(), puesto: (puestos[i]).toString() }

        }
        console.log(data);
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}

// id_pasp,idioma_idio

exports.showLenguages = async function (req, res, next) {
    var ids = [];
    var idiomas = [];
    var data = {};
    var user = req.session.usuario;

    try {
        var sqlQuery = "select * from relidioasp natural join idiomas where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData = [user.id];
        var result = await db.consultaBd(sqlQuery, sqlData);
        console.log(result);
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}


exports.showDesUbi = async function (req, res, next) {
    var des = "";
    var ubi = "";
    var data = {};
    var user = req.session.usuario;
    var name;

    try {
        var sqlQuery = "select AES_DECRYPT(des_cv,'" + settings.password + "')as des_cv,AES_DECRYPT(dir_pasp,'" + settings.password + "')as dir_pasp,numtel_asp, email_asp from descripcioncv natural join perfilaspirante natural join datosaspirante where id_asp=?";

        var sqlData = [user.id];
        var result = await db.consultaBd(sqlQuery, sqlData);
        des = new Buffer.from(result[0].des_cv, 'hex');
        ubi = new Buffer.from(result[0].dir_pasp, 'hex');
        data = { des: (des.toString()), ubi: (ubi.toString()), tel: result[0].numtel_asp, email: result[0].email_asp, nombre: user.nombre }

        console.log(data);
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.deleteIdioma = async function (req, res, next) {

    var user = req.session.usuario;
    var idioma = req.params.id;
    console.log(idioma);

    try {

        const sqlQuery = "delete from relidioasp where id_relidioasp =? and id_pasp=(select id_pasp from perfilaspirante where id_asp=?)"
        var result = await db.consultaBd(sqlQuery, [idioma, user.id]);
        res.redirect("/asp-cv");

    }
    catch (err) {
        console.log(err)
    }



}

exports.deleteSoftware = async function (req, res, next) {

    var user = req.session.usuario;
    var soft = req.params.id;

    try {

        const sqlQuery = "delete from relsoftasp where id_rel =? and id_pasp=(select id_pasp from perfilaspirante where id_asp=?)"
        var result = await db.consultaBd(sqlQuery, [soft, user.id]);
        res.redirect("/asp-cv");

    }
    catch (err) {
        console.log(err)
    }



}

exports.deleteReferencia = async function (req, res, next) {

    var user = req.session.usuario;
    var ref = req.params.id;

    try {

        const sqlQuery = "delete from referencias where id_ref =? and id_pasp=(select id_pasp from perfilaspirante where id_asp=?)"
        var result = await db.consultaBd(sqlQuery, [ref, user.id]);
        res.redirect("/asp-cv");

    }
    catch (err) {
        console.log(err)
    }



}

exports.deleteProyecto = async function (req, res, next) {

    var user = req.session.usuario;
    var pro = req.params.id;

    try {

        const sqlQuery = "delete from proyectos where id_pro =? and id_pasp=(select id_pasp from perfilaspirante where id_asp=?)"
        var result = await db.consultaBd(sqlQuery, [pro, user.id]);
        res.redirect("/asp-cv");

    }
    catch (err) {
        console.log(err)
    }



}