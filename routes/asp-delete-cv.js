var express = require('express');
var router = express.Router();
var add = require('../controlador/add-cv');

router.get('/lenguaje/:id', function (req, res, next) {
    add.deleteIdioma(req, res, next);
});

router.get('/software/:id', function (req, res, next) {
    add.deleteSoftware(req, res, next);
});

router.get('/referencia/:id', function (req, res, next) {
    add.deleteReferencia(req, res, next);
});

router.get('/proyecto/:id', function (req, res, next) {
    add.deleteProyecto(req, res, next);
});


module.exports = router; 