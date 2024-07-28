import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
	// state for workouts in DB
	const [workouts, setWorkouts] = useState(null)

	useEffect(() => {
		// method to fetch workouts in DB
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts")
			const json = await response.json()

			if (response.ok) {
				setWorkouts(json)
			}
		}

		fetchWorkouts()
	}, [])

	useEffect(() => {}, [workouts])

	return (
		<div className="home">
			<div className="workouts">
				{workouts &&
					workouts.map((workout) => (
						<WorkoutDetails
							key={workout._id}
							workoutState={workouts}
							changeState={setWorkouts}
							workout={workout}
						/>
					))}
			</div>
			<WorkoutForm workoutState={workouts} changeState={setWorkouts} />
		</div>
	)
}

export default Home
