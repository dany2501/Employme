var express = require('express');
var router = express.Router();
var GitHub = require('../controlador/GH');
var video = require('../controlador/video');
var noSesion = function(req, res, next){
    if(!req.session.usuario){
        res.render('index');
    }else{ 
        next();
    } 
}


router.get('/',noSesion, function(req,res,next){
    var ds= req.session.usuario;
    res.render('perfilasp',{nombre:ds.nombre,email:ds.email,sex:ds.sex,f:ds.ruta,fn:ds.fn});
})
router.put('/',noSesion,video.seleccionarVideo);
router.post('/', noSesion,GitHub.github);



   
module.exports = router; 
