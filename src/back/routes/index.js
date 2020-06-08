const router = require('express').Router()

cmsController = require('../controllers/index')

router.use('/', cmsController)

module.exports = router