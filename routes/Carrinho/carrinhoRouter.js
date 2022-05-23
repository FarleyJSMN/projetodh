const express = require('express')
const router = express.Router()
const lerCarrinho = require('../../controller/Carrinho/LerCarrinho')

router.get('/carrinho', lerCarrinho.telaCarrinho)

module.exports = router