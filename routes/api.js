const config = require('config');
const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const users = [
  {id: 1, username: "raktim", password: "password"}
];

const { SecureAPI } = require('../utils/secure');

router.get('/open', (req, res, next)=>{
res.status(200).send("Everybody can see this");
});

router.get('/closed', SecureAPI(), async (req, res, next)=>{
res.status(200).send("Only logged in people can see me");
});

router.post("/login", (req, res) => {
  //check if username/pw is sent or not
  if (!req.body.username || !req.body.password) {
    res.status(400).send("Error. Please enter the correct username and password");
    return;
  }
  //find user from the above user array
  const user = users.find((u) => {
   return u.username === req.body.username && u.password === req.body.password;
  });
  //create token using jwt
  const token = jwt.sign({
    sub: user.id,
    username: user.username
  }, config.get('app.secret'), {expiresIn: config.get('jwt.duration')});
  res.status(200).send({access_token: token});
});

module.exports = router;
