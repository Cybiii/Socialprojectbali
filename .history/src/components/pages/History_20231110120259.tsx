import React from 'react';
import '../../App.css';

const Section = ({ alt, imageName, children }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-6 mb-6">
    <div className="md:w-1/3">
      <img src={`images/${imageName}`} alt={alt} className="w-full h-auto rounded-lg" />
    </div>
    <div className="md:w-2/3">
      <p className="text-xl">{children}</p>
    </div>
  </div>
);

export default function History() {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Our History</h1>
      <Section alt="Group of students" imageName="History_1.jpg">
        Over the years, we have garnered support from a diverse spectrum of individuals,
        spanning students, dedicated volunteers, forward-thinking companies, and generous donors.
      </Section>
      <Section alt="Volunteers group photo" imageName="History_2.jpg">
        Established on September 19, 2020, Social Project Bali has been on a continuous
        journey of growth and community engagement.
      </Section>
      <Section alt="Local community members" imageName="History_3.jpg">
        Our ever-expanding reach and network have enabled us to make a profound impact on the
        causes we hold dear, from education and environmental sustainability to fostering social
        welfare and humanitarianism.
      </Section>
    </div>
  );
}
