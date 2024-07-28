import { useState } from "react"

const WorkoutForm = ({ workoutState, changeState }) => {
	const [title, setTitle] = useState("")
	const [load, setLoad] = useState("")
	const [reps, setReps] = useState("")
	const [error, setError] = useState("")

	const handleSubmit = async (e) => {
		// prevent form submit from refreshing page
		e.preventDefault()

		const workout = { title, load, reps }

		const res = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
			},
		})
		const json = await res.json()

		if (!res.ok) {
			setError(json.error)
		}
		if (res.ok) {
			let workouts = [...workoutState]
			workouts.unshift(json)
			changeState(workouts)
			setTitle("")
			setLoad("")
			setReps("")
			setError(null)
			console.log("New workout added to db", json)
		}
	}

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a new Workout</h3>

			<label>Exercise Title:</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>

			<label>Load (in Lbs):</label>
			<input
				type="text"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>

			<label>Reps:</label>
			<input
				type="text"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>
			<button>Add Workout</button>
			{error && <div className="error">{error}</div>}
		</form>
	)
}

export default WorkoutForm
