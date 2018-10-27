
var con = require('../conexionsql/conexion');



    exports.registrarVideo = async function (req, res, next) 
    {
      var id=req.session.usuario;
        const userData=[req.body.link,id.id];
        const sqlQuery= 'update perfilaspirante set vyt_pasp=? where id_asp=?';

        try{
            var result= await con.consultaBd(sqlQuery,userData);
            res.redirect('/perfilasp');
   
       }catch(err)
       {
           console.log(err);
           res.json('Ocurrio un error al agregar el video');
       }
    }

    exports.seleccionarVideo= async function(req,res,next)
    {
        try{
        var id=req.session.usuario;
        if (id != null || id != undefined || id != "") {
            const userData=[id.id];
        const sqlQuery= 'select vyt_pasp from perfilaspirante where id_asp=?';
        
            var result= await con.consultaBd(sqlQuery,userData);
            var link=result[0].vyt_pasp;
            res.json(link);
        }
        else 
        {
            res.json('error');
        }
       }catch(err)
       {
           console.log(err);
           res.json('Ocurrio un error al consultar el video');
       }

        }
        



      