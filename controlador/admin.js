var db = require('../conexionsql/conexion');
var moment = require('moment');
moment.locale('es');

var settings = {
    password: 'HECD010225HMCRRNA6'
}

exports.loginAdmin = async function (req, res, next) {

    try{

        var datos = [req.body.email,req.body.password];
        var sqlQuery ="select AES_DECRYPT(email_adm,'" + settings.password + "') as email_adm, AES_DECRYPT(psw_adm,'" + settings.password + "') as psw_adm from admin where email_adm= AES_ENCRYPT(?,'" + [settings.password] + "') and psw_adm =AES_ENCRYPT(?,'" + [settings.password] + "')" 
    
        var result = await db.consultaBd(sqlQuery, datos);
        if (req.body.email == result[0].email_adm  && req.body.password == result[0].psw_adm) {

            var e = new Buffer.from(result[0].email_adm, 'hex');
            var email=e.toString();

            var p = new Buffer.from(result[0].psw_adm, 'hex');
            var password=p.toString();

            var obj =
                {
                    email:email,
                    psw:password
                }
                
            req.session.usuario = obj;
            res.redirect('/admin');
        } else if (result[0].email_adm == undefined || result[0].psw_adm== undefined) {
            res.json('Datos incorrectos')
        }
    } catch (err) {
        console.log(err);
        res.redirect("/index");
    }
}

exports.aspirantes = async function (req,res,next)
{
    try {
        
        const Query = "select id_pasp,id_asp,numtel_asp,ruta_imga,nom_asp,apt_asp,apm_asp,FN_asp,sex_asp,email_asp from imgaspirante natural join perfilaspirante natural join datosaspirante";
        var asp=await db.consultaBd(Query);
        res.json(asp);
    }
    catch(err)
    {
        console.log(err);
    }
}


exports.showAspirante = async function(req,res,next)
{
    var id=req.params.id;
    
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
                             var obj={type:"asp",id:id,nom:nombre,email:result[0].email_asp,sexo:result[0].sex_asp,foto:result[0].ruta_imga,edad:edad,num:result[0].numtel_asp,cv:routecv}
                            req.session.asp=obj;
                        }
                    }else
                    {
                        var edad=(fecha.getFullYear())-(array[3]);
                        var obj={type:"asp",id:id,nom:nombre,email:result[0].email_asp,sexo:result[0].sex_asp,foto:result[0].ruta_imga,edad:edad,num:result[0].numtel_asp,cv:routecv}
                        req.session.asp=obj;
                    }
                    res.redirect('/render');
                }catch (err) {
                    console.log(err);
                    res.json('Ocurrió un error');
                }

            
        }
        
      
    }

validarSiNumero(id)

}

exports.deleteAspirante = async function(req,res,next)
{
    var id = req.params.id

    try
    {
        const sqlQuery="delete from datosaspirante where id_asp=?"
        var result = await db.consultaBd(sqlQuery,id);
        res.redirect('/admin');
    }

    catch(err)
    {console.log(err);}
    

}


exports.empresas = async function (req,res,next)
{
    try {
        
        const Query = "select id_emp,id_pemp,ruta_imge,email_emp,nom_emp,numtel_pemp from imgempresa natural join perfilempresa natural join datosempresa";
        var emp=await db.consultaBd(Query);
        res.json(emp);
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.showEmpresa = async function (req,res,next)
{
    var id = req.params.id;

    const sqlQuery="select * from imgempresa natural join perfilempresa natural join datosempresa;"

    try {

        var result = await db.consultaBd(sqlQuery,id);

        var obj = {

                nombre:result[0].nom_emp,
                email:result[0].email_emp,
                foto:result[0].ruta_imge,
                desc:result[0].des_emp,
                type:"emp"

                  }

                  req.session.asp=obj;

        res.redirect('/render');


    }
    catch (err)
    {console.log(err);}

}