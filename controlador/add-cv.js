var db=require('../conexionsql/conexion');
var settings = {
    password: 'HECD010225HMCRRNA6'}
exports.add = async function(req,res,next) {
   
    
        var user=req.session.usuario;
    try{
        var sqlQuery="update descripcioncv set des_cv=AES_ENCRYPT(?,'"+[settings.password]+"') where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData=[req.body.descripcion,user.id];
        console.log(req.body.descripcion);
        var result=await db.consultaBd(sqlQuery,sqlData);
        console.log(result);

        var sqlQuery2="update perfilaspirante set dir_pasp=AES_ENCRYPT(?,'"+[settings.password]+"') where id_asp=?";
        var sqlData2=[req.body.direccion,user.id];
        var result2=await db.consultaBd(sqlQuery2,sqlData2);
        console.log(result2);
        res.redirect('/asp-cv')

    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.addIdiomas = async function(req,res,next)
{
    var user=req.session.usuario;
    try{
        var sqlQuery="insert into idiomas (id_pasp,idioma_idio) values((select id_pasp from perfilaspirante where id_asp=?),AES_ENCRYPT(?,'"+[settings.password]+"'))";
        var sqlData=[user.id,req.body.idioma];
        var result=await db.consultaBd(sqlQuery,sqlData);
        console.log("Registro exitoso")

    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.addProjects = async function(req,res,next)
{
    var user=req.session.usuario;
    try{
        var sqlQuery="insert into proyectos (id_pasp,nom_pro,puesto_pro,emp_pro) values((select id_pasp from perfilaspirante where id_asp=?),AES_ENCRYPT(?,'"+[settings.password]+"'),AES_ENCRYPT(?,'"+[settings.password]+"'),AES_ENCRYPT(?,'"+[settings.password]+"'))";
        var sqlData=[user.id,req.body.nom,req.body.puesto,req.body.emp];
        var result=await db.consultaBd(sqlQuery,sqlData);
        console.log("Registro exitoso")

    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.addReferences = async function(req,res,next)
{
    var user=req.session.usuario;
    try{
        var sqlQuery="insert into referencias (id_pasp,nom_ref,tel_ref,email_ref) values((select id_pasp from perfilaspirante where id_asp=?),AES_ENCRYPT(?,'"+[settings.password]+"'),AES_ENCRYPT(?,'"+[settings.password]+"'),AES_ENCRYPT(?,'"+[settings.password]+"'))";
        var sqlData=[user.id,req.body.nomRef,req.body.telRef,req.body.emailRef];
        var result=await db.consultaBd(sqlQuery,sqlData);
        console.log("Registro exitoso")

    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.addSoftware = async function(req,res,next)
{
    var user=req.session.usuario;
    try{
        var sqlQuery="insert into software (id_pasp,nom_soft,manejo_soft) values((select id_pasp from perfilaspirante where id_asp=?),AES_ENCRYPT(?,'"+[settings.password]+"'),?)";
        var sqlData=[user.id,req.body.nomSoft,req.body.manejo];
        var result=await db.consultaBd(sqlQuery,sqlData);
        console.log("Registro exitoso")

    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }

}