var express = require('express');
var router = express.Router();
const porta=require('../controlador/portafolio');

var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{ 
        var ds= req.session.usuario;
        res.render('portafolio',{email:ds.email,sex:ds.sex,f:ds.ruta,fn:ds.fn});
    } 
}

router.get('/',noSesion, function(req,res,next){
    res.render('index');
});

router.post('/',function(req,res,next){
    porta.agregarGH(req, res, next);
});

   
module.exports = router; 