import React from 'react';
import '../../App.css';

const Section = ({ alt, imageName, children }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-6 mb-6">
    <div className="md:w-1/3">
      <img src={`images/${imageName}`} alt={alt} className="w-full h-auto rounded-lg" />
    </div>
    <div className="md:w-2/3">
      <p className="text-2xl text-black">{children}</p>
    </div>
  </div>
);

export default function History() {
  return (
    <div className="container mx-auto p-4 max-w-7xl bg-white">
      <h1 className="text-4xl text-center text-violet-950 font-bold mt-6 mb-6">Our History</h1>
      <Section alt="history 1" imageName="History_1.jpg">
      Since its establishment on September 19, 2020, Social Project Bali has embarked on an ambitious mission to drive positive change within the community. 
      Our story is one of unwavering commitment and collective effort. 
      We have witnessed a groundswell of support from across society, encompassing eager students who bring fresh ideas and energy, to selfless volunteers who dedicate countless hours, from innovative companies that seek to give back to society, to altruistic donors who generously fund our initiatives.
      </Section>
      <Section alt="history 2" imageName="History_2.jpg">
      Throughout the years, our organization has not only grown in size but also in the scope of our influence. 
      What started as a small group with a shared vision has blossomed into a robust community, united by a common goal of nurturing societal well-being and environmental stewardship. 
      Each project undertaken reflects our core values of education, sustainability, and social responsibility, with every success story adding to the rich tapestry of our collective history.
      </Section>
      <Section alt="history 3" imageName="History_3.jpg">
      Our expanding network has been a testament to the power of collaboration. 
      Partnerships with local and international organizations have amplified our reach, allowing us to tackle a wider range of issues effectively. We've established educational programs that illuminate minds, sustainability projects that preserve our environment for future generations, and social welfare initiatives that provide a safety net for the most vulnerable. 
      Our efforts in humanitarianism have brought relief and hope to those affected by adversity, showcasing the profound impact of solidarity in times of need.
      </Section>
    </div>
  );
}
