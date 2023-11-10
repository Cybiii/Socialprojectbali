import React from 'react';
import '../../App.css';

const Images = ({ alt }) => (
  <div className="bg-gray-300 h-64 w-full flex items-center justify-center">
    <span className="text-gray-700">{alt}</span>
  </div>
);

export default function History() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Our History</h1>
      <div className="space-y-4">
        <Images alt="Group of students" />
        <p className="text-lg">
          Over the years, we have garnered support from a diverse spectrum of individuals, 
          spanning students, dedicated volunteers, forward-thinking companies, and generous donors.
        </p>
        <Images alt="Volunteers group photo" />
        <p className="text-lg">
          Established on September 19, 2020, Social Project Bali has been on a continuous 
          journey of growth and community engagement.
        </p>
        <Images alt="Local community members" />
        <p className="text-lg">
          Our ever-expanding reach and network have enabled us to make a profound impact on the 
          causes we hold dear, from education and environmental sustainability to fostering social 
          welfare and humanitarianism.
        </p>
      </div>
    </div>
  );
}
