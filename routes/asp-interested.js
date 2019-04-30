var express = require('express');
var router = express.Router();

var interes = require('../controlador/interes');

var noSesion = function (req, res, next) {
    if(req.body.device=="Android")
    {
next()
    }
    else{

        if (!req.session.usuario) {
            next();
            console.log("No hay sesión");
        } else {
    
            next()
    
        }
    }
}

router.get('/', noSesion, function (req, res, next) {
    res.render('asp-interested');
});

router.post("/",noSesion,function(req,res,next){
    interes.interesados(req, res, next);
});

module.exports = router; 