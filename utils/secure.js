const config = require('config');
const { ERR } = require("./error");

const JWT = require('jsonwebtoken');


 const SecureAPI = () => {
   return function(req, res, next) {
    var token = req.body.access_token || req.query.access_token || req.headers["access_token"];
    if(!token) throw ERR.TOKEN_REQ;
      JWT.verify(token, config.get('app.secret'), (err, tokenData) => {
        //check permissions as well from tokenData (optional)
        if (err) throw ERR.TOKEN_EXP;
        let data = tokenData || false;
        if(data) next();
    });
   }
 }


module.exports = { SecureAPI };