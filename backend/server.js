const express = require("express")
// used to get env vars
require("dotenv").config()
const workoutRoutes = require("./routes/workouts")

// defining express app()
app = express()

// middle ware used for logging
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// middleware used for request json body
app.use("/api/workouts", workoutRoutes)

app.use(express.json())

// listening for requests
app.listen(process.env.PORT, () => console.log("listening on port 4000"))
