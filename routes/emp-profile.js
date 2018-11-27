var express = require('express');
var router = express.Router();
var pic=require('../controlador/empresa')

var noSesion = function(req, res, next){
    if(!req.session.usuario){
        res.redirect('/');
    }else{ 
        next();
}
}


router.get('/',noSesion, function(req,res,next){
    var d=req.session.usuario;
    res.render('emp-profile',{nombre:d.nom});
});




   
module.exports = router; 
