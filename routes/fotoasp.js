var express = require('express');
var router = express.Router();

var fotoasp = require('../controlador/fotoasp');

/*var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{
        res.redirect('/perfilasp');
    }
}*/

router.get('/',/*noSesion,*/ function(req,res,next){
    res.render('index');
    
    pdfCv.showCv(req,res,next);
});

router.get('/show',/*noSesion,*/ function(req,res,next){
    console.log("En la ruta");
});

router.post('/', function (req, res, next) {
    fotoasp.subirFoto(req,res,next);
});

router.put('/', function (req, res, next) {
    fotoasp.mostrarFoto(req,res,next);
});

router.get('/foto', function (req, res, next) {
    fotoasp.mostrarFoto(req,res,next);
});

router.post('/uploadPhoto',function(req,res,next){
console.log(req.files.foto);    
fotoasp.uploadAndroid(req,res,next);
});
module.exports = router; 
