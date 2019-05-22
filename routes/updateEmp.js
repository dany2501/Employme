var express = require('express');
var router = express.Router();

var update_empresa = require('../controlador/updateEmp');

router.route('/')
    .get(function(req, res, next){
        res.render('index');
    });
    
router.put('/',function(req,res,next){
    	update_empresa.update(req, res, next);
    });

router.get('/show',function(req,res,next){
        update_empresa.show(req, res, next);
    });

router.post("/show",function(req,res,next){
        update_empresa.showAndroid(req,res,next);
    });

router.put('/add',function(req,res,next){
    update_empresa.addDes(req, res, next);
});

        
   
module.exports = router; 