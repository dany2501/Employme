var express = require('express');
var router = express.Router();

var noSesion = function(req, res, next){
    if(!req.session.admin){
        next();
    }else{
next();
    }
}


router.get('/',noSesion,function(req,res,next){
     var obj=req.session.asp;

     if(obj.type=="asp")
     {
        res.render('adm-aspirante',{id:obj.id,nombre:obj.nom,email:obj.email,sex:obj.sexo,f:obj.foto,edad:obj.edad,num:obj.num,cv:obj.cv});

     }

     else 
     {
         res.render('adm-company',{foto:obj.foto,nombre:obj.nombre,des:obj.des,email:obj.email})
     }
});

module.exports = router;