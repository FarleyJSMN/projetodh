const express = require('express')
var methodOverride = require('method-override');
const router = express.Router()
const usuario = require('../controller/Usuario/criarUsuario')
const cadastro = require('../controller/Usuario/criarUsuario')
const login = require('../controller/Usuario/criarLogin')
const perfil = require('../controller/Usuario/editarUsuario')
const validaUsuario = require('../middlewares/Usuario/validaUsuario')



router.get('/cadastro', cadastro.telaCadastro)
router.post('/cadastro', usuario.criarUsuario)

router.get('/login', login.telaLogin)
router.post('/login', login.criarLogin)

router.get('/perfil', validaUsuario, perfil.exibePerfil)
router.put('/perfil', perfil.editaPerfil)

module.exports = router
