var express = require('express');
var router = express.Router();
const usuario = require('../controller/Usuario/criarUsuario')
const cadastro = require('../controller/Usuario/criarUsuario')
const login = require('../controller/Usuario/criarLogin')
const validaCadastro = require('../middlewares/Usuario/validacaoCadastro')

router.get('/cadastro', cadastro.telaCadastro)
router.post('/cadastro', validaCadastro,usuario.criarUsuario)

router.get('/login', login.telaLogin)
router.post('/login', login.criarLogin)

module.exports = router;
