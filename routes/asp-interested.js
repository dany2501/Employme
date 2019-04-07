var express = require('express');
var router = express.Router();

var interes = require('../controlador/interes');

var noSesion = function (req, res, next) {
    if (!req.session.usuario) {
        next();
        console.log("No hay sesión");
    } else {

        interes.interesados(req, res, next);
        next();

    }
}

router.get('/', noSesion, function (req, res, next) {
    var ds = req.session.empresas;
    res.render('asp-interested', { empresas: ds });
});

module.exports = router; 