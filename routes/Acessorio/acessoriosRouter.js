const express = require("express");
const router = express.Router()
const lerAcessorio = require('../../controller/Acessorio/lerAcessorio')
const validaUsuario = require('../../middlewares/Usuario/validaUsuario')

router.get('/acessorios', validaUsuario, lerAcessorio.listarAcessorios)

module.exports = router