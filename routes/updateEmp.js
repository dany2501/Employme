var express = require('express');
var router = express.Router();

var update_empresa = require('../controlador/updateEmp');

router.route('/')
    .get(function(req, res, next){
        res.render('index');
        console.log("Aquí");
    });
    
router.post('/',function(req,res,next){
    console.log("Ahora aquí");
    	update_empresa.update(req, res, next);
    });
   
module.exports = router; 