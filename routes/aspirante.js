var express = require('express');
var router = express.Router();
const asp=require('../controlador/aspirantes');
var GitHub = require('../controlador/GH');
var video = require('../controlador/video');
var interes=require('../controlador/interes'); 

var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{ 
        next();
    } 
}

router.get('/',noSesion,function(req,res,next){

asp.aspirantes(req,res);

});

router.put('/',noSesion,video.mostrarVideo);
// router.post('/', noSesion,GitHub.githubAsp);

router.post('/',noSesion,interes.interesado);



   
module.exports = router; 