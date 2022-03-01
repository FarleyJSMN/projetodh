const express = require("express");
const router = express.Router()
const acessoriosController = require('../controller/acessoriosController')

router.get('/acessorios', acessoriosController.listaAcessorios)

module.exports = router