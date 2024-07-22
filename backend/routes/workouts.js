const express = require("express")
const Workout = require("../models/workoutModel")

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
router.post("/", async (req, res) => {
	const { title, reps, load } = req.body
	try {
		// Create workout object
		const workout = await Workout.create({ title, load, reps })
		res.status(200).json(workout)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
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
