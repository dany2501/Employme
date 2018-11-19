var express = require('express');
var router = express.Router();

var registrar_empresa = require('../controlador/regemp');

router.route('/')
    .get(function(req, res, next){
    	res.render('index');
    });
    
router.post('/registroE',function(req,res,next){
    	registrar_empresa.registrarEmpresa(req, res, next);
    });
   
module.exports = router; 
