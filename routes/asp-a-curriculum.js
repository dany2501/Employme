var express = require('express');
var router = express.Router();
var add= require('../controlador/add-cv');

router.route('/')
    .get(function(req, res, next){
    	res.render('asp-curriculum',{nombre:ds.nombre,email:ds.email,sex:ds.sex,f:ds.ruta,num:ds.numero,fn:ds.fn});
    })
    .post(function(req,res,next){
    	add.addIdiomas(req, res, next);
    })
    .put(function(req,res,next){
        add.addProjects(req,res,next);
    });

router.post('/referencias',function(req,res,next){
    	add.addReferences(req, res, next);
});  

router.post('/software',function(req,res,next){
    add.addSoftware(req, res, next);
});  

module.exports = router; 