const express = require("express")
// used to get env vars
require("dotenv").config()

// defining express app()
app = express()

// middle ware used for logging
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// listening for requests
app.listen(process.env.PORT, () => console.log("listening on port 4000"))

// routes
app.get("/", (req, res) => {
	res.json({ mssg: "Welcome to the app" })
})
