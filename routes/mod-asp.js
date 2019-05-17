var express = require('express');
var router = express.Router();

var mod = require('../controlador/mod-asp');

var noSesion = function(req, res, next){
if(req.body.device=="Android")
{
next();
}
else
{
    if(!req.session.usuario){
        next();
    }else{
        res.redirect('/perfilasp');
    }
}
    }
    
    
    router.get('/',noSesion, function(req,res,next){
        res.render('index');
    })
    router.post('/',function(req,res,next){
        mod.modificarDatos(req, res, next);
    });

   
module.exports = router; 

