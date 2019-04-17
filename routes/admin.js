var express = require('express');
var router = express.Router();
var admin = require("../controlador/admin");


var noSesion = function(req, res, next){
    if(!req.session.usuario){
        next();
    }else{
            res.render('adm-asp');
}

}

router.get('/',noSesion,function(req,res,next){

    res.render("admin");

});


router.post("/",function(req,res,next){
    admin.loginAdmin(req,res,next);
});


router.get('/asp',function(req,res,next){
    
    admin.aspirantes(req,res,next);

});

router.get('/emp',function(req,res,next){
    
    admin.empresas(req,res,next);

});

router.get('/empresa/:id',function(req,res,next){
    
    admin.showEmpresa(req,res,next);

});



router.get('/aspirante/:id',function(req,res,next){
    
    admin.showAspirante(req,res,next);

});

router.get('/delete/:id',function(req,res,next){
    
    admin.deleteAspirante(req,res,next);

});



module.exports = router; 