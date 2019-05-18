var db = require('../conexionsql/conexion');
var settings = {
    password: 'HECD010225HMCRRNA6'
}
var moment = require('moment');
moment.locale('es');

exports.aspirantes = async function (req, res, next) {
    var id=req.params.id;
    
    async function validarSiNumero(numero){
        if (!/^([0-9])*$/.test(numero))
        {
            res.redirect('/error');
        }
        else
        {
            try {
                const Query = "select id_pasp,id_asp,ruta_imga,numtel_asp,nom_asp,FN_asp,sex_asp,email_asp, AES_DECRYPT(ruta_cv,'" + [settings.password] + "') as ruta_cv  from imgaspirante natural join cv natural join perfilaspirante natural join datosaspirante where id_asp= ?";
                const f= 'select DATE_FORMAT((select FN_asp from datosaspirante where id_asp=?)," %d %M %Y ") as fecha;';
                var result=await db.consultaBd(Query,id);
                var total;
                var routecv;
                if(result[0].ruta_cv==null)
                {
                    routecv="null";
                }
               
                else
                {
                    var response = new Buffer.from(result[0].ruta_cv, 'hex');
                    routecv=response.toString();
                }
                var fec=await db.consultaBd(f,id);
                var bd=fec[0].fecha;
                    var nombre=result[0].nom_asp
                    
                    var meses = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
                    var fecha=new Date();
                    var array = new Array();
                    array = bd.split(' ');
                    var newDate = (array[1] + "-" + array[2] + "-" + array[3]);
                    if((meses[fecha.getMonth()])==(array[2]))
                    {
                        if((fecha.getDay()==(array[1])))
                        {
                            var edad=(fecha.getFullYear())-(array[3]+1);
                        }else
                        {
                             var edad=(fecha.getFullYear())-(array[3]);
                             var obj={id:id,nom:nombre,email:result[0].email_asp,sexo:result[0].sex_asp,foto:result[0].ruta_imga,edad:edad,num:result[0].numtel_asp,cv:routecv}
                            req.session.asp=obj;
                        }
                    }else
                    {
                        var edad=(fecha.getFullYear())-(array[3]);
                        var obj={id:id,nom:nombre,email:result[0].email_asp,sexo:result[0].sex_asp,foto:result[0].ruta_imga,edad:edad,num:result[0].numtel_asp,cv:routecv}
                        req.session.asp=obj;
                    }
                    res.redirect('/aspirante');
                }catch (err) {
                    console.log(err);
                    res.json('Ocurrió un error');
                }

            
        }
        
      
    }

validarSiNumero(id)
}

exports.deleteAspirante = async function (req,res,next)
{

    var id = req.params.id;

    try {

        var sqlQuery="delete from datosaspirante where id_asp=var id=req.params.id";
    
        async function validarSiNumero(numero){
            if (!/^([0-9])*$/.test(numero))
            {
                res.redirect('/error');
            }
            else
            {
                try {
                    const Query = "select id_pasp,id_asp,ruta_imga,numtel_asp,nom_asp,apt_asp,apm_asp,FN_asp,sex_asp,email_asp, AES_DECRYPT(ruta_cv,'" + [settings.password] + "') as ruta_cv  from imgaspirante natural join cv natural join perfilaspirante natural join datosaspirante where id_asp= ?";
                    const f= 'select DATE_FORMAT((select FN_asp from datosaspirante where id_asp=?)," %d %M %Y ") as fecha;';
                    var result=await db.consultaBd(Query,id);
                    var total;
                    var routecv;
                    if(result[0].ruta_cv==null)
                    {
                        routecv="null";
                    }
                   
                    else
                    {
                        var response = new Buffer.from(result[0].ruta_cv, 'hex');
                        routecv=response.toString();
                    }
                    var fec=await db.consultaBd(f,id);
                    var bd=fec[0].fecha;
                        var nombre=result[0].nom_asp+" "+result[0].apt_asp+" "+result[0].apm_asp;
                        
                        var meses = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
                        var fecha=new Date();
                        var array = new Array();
                        array = bd.split(' ');
                        var newDate = (array[1] + "-" + array[2] + "-" + array[3]);
                        if((meses[fecha.getMonth()])==(array[2]))
                        {
                            if((fecha.getDay()==(array[1])))
                            {
                                var edad=(fecha.getFullYear())-(array[3]+1);
                            }else
                            {
                                 var edad=(fecha.getFullYear())-(array[3]);
                                 var obj={id:id,nom:nombre,email:result[0].email_asp,sexo:result[0].sex_asp,foto:result[0].ruta_imga,edad:edad,num:result[0].numtel_asp,cv:routecv}
                                req.session.asp=obj;
                            }
                        }else
                        {
                            var edad=(fecha.getFullYear())-(array[3]);
                            var obj={id:id,nom:nombre,email:result[0].email_asp,sexo:result[0].sex_asp,foto:result[0].ruta_imga,edad:edad,num:result[0].numtel_asp,cv:routecv}
                            req.session.asp=obj;
                        }
                        res.redirect('/aspirante');
                    }catch (err) {
                        console.log(err);
                        res.json('Ocurrió un error');
                    }
    
                
            }
            
          
        }
    
    validarSiNumero(id)

    }
    catch (err)
    {console.log(err)}

}
<<<<<<< HEAD

exports.getAspirantes = async function (req,res,next)
{

    const Query = "select id_pasp,id_asp,ruta_imga,nom_asp,FN_asp,sex_asp,email_asp from imgaspirante natural join perfilaspirante natural join datosaspirante";
    try{
        
    var asp=await db.consultaBd(Query);
    var asps = {};
             
             for (var i=0;i<asp.length;i++)
=======
exports.getAspirantes = async function (req,res,next)
{

    const Query = "select id_pasp,id_asp,ruta_imga,nom_asp,FN_asp,sex_asp,email_asp,vyt_pasp from imgaspirante natural join perfilaspirante natural join datosaspirante";
    try{
        
    var obj=await db.consultaBd(Query);
    var asps = [];
             
             for (var i=0;i<obj.length;i++)
>>>>>>> da855c086b0fba65ffd57624efd00a6b3401e542
             {
                asps[i]={"nom_asp":obj[i].nom_asp,
                         "email_asp":obj[i].email_asp,
                         "id_asp":obj[i].id_asp,
                         "foto_asp":obj[i].ruta_imga,
<<<<<<< HEAD
                         "fn_asp":obj[i].FN_asp,
                         }
             }
             console.log(asps)
             var result = {asps} 
             res.json(result);
=======
                         "fn_asp":moment().diff(obj[i].FN_asp, 'years'),
                         "vyt_pasp":obj[i].vyt_pasp
                         }
             }
             console.log(asps);
             res.json(asps);
>>>>>>> da855c086b0fba65ffd57624efd00a6b3401e542

    }
    catch(err)
    {
        console.log(err);
    }
}
