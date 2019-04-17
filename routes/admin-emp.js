var express = require('express');
var router = express.Router();


var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }
    else{
            res.render('adm-emp');
}
}

router.get('/',noSesion,function(req,res,next){

    res.render("admin");

});

module.exports = router;