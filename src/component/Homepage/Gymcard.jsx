import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const getGymData = async () => {
  const response = await fetch('http://localhost:3000/fitlog.json', {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch gym data');
  }

  const data = await response.json();
  return data;
};

const Gymcard = async () => {
  const carddata = await getGymData();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">THE LIBRARY</h2>

        <p className="text-sm text-gray-400 mt-1">
          Train with focus. Every major muscle group.
        </p>
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carddata.map(workout => (
          <Link
            key={workout.id}
            href={`/workout/${workout.id}`}
            className="block"
          >
            <div className="bg-[#15171c] rounded-lg overflow-hidden border border-[#24262b] hover:border-lime-400 transition cursor-pointer">
              {/* Image */}
              <div className="relative w-full h-[190px]">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {workout.muscleGroups.map((muscle, index) => (
                    <span
                      key={index}
                      className="bg-lime-400 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Workout Name */}
                <h3 className="text-white text-lg font-bold uppercase">
                  {workout.name}
                </h3>

                {/* Equipment */}
                <p className="text-gray-400 text-sm mt-1">
                  {workout.equipment}
                </p>

                {/* Divider */}
                <div className="border-t border-[#292b30] my-4"></div>

                {/* Bottom Info */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>◷ {workout.duration} min</span>

                  <span>🔥 {workout.caloriesBurned} kcal</span>

                  <span>★ {workout.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gymcard;
