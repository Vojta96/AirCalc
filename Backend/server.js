require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const sectionsRoutes = require('./routes/sections')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

//routes
app.use('/api/sections', sectionsRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
	.then(() => {
	// listen to requests
		app.listen(process.env.PORT, () => {
			console.log('Connecter to db & listening on port', process.env.PORT)
		})		
	})
	.catch((error) => {
		console.log(error)
	})