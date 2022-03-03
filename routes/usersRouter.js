var express = require('express');
var router = express.Router();
const usuarioController = require('../controller/usuarioController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cadastro', usuarioController.cadastro)
router.get('/login', usuarioController.login)

module.exports = router;
