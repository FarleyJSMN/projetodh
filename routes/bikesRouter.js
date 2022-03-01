const express = require('express')
const router = express.Router()
const bikesController = require('../controller/bikesController')

router.get('/bikes', bikesController.listaBikes)

module.exports = router 