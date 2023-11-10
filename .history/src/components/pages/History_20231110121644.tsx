import React from 'react';
import '../../App.css';

const Section = ({ alt, imageName, children }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-6 mb-6">
    <div className="md:w-1/3">
      <img src={`images/${imageName}`} alt={alt} className="w-full h-auto rounded-lg" />
    </div>
    <div className="md:w-2/3">
      <p className="ml-6 mr-6 text-2xl text-black">{children}</p>
    </div>
  </div>
);

export default function History() {
  return (
    <div className="container mx-auto p-4 max-w-7.5xl bg-white">
      <h1 className="text-4xl text-center text-violet-950 font-bold mt-6 mb-6">Our History</h1>
      <Section alt="history 1" imageName="History_1.jpg">
      Since September 19, 2020, Social Project Bali has steadily grown, fueled by the enthusiasm of diverse individuals. 
      Our supporters range from energetic students eager to make a difference, to dedicated volunteers, innovative companies, and philanthropic donors who believe in our cause.
      </Section>
      <Section alt="history 2" imageName="History_2.jpg">
      Our journey has been marked by significant community involvement and development. We've evolved from a small initiative into a driving force for social change, championing education, environmental care, and social welfare. 
      Our collaborative projects and partnerships have reached both local and international communities, illustrating the strength of unity in creating positive change.
      </Section>
      <Section alt="history 3" imageName="History_3.jpg">
      As we continue to expand our reach, our commitment to making a tangible impact on the causes close to our heart remains unwavering. 
      Social Project Bali is more than an organization; it's a movement towards a sustainable and compassionate world, and every step forward is a step towards a better future for everyone involved.
      </Section>
    </div>
  );
}
