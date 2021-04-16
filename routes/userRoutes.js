var express = require('express');

var myCtrl = require('../controller/userController');
var apiroutes = express.Router();

apiroutes.get('/',myCtrl.getPage);
apiroutes.get('/user/first',myCtrl.newPage);
apiroutes.get('/myform',myCtrl.openPage);
apiroutes.post('/getResult',myCtrl.getData);

module.exports=apiroutes
