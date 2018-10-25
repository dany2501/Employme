var con = require('../conexionsql/conexion');

    function subirArchivo(req) 
    {
        return new Promise(function (resolve, reject) {
        let EDFile = req.files.file;
        EDFile.mv(`./public/fotosasp/${EDFile.name}`, err => 
        {
  
        if (err) reject();
        resolve(`fotosasp/${EDFile.name}`);

        })
       });

    }

    exports.subirFoto= async function (req, res, next) {
        
        var ds= req.session.usuario;
        const query= 'select id_pasp from perfilaspirante where id_asp=?';
        const sqlQuery='update imgaspirante set ruta_imga=? where id_pasp=?';
        const sqlData=[req.session.usuario.id];
try {
          var id= await con.consultaBd(query,sqlData);
          subirArchivo(req).then((ruta) => {
          var result= con.consultaBd(sqlQuery,[ruta,id[0].id_pasp]);
            res.redirect('/perfilasp');
          })
        } catch (err) {
          console.log(err);
          res.redirect("/login");
      }

  }