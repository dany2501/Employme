var express = require('express');
var router = express.Router();
var pdfCv=require('../controlador/pdfCv');


var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{ 
       /* var ds= req.session.usuario;
        res.render('curriculum',{nombre:ds.nombre,email:ds.email,sex:ds.sex,f:ds.ruta,fn:ds.fn});*/
        next();
    } 
}
router.get('/showCv',noSesion,function(req,res,next){
    pdfCv.showCv(req,res,next);
});
router.post('/',noSesion,function(req,res,next){
    pdfCv.uploadCv(req,res,next);
});


module.exports = router; 