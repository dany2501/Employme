var db= require('../conexionsql/conexion');

var settings = {
    password: 'HECD010225HMCRRNA6'}

    function subirArchivo(req) 
    {
        return new Promise(function (resolve, reject) {
        let EDFile = req.files.pdf;
        console.log(req.files.pdf.type);
        EDFile.mv(`./public/uploads/${EDFile.name}`, err => 
        {
  
        if (err) reject();
        resolve(`uploads/${EDFile.name}`);
        console.log(EDFile.name);

        })
       });

    }

exports.uploadCv = async function(req,res,next)
{
    var session=req.session.usuario;


        const sqlQuery="update cv set ruta_cv=AES_ENCRYPT(?,'"+[settings.password]+"') where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";       
try {
          subirArchivo(req).then((ruta) => {
        db.consultaBd(sqlQuery,[ruta,session.id]);
            res.redirect('/perfilasp');
          })
        } catch (err) {
          console.log(err);
          res.redirect("/login");
      }

    }

exports.showCv = async function(req,res,next)
{
    var session=req.session.usuario;


        const sqlQuery="select AES_DECRYPT(ruta_cv,'"+[settings.password]+"') as ruta_cv from cv where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";       
try {
        
        var result=await db.consultaBd(sqlQuery,session.id);
        console.log(result);
        if(result[0].ruta_cv==null)
        {

        }
        else
        {
        var response=new Buffer.from(result[0].ruta_cv,'hex');
        res.json(response.toString());
    }
        } catch (err) {
          console.log(err);
      }

    }
