var express = require('express');
var router = express.Router();

var loginasp = require('../controlador/loginasp');

var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{
        res.redirect('/perfilasp');
    } // se apendeja la memoria y la tengo que volver a poner xd
    //guardalo xd
}

router.get('/',noSesion, function(){
    res.render('index');
})
router.post('/',function(){
    loginasp.iniciarSesion(req, res, next);
});

/*a ver wee, no puedes hacer un render de una vista en un controlador, todas las vistas se tienen que poner en las rutas, por eso se usa ewl middleware para ver si si tienes la sesion, entonces estoy que peto
estas haciendo mamadas xdxd :'(
    por eso xd entonces que pedo?
    
a ver */

module.exports = router;

//guardalo y pruebalo xd