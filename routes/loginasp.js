var express = require('express');
var router = express.Router();

var loginasp = require('../controlador/loginasp');

var noSesion = function(req, res, next){
    if(req.body.device="Android")
    {
        next()
    }
    else{
        if(!req.session.usuario){
            next();
        }else{
            res.redirect('/perfilasp');
        }
    }
}


router.get('/',noSesion, function(req,res,next){
    res.render('index');
})
router.post('/',function(req,res,next){
    loginasp.iniciarSesion(req, res, next);
});

module.exports = router;