const express = require("express")

const router = express.Router()

// GET all workouts
router.get("/", (req, res) => {
	res.json({ mssg: "GET all workouts" })
})

// GET workout by ID
router.get("/:id", (req, res) => {
	res.json({ mssg: "GET single workout" })
})

// POST new workout
router.post("/", (req, res) => {
	res.json({ mssg: "POST new workout" })
})

// DELETE a workout by ID
router.delete("/:id", (req, res) => {
	res.json({ mssg: "DELETE workout" })
})

// PATCH a workout by ID
router.patch("/:id", (req, res) => {
	res.json({ mssg: "PATCH workout" })
})

module.exports = router
