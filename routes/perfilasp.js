var express = require('express');
var router = express.Router();
var GitHub = require('../controlador/GH');
var video = require('../controlador/video');
var interes=require('../controlador/empInt');

var noSesion = function(req, res, next){
<<<<<<< HEAD
    if(req.body.device=="Android")
=======
if(req.body.device=="Android")
>>>>>>> 59f5dbc699fe55795c8f578ae43c3dc6a1939225

    {
        next();
    }else
    {

        if(!req.session.usuario){
            res.redirect('/');
        }else{
    
            
            next();
        }
    }
}


router.get('/',noSesion, function(req,res,next){
    
    var ds= req.session.usuario;
    console.log(ds.nombre);
    res.render('asp-profile',{nombre:ds.nombre,email:ds.email,sex:ds.sex,f:ds.ruta,fn:ds.fn,num:ds.num});
});

router.put('/',noSesion,video.seleccionarVideo);
router.post('/', noSesion,GitHub.github);
router.get('/user',noSesion,GitHub.user);




module.exports = router;
