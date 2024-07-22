const express = require("express")
// used to get env vars
require("dotenv").config()
const workoutRoutes = require("./routes/workouts")
const mongoose = require("mongoose")

// defining express app()
app = express()

// middleware used for request json body
app.use(express.json())

// middle ware used for logging
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

app.use("/api/workouts", workoutRoutes)

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listening for requests
		app.listen(process.env.PORT, () =>
			console.log(
				"connected to DB and listening on port " + process.env.PORT
			)
		)
	})
	.catch((error) => console.log(error))
