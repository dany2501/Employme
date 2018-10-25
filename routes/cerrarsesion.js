var express = require('express');
var router = express.Router();


router.route('/')
    .get(function (req, res, next) {
        if(!req.session.usuario){
            res.redirect('/index');
        }else{
            req.session.usuario = undefined;
            res.redirect('/index');
        }
        
    })


module.exports = router; 