var db = require('../conexionsql/conexion');

var settings = {password: 'HECD010225HMCRRNA6'}

exports.update = async function (req, res, next) 
{
var session=req.session.usuario;
var sqlQuery="update datosempresa natural join perfilempresa set sitio_pemp=?, email_emp=? where id_emp=? "
var sqlData=[req.body.sitio,req.body.mail,session.id];

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