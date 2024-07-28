import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({ workout, workoutState, changeState }) => {
	const handleClick = async () => {
		const response = await fetch("/api/workouts/" + workout._id, {
			method: "DELETE",
		})
		const json = await response.json()

		if (response.ok) {
			let newWorkouts = [...workoutState]
			newWorkouts = newWorkouts.filter((w) => w._id !== workout._id)
			changeState(newWorkouts)
		}
	}

	return (
		<div className="workout-details">
			<h4>{workout.title}</h4>
			<p>
				<strong>Load (kg): </strong>
				{workout.load}
			</p>
			<p>
				<strong>Reps: </strong>
				{workout.reps}
			</p>
			<p>
				{formatDistanceToNow(new Date(workout.createdAt), {
					addSuffix: true,
				})}
			</p>
			<span onClick={handleClick}>delete</span>
		</div>
	)
}

export default WorkoutDetails
