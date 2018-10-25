var express = require('express');
var router = express.Router();

var video = require('../controlador/video');

var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{
        res.redirect('/perfilasp');
    }
}
router.get('/',noSesion, function(req,res,next)
{
    res.render('index');
});

router.post('/', function (req, res, next) {
    video.registrarVideo(req,res,next);
});
module.exports = router; 