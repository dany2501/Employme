var con = require('../conexionsql/conexion');

    async function subirArchivo(req) 
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

    async function subirArchivoEmp(req) 
    {
        return new Promise(function (resolve, reject) {
        let EDFile = req.files.file;
        EDFile.mv(`./public/fotosemp/${EDFile.name}`, err => 
        {
  
        if (err) reject();
        resolve(`fotosemp/${EDFile.name}`);

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
      console.log(result3);
      res.json(result3);
    } catch (err) {
      console.log(err);
      res.redirect("/login");
  }

}



  exports.subirFotoEmp= async function (req, res, next) {
        
    var ds= req.session.usuario;
    const sqlQuery='update imgempresa set ruta_imge=? where id_pemp=(select id_pemp from perfilempresa where id_emp=?)';
try {
      subirArchivoEmp(req).then((ruta) => {
        console.log(ruta);
      var result= con.consultaBd(sqlQuery,[ruta,ds.id]);
        res.redirect('/emp-profile');
      })
    } catch (err) {
      console.log(err);
      res.redirect("/login");
  }

}



exports.mostrarFotoEmp= async function (req, res, next) {
        
  var ds= req.session.usuario;
  const query='select ruta_imge from imgempresa where id_pemp=(select id_pemp from perfilempresa where id_emp=?)';
  
try {
    var result3=await con.consultaBd(query,ds.id);
    res.json(result3);
  } catch (err) {
    console.log(err);
    res.redirect("/login");
}

}
  

