const express = require('express')
const router = express.Router()
const lerPecas = require('../../controller/Peca/lerPecas')

router.get('/pecas', lerPecas.listarPecas)

module.exports = router