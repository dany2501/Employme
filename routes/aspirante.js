var express = require('express');
var router = express.Router();
const asp=require('../controlador/aspirantes');
var GitHub = require('../controlador/GH');
var video = require('../controlador/video');

var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{ 
        next();
    } 
}

router.get('/',noSesion,function(req,res,next){
    var obj=req.session.asp;
    console.log(obj);
     res.render('emp-aspirante',{id:obj.id,nombre:obj.nom,email:obj.email,sex:obj.sexo,f:obj.foto,edad:obj.edad,num:obj.num});
});

router.get('/:id',noSesion,function(req,res,next){

asp.aspirantes(req,res);

});

router.put('/',noSesion,video.mostrarVideo);
router.post('/', noSesion,GitHub.githubAsp);




   
module.exports = router; 