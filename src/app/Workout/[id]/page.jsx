'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const API_URL = 'YOUR_SINGLE_WORKOUT_API';

export default function WorkoutDetails() {
  const { id } = useParams();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
          throw new Error('Workout not found');
        }

        const data = await response.json();

        setWorkout(data.data || data.workout || data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [id]);

  // Loading
  if (loading) {
    return <p className="text-white text-center mt-20">Loading...</p>;
  }

  // Workout not found
  if (!workout) {
    return <p className="text-white text-center mt-20">Workout not found!</p>;
  }

  return (
    <div className="bg-[#0b0d10] text-white min-h-screen p-5 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Image */}

        <div>
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-[350px] md:h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Right Side Details */}

        <div>
          <h1 className="text-3xl font-bold uppercase">{workout.name}</h1>

          <p className="text-gray-400 mt-3">{workout.description}</p>

          {/* Muscle Groups */}

          <div className="flex gap-2 mt-4">
            {workout.muscleGroups?.map((muscle, index) => (
              <span
                key={index}
                className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Information */}

          <div className="bg-[#151923] rounded-xl p-5 mt-6 space-y-5">
            <div className="flex justify-between">
              <span className="text-gray-400">EQUIPMENT</span>
              <span>{workout.equipment}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">DIFFICULTY</span>
              <span>{workout.difficulty}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">SETS</span>
              <span>{workout.sets}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">REPS</span>
              <span>{workout.reps}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">DURATION</span>
              <span>{workout.duration} min</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">CALORIES</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">RATING</span>
              <span>{workout.rating}</span>
            </div>
          </div>

          {/* Instructions */}

          <h3 className="font-bold mt-6 mb-3">INSTRUCTIONS</h3>

          <ol className="list-decimal pl-5 text-gray-400 space-y-2">
            {workout.instructions?.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
