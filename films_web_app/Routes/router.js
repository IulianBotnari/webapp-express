const express = require('express');
const router = express.Router()
const FilmController = require('../Controllers/FilmsController.js')


router.get('/', FilmController.index)
router.get('/:id', FilmController.show)


module.exports = router