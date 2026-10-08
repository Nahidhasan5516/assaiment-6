import React from 'react';
import Image from 'next/image';
import bannerImage from '@/assets/banner.png';

const Banner = () => {
  return (
    <section className="bg-[#0b0d10] text-white px-4 md:px-8 lg:px-10 py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#15171c] rounded-lg px-6 md:px-10 py-8 lg:py-10">
        {/* Left Side - Text */}
        <div className="flex-1">
          <p className="text-lime-400 text-xs font-semibold mb-4">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed mb-6">
            FitLog is a dark, no-nonsense gym companion. Pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold text-sm px-5 py-3 rounded-md">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={bannerImage}
            alt="Workout Banner"
            width={450}
            height={350}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
