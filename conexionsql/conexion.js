var mysql = require('mysql');
var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'n0m3l0',
    database:'employme'
});



var userModel={};

userModel.getAspirantes = function(){
    return new Promise(function(resolve, reject){
        consultas('SELECT * FROM datosaspirante')
            .then((respuesta)=>{
                resolve(respuesta);
            })
            .catch((error)=>{
                reject(error);
            });
    });
}

userModel.consultaBd=function (sentence, data) {
    return new Promise(function (resolve, reject) {
  
      connection.getConnection(function (err, conn) {
        if (err) {
          return reject(err);
        }
  
        conn.query(sentence, data, function (err, result) {
          conn.release();
          if (err) return reject(err);
  
          resolve(result);
        });
      });
  
    });
  }

//Algo descente xd

 var consultas =  function(sentencia, datos){
     return new Promise(function(resolve, reject){
        connection.getConnection(function(error, conn){
            if (error){
                return reject(error);
            }

            conn.query(sentencia, datos, (err, respuesta)=>{
                conn.release();

                if (err){
                    return reject(error);
                }

                resolve(respuesta);
            })
        })
     });
 }





 module.exports=userModel;