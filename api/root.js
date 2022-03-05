const { getRoot, getLocationCsv } = require('../controllers')

const router = require('express').Router()

router.get('/',getRoot)
router.post('/csv',getLocationCsv)
module.exports = router