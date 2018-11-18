    var express = require('express');
    var router = express.Router();

    var registrar_aspirante = require('../controlador/regasp');

    router.route('/')
        .get(function(req, res, next){
            res.render('index');
        });
        

    router.post('/registro',function(req,res,next){
    registrar_aspirante.registrarAspirante(req, res, next);
    });      
    
    module.exports = router; 
