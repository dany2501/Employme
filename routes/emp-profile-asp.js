var express = require('express');
var router = express.Router();
var emp=require('../controlador/empresa')

var noSesion = function(req, res, next){
    if(!req.session.usuario){
        res.redirect('/');
    }else{ 
        next();
}
}

router.get('/',noSesion, function(req,res,next){
    var r=req.session.emp;
    res.render('emprofile',{nombre:r.nom,id:r.id,des:r.des,num:r.num,site:r.site,em:r.email,ubi:r.ubi});
});

router.post('/show',noSesion,function(req,res,next){
    console.log(req.body.id)
    emp.photoEmp(req,res,next);
});



router.get('/:id',noSesion,function(req,res,next){
        emp.empresa(req,res,next);
        
        });



   
module.exports = router; 
