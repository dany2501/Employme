
var con = require('../conexionsql/conexion');



    exports.registrarVideo = async function (req, res, next) 
    {
      var id=req.session.usuario;
        const userData=[req.body.video,id.id];
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
        if(req.body.device=="Android")
        {
            var id=req.body.id
        }
        else
        {
            var s=req.session.usuario
            var id=s.id;
        }
        try{
        if (id != null || id != undefined || id != "") {
            const userData=[id];
        const sqlQuery= 'select vyt_pasp from perfilaspirante where id_asp=?';
        
            var result= await con.consultaBd(sqlQuery,userData);
            var link=result[0].vyt_pasp;
            if(req.body.device=="Android")
            {
                var obj={"vyt_pasp":link}
                res.json(obj);
            }
            else 
            {
                res.json(link);
            }
            
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
<<<<<<< HEAD

=======
>>>>>>> 59f5dbc699fe55795c8f578ae43c3dc6a1939225

        exports.mostrarVideo= async function(req,res,next)
    {
        try{
        
            var d = req.session.asp;
            const userData=[d.id];
        const sqlQuery= 'select vyt_pasp from perfilaspirante where id_asp=?';
        
            var result= await con.consultaBd(sqlQuery,userData);
            var link=result[0].vyt_pasp;
            res.json(link);
       }catch(err)
       {
           console.log(err);
           res.json('Ocurrio un error al consultar el video');
       }

        }
        



      
