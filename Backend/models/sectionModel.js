const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sectionSchema = new Schema({
	sectionNumber: {
		type: Number,
		required: true,
	},
	diameter: {
		type: Number,
		required: true,
	},
	length: {
		type: Number,
		required: true,
	},
	flow: {
		type: Number,
		required: true,
	}
}, { timestamps: true })

module.exports = mongoose.model('Section', sectionSchema)