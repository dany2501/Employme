var express = require('express');
var router = express.Router();


var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{ 
        req.session.usuario;
        res.render('especiality');
    } 
}

router.get('/',noSesion, function(req,res,next){
    res.render('index');
})


module.exports = router; 