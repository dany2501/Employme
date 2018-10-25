var express = require('express');
var router = express.Router();


var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{ 
        var ds= req.session.usuario;
        res.render('curriculum',{nombre:ds.nombre,email:ds.email,sex:ds.sex,f:ds.ruta,fn:ds.fn});
    } 
}

router.get('/',noSesion, function(req,res,next){
    res.render('index');
})


module.exports = router; 