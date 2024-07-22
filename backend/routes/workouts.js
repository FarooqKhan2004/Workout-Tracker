const express = require("express")
const router = express.Router()
const {
	createWorkout,
	getWorkouts,
	getWorkout,
} = require("../controllers/workoutController")

// GET all workouts
router.get("/", getWorkouts)

// GET workout by ID
router.get("/:id", getWorkout)

// POST new workout
router.post("/", createWorkout)

// DELETE a workout by ID
router.delete("/:id", (req, res) => {
	res.json({ mssg: "DELETE workout" })
})

// PATCH a workout by ID
router.patch("/:id", (req, res) => {
	res.json({ mssg: "PATCH workout" })
})

module.exports = router
