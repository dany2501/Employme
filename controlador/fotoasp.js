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
        const sqlQuery='update imgaspirante set ruta_imga=? where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)';
        const sqlData=[ds.id];
try {
          subirArchivo(req).then((ruta) => {
          var result= con.consultaBd(sqlQuery,[ruta,ds.id]);
            res.redirect('/perfilasp');
          })
        } catch (err) {
          console.log(err);
          res.redirect("/login");
      }

  }

  exports.mostrarFoto= async function (req, res, next) {
        
    var ds= req.session.usuario;
    const query='select ruta_imga from imgaspirante where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)';
    
try {
      var result3=await con.consultaBd(query,ds.id);
      res.json(result3);
    } catch (err) {
      console.log(err);
      res.redirect("/login");
  }

}