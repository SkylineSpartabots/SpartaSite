const express = require('express')

// controller functions
const {startTimer, stopTimer, getTime} = require('../controllers/timerController')

const router = express.Router()

router.get('/startTimer', startTimer)
router.get('/stopTimer', stopTimer)
router.get('/getTime', getTime)

module.exports = router