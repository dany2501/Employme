var con = require('../conexionsql/conexion');

exports.modificarDatos = async function (req, res, next) {

    console.log(req.body);

    var settings = {
        password: 'HECD010225HMCRRNA6'
    }

    if(req.body.device=="Android")
    {
    var userData=[req.body.correo,req.body.numero,req.body.id];
    var sqlQuery= 'update datosaspirante set email_asp=?,numtel_asp=? where id_asp=?';
    }
    else{
        var u=req.session.usuario;
        var userData=[req.body.correo,req.body.numero,u.id];
        var validate="select email_asp,numtel_asp,psw_asp where id_asp=?"
        var sqlQuery= 'update datosaspirante set email_asp=?,numtel_asp=? where id_asp=?';
    }

    var data= await con.consultaBd(validate,req.body.id);

    if(data[0].email_asp==req.body.correo && data[0].numtel_asp==numero)
    {
        console.log("Iguales")
    }
    else
    {
        const Query = "select (AES_DECRYPT(usu_asp,'" + settings.password + "')) as usu_asp,email_asp,numtel_asp from datosaspirante;";
        var asp = await con.consultaBd(Query);
        var flag = false;
    
    
        
            for (var i in asp) {
                if (asp[i].email_asp == req.body.correo || asp[i].email_asp == req.body.email || asp[i].numtel_asp ==req.body.numero ) {
                    flag = true;
                }
            }
    
            if(flag==true)
            {
                res.json("No se pudo actualizar ya que alguno de los datos ya ha sido registrado por otro usuario")
            }
    
            else
            {
                try{
    
                    var result= await con.consultaBd(sqlQuery,userData);
                    if(req.body.device=="Android")
                    {
                       res.json("Actualizado");
                    }
                    else{
           
                       res.redirect('/perfilasp');
                    }
           
               }catch(err)
               {
                   console.log(err);
                   res.json('Ocurrio un error al registrarse');
               }
            }
    }
    

    

    
}