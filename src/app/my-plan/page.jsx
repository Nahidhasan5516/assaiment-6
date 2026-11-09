'use client';
import { useMemo, useState } from 'react';
import './MyPlan.css';

const todayPlan = [
  {
    id: 1,
    name: 'Barbell Bench Press',
    duration: 12,
    caloriesBurned: 100,
    difficulty: 'Intermediate',
    image: '/workout1.jpg',
  },
  {
    id: 2,
    name: 'Squat',
    duration: 11,
    caloriesBurned: 90,
    difficulty: 'Beginner',
    image: '/workout2.jpg',
  },
];

function MyPlan() {
  const [activeTab, setActiveTab] = useState('saved');
  const [sortBy, setSortBy] = useState('duration');

  // Saved workouts থেকে ডাটা নেওয়া
  const [savedWorkouts] = useState(() => {
    const data = localStorage.getItem('fitlog-saved-workouts');
    return data ? JSON.parse(data) : [];
  });

  // কোন Tab দেখাবে
  const currentWorkouts = activeTab === 'today' ? todayPlan : savedWorkouts;

  // Workout Sort করা
  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort((a, b) => {
      if (sortBy === 'duration') {
        return a.duration - b.duration;
      }

      if (sortBy === 'caloriesBurned') {
        return b.caloriesBurned - a.caloriesBurned;
      }

      return a.name.localeCompare(b.name);
    });
  }, [currentWorkouts, sortBy]);

  // Statistics
  const totalExercises = todayPlan.length;

  const totalMinutes = todayPlan.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  return (
    <div className="my-plan-container">
      {/* Heading */}
      <div className="plan-heading">
        <h1>MY PLAN</h1>
        <p>Cap off five lifts for today. Finish them, then rest more.</p>
      </div>

      {/* Statistics */}
      <div className="plan-stats">
        <div className="stat-item">
          <p>Exercises</p>
          <h2 className="highlight">{totalExercises}</h2>
        </div>

        <div className="stat-item">
          <p>Minutes</p>
          <h2>{totalMinutes}</h2>
        </div>

        <div className="stat-item">
          <p>Calories</p>
          <h2>{totalCalories}</h2>
        </div>
      </div>

      {/* Tabs and Sorting */}
      <div className="plan-controls">
        <div className="plan-tabs">
          <button
            className={activeTab === 'today' ? 'active' : ''}
            onClick={() => setActiveTab('today')}
          >
            Today's Plan
          </button>

          <button
            className={activeTab === 'saved' ? 'active' : ''}
            onClick={() => setActiveTab('saved')}
          >
            Saved
          </button>
        </div>

        <div className="sort-control">
          <label>Sort By</label>

          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="duration">Duration</option>
            <option value="caloriesBurned">Calories</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Workout List */}
      <div className="workout-list">
        {sortedWorkouts.length > 0 ? (
          sortedWorkouts.map(workout => (
            <div className="plan-workout-card" key={workout.id}>
              <img src={workout.image} alt={workout.name} />

              <div className="workout-info">
                <h3>{workout.name}</h3>
                <p>{workout.difficulty}</p>
                <span>{workout.duration} min</span>
                <span>{workout.caloriesBurned} kcal</span>
              </div>
            </div>
          ))
        ) : (
          /* Empty State */

          <div className="empty-state">
            <h3>NOTHING HERE YET</h3>

            <p>Browse the library and add a bit of good lifting.</p>

            <button
              onClick={() => {
                window.location.href = '/';
              }}
            >
              Go to workouts
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPlan;
