'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar bg-[#0b0d10] text-white px-4 md:px-8">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Dropdown */}
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[#15171c] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button
                onClick={() => router.push('/')}
                className="text-lime-400"
              >
                Workouts
              </button>
            </li>

            <li>
              <button onClick={() => router.push('/my-plan')}>My Plan</button>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <button
          onClick={() => router.push('/')}
          className="btn btn-ghost text-xl font-bold gap-2"
        >
          <Image src={logo} alt="FITLOG Logo" height={22} width={22} />
          <span>FITLOG</span>
        </button>
      </div>

      {/* Center Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {/* Workouts */}
          <li>
            <button
              onClick={() => router.push('/')}
              className="bg-lime-400 text-black rounded-full px-4 py-2 font-medium"
            >
              Workouts
            </button>
          </li>

          {/* My Plan */}
          <li>
            <button
              onClick={() => router.push('/my-plan')}
              className="text-gray-400 hover:text-white"
            >
              My Plan
            </button>
          </li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="navbar-end gap-5 text-sm">
        {/* Plan */}
        <button
          onClick={() => router.push('/my-plan')}
          className="flex items-center gap-1 text-gray-300 hover:text-white"
        >
          Plan
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-lime-400 text-black text-[10px] font-bold">
            0
          </span>
        </button>

        {/* Saved */}
        <button
          onClick={() => router.push('/my-plan')}
          className="flex items-center gap-1 text-gray-300 hover:text-white"
        >
          Saved
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-lime-400 text-black text-[10px] font-bold">
            0
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
