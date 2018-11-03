var express = require('express');
var router = express.Router();
var interes=require('../controlador/interes');
var noSesion = function(req, res, next){
    if(!req.session.usuario){
        res.render('index');
    }else{ 
        next();
    } 
}
router.get('/',noSesion, function(req,res,next){
    var respuesta= req.session.aspirantes;
    res.render('aspirantes', {aspirantes:respuesta});
});

router.post('/',noSesion,interes.interesado);



   
module.exports = router; 
