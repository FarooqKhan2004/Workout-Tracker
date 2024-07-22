const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

// GET all workouts
const getWorkouts = async (req, res) => {
	// get all workouts from DB and sort in descending order
	const workouts = await Workout.find({}).sort({ createdAt: -1 })
	res.status(200).json(workouts)
}

// GET single workout by id
const getWorkout = async (req, res) => {
	const { id } = req.params
	// ensure that id is a valid mongoose id
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" })
	}

	const workout = await Workout.findById(id)

	if (!workout) {
		return res.status(404).json({ error: "No such workout" })
	}
	res.status(200).json(workout)
}

// POST a workout
const createWorkout = async (req, res) => {
	const { title, reps, load } = req.body
	try {
		// Create workout object in DB
		const workout = await Workout.create({ title, load, reps })
		res.status(200).json(workout)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// DELETE a workout by id
const deleteWorkout = async (req, res) => {
	const { id } = req.params
	// validate id is mongoose id
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" })
	}

	// get and delete workout
	const workout = await Workout.findOneAndDelete({ _id: id })

	if (!workout) {
		return res.status(404).json({ error: "No such workout" })
	}
	res.status(200).json(workout)
}

// PATCH a workout by id
const updateWorkout = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" })
	}

	const workout = await Workout.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	)

	if (!workout) {
		return res.status(404).json({ error: "No such workout" })
	}
	res.status(200).json(workout)
}

module.exports = {
	createWorkout,
	getWorkouts,
	getWorkout,
	deleteWorkout,
	updateWorkout,
}
