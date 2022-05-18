const express = require('express')
const router = express.Router()
const carrinhoController = require('../controller/carrinhoController')

router.get('/carrrinho', carrinhoController.listaBikes)

module.exports = router 