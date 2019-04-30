var con = require('../conexionsql/conexion');


var settings = {
  password: 'HECD010225HMCRRNA6'
}


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
            console.log(ruta);
          var result= con.consultaBd(sqlQuery,[ruta,ds.id]);
            res.redirect('/perfilasp');
          })
        } catch (err) {
          console.log(err);
          res.redirect("/login");
      }

  }
  
exports.mostrarFoto= async function (req, res, next) {
console.log(req.body.device);
console.log(req.body.id);        
    var ds= req.session.usuario;
    const query='select ruta_imga from imgaspirante where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)';
    const sqlQuery = "select AES_DECRYPT(ruta_cv,'" + [settings.password] + "') as ruta_cv from cv where id_pasp=(select id_pasp from perfilaspirante where id_asp=?)";
    
try {
  if(req.body.device=="Android")
  {
    var result3=await con.consultaBd(query,req.body.id);
    var f={"foto_asp":result3[0].ruta_imga}
    res.json(f)
  }
  else
  {
    var result3=await con.consultaBd(query,ds.id);
    var pdf=await con.consultaBd(sqlQuery,ds.id);
    console.log(pdf[0].ruta_cv);
    if (pdf[0].ruta_cv==null)
    {
      var resp={img:result3[0].ruta_imga}
    }
    else{
      var response = new Buffer.from(pdf[0].ruta_cv, 'hex');
      var resp={img:result3[0].ruta_imga,cv:response.toString()}
    }
    res.json(resp);
  }
      
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

exports.mostrarEmp= async function (req, res, next) {
        
  var ds= req.body.id;
  const query='select ruta_imge from imgempresa where id_pemp=(select id_pemp from perfilempresa where id_emp=?)';
  
try {
    var result3=await con.consultaBd(query,ds);
    res.json(result3);
  } catch (err) {
    console.log(err);
    res.redirect("/login");
}

}
  

