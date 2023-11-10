import React from 'react';
import '../../App.css';

const Images = ({ alt, imageName }) => (
  <img src={`images/${imageName}`} alt={alt} className="w-full h-auto" />
);

export default function History() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Our History</h1>
      <div className="space-y-4">
        <Images alt="Group of students" imageName="History_1.jpg" />
        <p className="text-2xl">
          Over the years, we have garnered support from a diverse spectrum of individuals, 
          spanning students, dedicated volunteers, forward-thinking companies, and generous donors.
        </p>
        <Images alt="Volunteers group photo" imageName="History_2.jpg" />
        <p className="text-2xl">
          Established on September 19, 2020, Social Project Bali has been on a continuous 
          journey of growth and community engagement.
        </p>
        <Images alt="Local community members" imageName="History_3.jpg" />
        <p className="text-2xl">
          Our ever-expanding reach and network have enabled us to make a profound impact on the 
          causes we hold dear, from education and environmental sustainability to fostering social 
          welfare and humanitarianism.
        </p>
      </div>
    </div>
  );
}
