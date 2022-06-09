const express = require('express')
const router = express.Router()
const lerBicicletas = require('../../controller/Bicicleta/lerBicicletas')

router.get('/bicicletas', lerBicicletas.listarBicicletas)

module.exports = router 