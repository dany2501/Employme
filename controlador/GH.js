var db =require('../conexionsql/conexion');
var requests = require('request');


exports.github = async function (req, res) {
    try {
    var d=req.session.usuario;
    var sqlQuery='select usugh_pasp from perfilaspirante where id_asp=?';
    var sqlData=[d.id];
    console.log('id: '+d.id);
    var git_hub=await db.consultaBd(sqlQuery,sqlData);
    const clientId="1ddb6bf4ad54c50f900a";
    const clientSecret="4ac9fe6ec91fbbe36e57f68cfbf444361e884483";
    const repos=2;
    const repos_sort='created:%20asc';
    var user=git_hub[0].usugh_pasp;
    var url = `https://api.github.com/users/${user}/repos?per_page=${repos}&sort=${repos_sort}&client_id=${clientId}&client_secret=${clientSecret}`;
    const headers= {'User-Agent' : 'dany2501'};
    
    requests({url:url,headers:headers,json:true},(error,response,body)=>{
        req.session.gh=body;
    });

    /*
        var options = {
            url: url,
            headers : {
                'User-Agent' : 'dany2501'
            }
        }*/
    /*requests(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        }
        var o=JSON.parse(body);
        console.log(o);
    });*/
  
    }catch (err) {
        console.log(err);
    }



}


/*
class Github {
    constructor (clientId, clientSecret) {
      if(!clientId || !clientSecret) {
        return console.warn('Please use a client_id and a client_secret');
      }
      this.client_id= clientId;
      this.client_secret = clientSecret;
      this.repos_count = 10;
      this.repos_sort = 'created: asc';
    }

    async fetchUser(user) {
        var sqlQuery='select usugh_pasp from perfilaspirante where id_asp=?'
        var result = await db.consultaBd();
      console.log(user);
      const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const userData = await userDataRequest.json();
      const repositories = await repositoriesRequest.json();
  
      return {
        userData,
        repositories
      }
    }
  
  }
  
  module.exports = Github;
  */