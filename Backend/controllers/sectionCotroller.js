const { default: mongoose } = require('mongoose')
const Section = require('../models/sectionModel')
const mopngoose = require('mongoose')

// get all sections
const getSections = async (req, res) => {
	const sections = await Section.find({}).sort({ sectionNumber: 1 })

	res.status(200).json(sections)
}

//Get a single section
const getSection = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Not an existing section" })
	}

	const section = await Section.findById(id)

	if (!section) {
		return res.status(404).json({ error: "Not an existing section" })
	}

	res.status(200).json(section)
}

//Create a section
const createSection = async (req, res) => {
	const { sectionNumber, diameter, length, flow, localLoss } = req.body

	try {
		const section = await Section.create({ sectionNumber, diameter, length, flow })
		res.status(200).json(section)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

//Delete a section
const deleteSection = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such section' })
	}

	const section = await Section.findOneAndDelete({ _id: id })

	if (!section) {
		return res.status(404).json({ error: "Not an existing section" })
	}

	res.status(200).json(section)
}

//Update a section
const updateSection = async(req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such section' })
	}

	const section = await Section.findOneAndUpdate({ _id: id }, {
		...req.body
	})

	if (!section) {
		return res.status(404).json({ error: "Not an existing section" })
	}

	res.status(200).json(section)
}

module.exports = {
	createSection,
	getSections,
	getSection,
	deleteSection,
	updateSection
}