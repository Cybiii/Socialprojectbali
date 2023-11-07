import React from 'react';
import '../../App.css'; // This file should contain the required utility classes if not present in Tailwind by default

export default function Volunteer() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row bg-white">
        <div className="md:w-full bg-cover bg-center text-white p-6 rounded-l-lg"
             style={{
               backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/Volunteer_Main.png')",
             }}>
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl font-bold mb-4">VOLUNTEER WITH US!</h1>
            <p className="text-2xl mb-4">
              At Social Project Bali, we believe in the power of unity and collective
              action to create positive change. If you're looking for a meaningful way
              to make a difference in Bali, Indonesia, we warmly welcome you to become
              a part of our volunteer community.
            </p>
            <button className="bg-violet-950 text-lg py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
              Join Us Today & Be the Change
            </button>
          </div>
        </div>

        {/* The second div remains the same */}
        <div className="md:w-full p-6">
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
