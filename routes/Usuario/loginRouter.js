const express = require('express')
const router = express.Router()
const login = require('../../controller/Usuario/criarLogin')

router.get('/login', login.telaLogin)
router.post('/login', login.criarLogin)

module.exports = router