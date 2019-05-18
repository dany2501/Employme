var db = require('../conexionsql/conexion');
var requests = require('request');

exports.user = async function (req, res, next) {
    try {
        var d = req.session.usuario;
        if (d != null || d != undefined || d != "") {
            var sqlQuery = 'select usugh_pasp from perfilaspirante where id_asp=?';
            var sqlData = [d.id];
            var git_hub = await db.consultaBd(sqlQuery, sqlData);
            res.json(git_hub[0].usugh_pasp);
        }
        else {
            res.json('error');
        }
    }
    catch (err) {
        console.log(err);
        res.json("Ocurrio un error");
    }
}

exports.github = async function (req, res, next) {
 try {

        if(req.body.device=="Android")
        {

            var d = req.body.id;
        }
        else
        {
            var session=req.session.usuario;
            var d =session.id;
        }

        if (d != null || d != undefined || d != "") {
            var sqlQuery = 'select usugh_pasp from perfilaspirante where id_asp=?';
            var sqlData = [d];
            var git_hub = await db.consultaBd(sqlQuery, sqlData);
            const clientId = "1ddb6bf4ad54c50f900a";
            const clientSecret = "4ac9fe6ec91fbbe36e57f68cfbf444361e884483";
            const repos = 5;
            const repos_sort = 'created:%20asc';
            var user = git_hub[0].usugh_pasp;
	console.log(user);
            if (user == null) {
                res.json('Ocurrió un error');

            }
            else {
                var url = `https://api.github.com/users/${user}/repos?per_page=${repos}&sort=${repos_sort}&client_id=${clientId}&client_secret=${clientSecret}`;
                const headers = { 'User-Agent': 'dany2501' };

                requests({ url: url, headers: headers, json: true }, (error, response, body) => {
                    if (error) {
                        res.json('error');
                    } else {
                        res.json(body);
                    }
                });
            }
        } else {
            res.json('error');
        }

    } catch (err) {
        console.log(err);
    }

}

exports.githubAsp = async function (req, res, next) {
    try {

        if(req.body.device=="Android")
        {

            var d = req.body.id;
        }
        else
        {
            var session=req.session.aspirantes;
            var d = req.session.id;
        }
        var sqlQuery = 'select usugh_pasp from perfilaspirante where id_asp=?';
        var sqlData = [d];
        var git_hub = await db.consultaBd(sqlQuery, sqlData);
        const clientId = "1ddb6bf4ad54c50f900a";
        const clientSecret = "4ac9fe6ec91fbbe36e57f68cfbf444361e884483";
        const repos = 5;
        const repos_sort = 'created:%20asc';
        var user = git_hub[0].usugh_pasp;
        if (user == null) {
            res.json('Ocurrió un error');

        }
        else {
            var url = `https://api.github.com/users/${user}/repos?per_page=${repos}&sort=${repos_sort}&client_id=${clientId}&client_secret=${clientSecret}`;
            const headers = { 'User-Agent': 'dany2501' };

            requests({ url: url, headers: headers, json: true }, (error, response, body) => {
                if (error) {
                    res.json('error');
                } else {
                    res.json(body);
                }
            });
        }


    } catch (err) {
        console.log(err);
    }

}


