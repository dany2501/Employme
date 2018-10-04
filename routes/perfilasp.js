var express = require('express');
var router = express.Router();

router.route('/')
.get(function (req, res, next) {
    if (!req.session.usuario){
        console.log('No hay sesion');
        res.json("No hay sesion");
    } else {
        res.render('perfilasp');
    }
})

   
module.exports = router; 
