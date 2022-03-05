const { getAll, getOne, addDistrict } = require('../controllers/districtController')

const router = require('express').Router()

router.get('/all',getAll)
router.get('/specific/:id',getOne)
router.post('/add',addDistrict)

module.exports = router