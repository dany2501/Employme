var express = require('express');
var router = express.Router();
var GitHub = require('../controlador/GH');
var video = require('../controlador/video');
var interes=require('../controlador/empInt');

var noSesion = function(req, res, next){
    if(!req.session.usuario){
        res.render('index');
    }else{ 
        

interes.interesados(req,res,next);
        next();
    } 
}


router.get('/',noSesion, function(req,res,next){
    var ds= req.session.usuario;
    res.render('asp-profile',{nombre:ds.nombre,email:ds.email,sex:ds.sex,f:ds.ruta,num:ds.numero,fn:ds.fn});
});

router.put('/',noSesion,video.seleccionarVideo);
router.post('/', noSesion,GitHub.github);



   
module.exports = router; 
