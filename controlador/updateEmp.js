var db = require('../conexionsql/conexion');

var settings = {password: 'HECD010225HMCRRNA6'}

exports.update = async function (req, res, next) 
{
var session=req.session.usuario;
var sqlQuery="update datosempresa natural join perfilempresa set sitio_pemp=?, email_emp=?,numtel_pemp=?, ubi_pemp=? where id_emp=? "
var sqlData=[req.body.sitio,req.body.mail,req.body.num,req.body.dir,session.id];

try
{   
    console.log(sqlData);
    var result= await db.consultaBd(sqlQuery,sqlData);
}

catch (err)
{
console.log(err);
}   
}

exports.showAndroid = async function(req,res,next)
{
    var id=req.body.id;
    var sqlQuery="select sitio_pemp,des_emp,numtel_pemp,ubi_pemp from datosempresa natural join perfilempresa where id_emp=?";

    try{
        var result=await db.consultaBd(sqlQuery,id);
        var response = []
        response[0]={"sitio_pemp":result[0].sitio_pemp,"des_emp":result[0].des_emp,"numtel_pemp":result[0].numtel_pemp,"ubi_pemp":result[0].ubi_pemp}
        res.json(response);
    }
    catch(err){
        console.log(err)
        res.json("Error");
    }


}

exports.show = async function(req,res,next)
{
    var session=req.session.usuario;
    var sqlQuery="select nom_emp,sitio_pemp,email_emp,des_emp,numtel_pemp,ubi_pemp from datosempresa natural join perfilempresa where id_emp=?";
    var sqlData=session.id;

    try{
        var result=await db.consultaBd(sqlQuery,sqlData);
        console.log(result)
        res.json(result);
    }
    catch(err){
        console.log(err)
        res.redirect('/emp-profile');
    }


}

exports.addDes = async function(req,res,next)
{
    var session=req.session.usuario;
    var sqlQuery="update perfilempresa set des_emp=? where id_emp=? ";
    var sqlData=[req.body.desc,session.id];

    try
    {
        var result=await db.consultaBd(sqlQuery,sqlData);
    }
    catch(err)
    {
        console.log('Ocurrió un error al actualizar');
        console.log(err);
    }




}