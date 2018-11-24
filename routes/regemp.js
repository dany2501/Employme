var express = require('express');
var router = express.Router();

var registrar_empresa = require('../controlador/regemp');

router.route('/')
    .get(function(req, res, next){
        res.render('index');
        console.log("Aquí");
    });
    
router.post('/',function(req,res,next){
    console.log("Ahora aquí");
    	registrar_empresa.registrarEmpresa(req, res, next);
    });
   
module.exports = router; 