const express = require("express");
const router = express.Router()
const lerAcessorio = require('../../controller/Acessorio/lerAcessorio')

router.get('/acessorios', lerAcessorio.listarAcessorios)

module.exports = router