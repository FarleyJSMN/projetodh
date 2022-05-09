const express = require('express')
const router = express.Router()
const cadastro = require('../../controller/Usuario/criarUsuario')

router.get('/cadastro', cadastro.telaCadastro)
router.post('/cadastro', cadastro.criarUsuario)

module.exports = router