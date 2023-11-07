import React from 'react';
import '../../App.css';

export default function Volunteer() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row bg-white">
        <div className="md:w-full bg-cover bg-center bg-[url('/path-to-your-image.jpg')] text-center p-6 rounded-l-lg">
          <h1 className="text-4xl font-bold text-violet-950 mb-4">VOLUNTEER WITH US!</h1>
          <p className="text-2xl text-white mb-4">
            At Social Project Bali, we believe in the power of unity and collective
            action to create positive change. If you're looking for a meaningful way
            to make a difference in Bali, Indonesia, we warmly welcome you to become
            a part of our volunteer community.
          </p>
          <button className="bg-violet-950 text-white text-lg py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
            Join Us Today & Be the Change
          </button>
        </div>

        <div className="md:w-full p-6">
          <div className="shadow-md rounded-r-lg p-4">
            <h2 className="text-4xl text-violet-950 font-bold mb-4">Volunteer with Social Project Bali</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeyQ349j54mIX0xCI4a3Ap2tNWUuEklsCOoGnX3ip4LiqYY-g/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="min-h-[500px] md:min-h-screen"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
