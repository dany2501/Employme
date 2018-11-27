var con = require('../conexionsql/conexion');

exports.interesado = async function (req, res, next) {
    var uno=req.session.usuario.id
    var dos=req.session.asp.id
    const userData=[uno,dos];
    const sqlQuery= 'insert into interes (id_emp,id_asp) values (?,?)';
    

    try{
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