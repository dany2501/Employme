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

router.get('/showSoft',function(req,res,next){
    add.showSoftware(req, res, next);
}); 

router.get('/showRef',function(req,res,next){
    add.showReferences(req, res, next);
}); 

router.get('/showProj',function(req,res,next){
    add.showProjects(req, res, next);
}); 

router.get('/showLeng',function(req,res,next){
    add.showLenguages(req, res, next);
});
router.get('/showDU',function(req,res,next){
    add.showDesUbi(req, res, next);
});

module.exports = router; 