const express = require('express')
const Section = require('../models/sectionModel')
const router = express.Router()
const { createSection, getSection, getSections, deleteSection, updateSection } = require('../controllers/sectionCotroller')

// get all sections
router.get('/', getSections)

//get a single section
router.get('/:id', getSection)

//Create a section
router.post('/', createSection)


//Delete a section
router.delete('/:id', deleteSection) 


//Update a section
router.patch('/:id', updateSection)


module.exports = router