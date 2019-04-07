var db=require('../conexionsql/conexion');

var settings = {
    password: 'HECD010225HMCRRNA6'}

exports.add = async function(req,res,next) {
   
    
        var user=req.session.usuario;
    try{
        var sqlQuery="update descripcioncv set des_cv=AES_ENCRYPT(?,'"+[settings.password]+"') where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData=[req.body.descripcion,user.id];
        var result=await db.consultaBd(sqlQuery,sqlData);

        var sqlQuery2="update perfilaspirante set dir_pasp=AES_ENCRYPT(?,'"+[settings.password]+"') where id_asp=?";
        var sqlData2=[req.body.direccion,user.id];
        var result2=await db.consultaBd(sqlQuery2,sqlData2);
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

    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }

}



exports.showSoftware = async function(req,res,next)
{
    var nombres=[];
    var output=[];
    var data={};
    var user=req.session.usuario;
    try{
        var sqlQuery="select id_soft,manejo_soft, AES_DECRYPT(nom_soft,'"+settings.password+"')as nom_soft from software where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData=[user.id];
        var result=await db.consultaBd(sqlQuery,sqlData);
        for(var i=0;i<result.length;i++)
        {
            output[i]=new Buffer.from(result[i].nom_soft, 'hex');
            nombres[i]=output[i].toString()
            data[i]={id:result[i].id_soft,nombre:nombres[i],mane:result[i].manejo_soft}
            
        }
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }

}

exports.showReferences = async function(req,res,next)
{
    var emails=[];
    var output=[];
    var tels=[];
    var data={};
    var user=req.session.usuario;
    try{
        var sqlQuery="select id_ref,AES_DECRYPT(nom_ref,'"+settings.password+"')as nom_ref,AES_DECRYPT(tel_ref,'"+settings.password+"')as tel_ref,AES_DECRYPT(email_ref,'"+settings.password+"')as email_ref from referencias where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData=[user.id];
        var result=await db.consultaBd(sqlQuery,sqlData);
        for(var i=0;i<result.length;i++)
        {
            tels[i]=new Buffer.from(result[i].tel_ref,'hex');
            output[i]=new Buffer.from(result[i].nom_ref, 'hex');
            emails[i]= new Buffer.from(result[i].email_ref,'hex');
            data[i]={id:result[i].id_ref,nombre:(output[i]).toString(),tel:(tels[i]).toString(),email:(emails[i]).toString()}
            
        }
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }
    
}

exports.showProjects = async function(req,res,next)
{
    var emps=[];
    var output=[];
    var puestos=[];
    var data={};
    var user=req.session.usuario;
    
    try{
        var sqlQuery="select id_pro,AES_DECRYPT(nom_pro,'"+settings.password+"')as nom_pro,AES_DECRYPT(puesto_pro,'"+settings.password+"')as puesto_pro,AES_DECRYPT(emp_pro,'"+settings.password+"')as emp_pro from proyectos where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData=[user.id];
        var result=await db.consultaBd(sqlQuery,sqlData);
        for(var i=0;i<result.length;i++)
        {
            emps[i]=new Buffer.from(result[i].emp_pro,'hex');
            output[i]=new Buffer.from(result[i].nom_pro, 'hex');
            puestos[i]= new Buffer.from(result[i].puesto_pro,'hex');
            data[i]={id:result[i].id_pro,nombre:(output[i]).toString(),emps:(emps[i]).toString(),puesto:(puestos[i]).toString()}
            
        }
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }
    
}

// id_pasp,idioma_idio

exports.showLenguages = async function(req,res,next)
{
    var ids=[];
    var idiomas=[];
    var data={};
    var user=req.session.usuario;
    
    try{
        var sqlQuery="select id_idio,AES_DECRYPT(idioma_idio,'"+settings.password+"')as idioma_idio from idiomas where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
        var sqlData=[user.id];
        var result=await db.consultaBd(sqlQuery,sqlData);
        for(var i=0;i<result.length;i++)
        {
            idiomas[i]=new Buffer.from(result[i].idioma_idio, 'hex');
            data[i]={id:result[i].id_idio,idioma:(idiomas[i]).toString()}
            
        }
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }
    
}


exports.showDesUbi = async function(req,res,next)
{
    var des="";
    var ubi="";
    var data={};
    var user=req.session.usuario;
    var name;
    
    try{
        var sqlQuery="select AES_DECRYPT(des_cv,'"+settings.password+"')as des_cv,AES_DECRYPT(dir_pasp,'"+settings.password+"')as dir_pasp,numtel_asp, email_asp from descripcioncv natural join perfilaspirante natural join datosaspirante where id_asp=?";
        
        var sqlData=[user.id];
        var result=await db.consultaBd(sqlQuery,sqlData);
            name=result[0].nom_asp+" "+result[0].apt_asp+" "+result[0].apm_asp;
            des=new Buffer.from(result[0].des_cv, 'hex');
            ubi=new Buffer.from(result[0].dir_pasp,'hex');
            data={des:(des.toString()),ubi:(ubi.toString()),nom:name,tel:result[0].numtel_asp, email:result[0].email_asp,nombre:user.nombre}
            
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json('Ocurrió un error');

    }
    
}