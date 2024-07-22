const express = require("express")
const router = express.Router()
const {
	createWorkout,
	getWorkouts,
	getWorkout,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutController")

// GET all workouts
router.get("/", getWorkouts)

// GET workout by ID
router.get("/:id", getWorkout)

// POST new workout
router.post("/", createWorkout)

// DELETE a workout by ID
router.delete("/:id", deleteWorkout)

// PATCH a workout by ID
router.patch("/:id", updateWorkout)

module.exports = router
