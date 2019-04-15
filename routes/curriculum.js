var express = require('express');
var router = express.Router();
var pdfCv=require('../controlador/pdfCv');


var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{ 
        var ds= req.session.usuario;
       
    } 
}
router.get('/',noSesion,function(req,res,next)
{
    console.log("En la ruta");
    pdfCv.showCv(req,res,next);
});
router.post('/',function(req,res,next)
{
    pdfCv.uploadCv(req,res,next);
});


module.exports = router; 