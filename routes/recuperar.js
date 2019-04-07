var express = require('express');
var router = express.Router();
var recuperar = require ('../controlador/recuperar')

router.get('/', function(req,res,next){

next();
});

router.post('/',(req,res,next)=>{
    
    recuperar.recuperarAsp(req,res,next);

});

module.exports = router; 