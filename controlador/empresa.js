var db = require('../conexionsql/conexion');

exports.empresa = async function (req, res, next) {
    var id=req.params.id;
    
    async function validarSiNumero(numero){
        if (!/^([0-9])*$/.test(numero))
        {
            res.redirect('/error');
        }
        else
        {
            try {
                const Query = "select id_emp,nom_emp,des_emp,ubi_pemp,numtel_pemp,sitio_pemp,email_emp from perfilempresa natural join datosempresa where id_emp=?";
               
                var result=await db.consultaBd(Query,id);
                var data={id:result[0].id_emp,nom:result[0].nom_emp,des:result[0].des_emp,ubi:result[0].ubi_pemp,num:result[0].numtel_pemp,site:result[0].sitio_pemp,email:result[0].email_emp}
                console.log("En consulta");
                req.session.emp=data;
                res.redirect('/empresa');

                    
                }catch (err) {
                    console.log(err);
                    res.json('Ocurrió un error');
                }

            
        }
        
      
    }

validarSiNumero(id)


exports.photoEmp = async function(req,res,next)
{
       

    try {
        const Query = 'select ruta_imge from imgempresa where id_pemp=(select id_pemp from perfilempresa where id_emp=?)';
        var id=req.body.id;
        var result=await db.consultaBd(Query,id);
        res.json(result);

            
        }catch (err) {
            console.log(err);
            res.json('Ocurrió un error');
        }




}



        


}