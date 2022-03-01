const express = require('express')
const router = express.Router()
const pecasController = require('../controller/pecasController')

router.get('/pecas', pecasController.listaPecas)

module.exports = router