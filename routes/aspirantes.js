var express = require('express');
var router = express.Router();
var interes=require('../controlador/interes');
var noSesion = function(req, res, next){
    if (req.body.device=="Android")
    {
next();
    }
    else
    {

        if(!req.session.usuario){
            res.render('index');
        }else{ 
            next();
        } 
    }
}
router.get('/',noSesion, function(req,res,next){
    var respuesta= req.session.aspirantes;
    console.log(respuesta);
    var total=0;
    var x=1
    for (var i in respuesta) {
        total+=x;
    }
    console.log("Total: "+total);
    res.render('emp-aspirantes', {aspirantes:respuesta,total:total});
});

router.post('/',noSesion,interes.interesado);

router.get('/know',noSesion,function(req,res,next){

    interes.intereses(req,res,next);
});



   
module.exports = router; 
