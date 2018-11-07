var db = require('../conexionsql/conexion');

exports.aspirantes = async function (req, res, next) {
    var id=req.query.id;
    try {
    const Query = "select id_pasp,id_asp,ruta_imga,nom_asp,apt_asp,apm_asp,FN_asp,sex_asp,email_asp from imgaspirante natural join perfilaspirante natural join datosaspirante where id_asp= ?";
    const f= 'select DATE_FORMAT((select FN_asp from datosaspirante where id_asp=?)," %d %M %Y ") as fecha;';
    var result=await db.consultaBd(Query,id);

    var fec=await db.consultaBd(f,id);
    var bd=fec[0].fecha;
        var nombre=result[0].nom_asp+" "+result[0].apt_asp+" "+result[0].apm_asp;
        var obj={id:id,nom:nombre,email:result[0].email_asp,sexo:result[0].sex_asp,foto:result[0].ruta_imga}
        req.session.asp=obj;
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
            }
        }else
        {
            var edad=(fecha.getFullYear())-(array[3]);
        }
        res.render('emp-aspirante',{id:obj.id,nombre:obj.nom,email:obj.email,sex:obj.sexo,f:obj.foto,edad:edad})
    
    /*var result=await db.consultaBd(Query,id).then((respuesta)=>{
        
        var fec=await db.consultaBd(f,respuesta[0].id_asp);
        var nombre=respuesta[0].nom_asp+" "+respuesta[0].apt_asp+" "+respuesta[0].apm_asp;
        var obj={id:id,nom:nombre,email:respuesta[0].email_asp,sexo:respuesta[0].sex_asp,foto:respuesta[0].ruta_imga}
        req.session.asp=obj;
        var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        var f=new Date();
        console.log(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
        res.render('aspirante',{nombre:obj.nom,email:obj.email,sex:obj.sexo,f:obj.foto})
        
    });*/
    }catch (err) {
        console.log(err);
        res.json('Ocurrió un error');
    }


}