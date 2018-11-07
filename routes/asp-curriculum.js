var express = require('express');
var router = express.Router();
var add= require('../controlador/add-cv');

router.route('/')
    .get(function(req, res, next){
        var ds=req.session.usuario;
    	res.render('asp-curriculum',{nombre:ds.nombre,email:ds.email,sex:ds.sex,f:ds.ruta,num:ds.numero,fn:ds.fn});
    })
    .post(function(req,res,next){
    	add.add(req, res, next);
    })
   
module.exports = router; 