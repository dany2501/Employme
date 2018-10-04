var express = require('express');
var router = express.Router();

var loginemp = require('../controlador/loginemp');

router.route('/')
.get(function (req, res, next) {
    if (!req.session.usuario){
        res.json("No hay sesion");
    } else {
        res.redirect('index');
    }
})
    .post(function(req,res,next){
    	loginemp.iniciarSesion(req, res, next);
    })

   
module.exports = router; 
