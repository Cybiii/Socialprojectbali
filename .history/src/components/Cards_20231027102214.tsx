import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards w-full'>
      <h1 className="text-6xl text-violet-950 font-bold mb-4">Explore Social Project Bali</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/AboutUs_Home.png'
              text='Empowering Bali through education, environmental action, and social harmony'
              label='About Us'
              path='/aboutus'
            />
            <CardItem
              src='images/Volunteer_Home.png'
              text='Learn how you can make a difference in Bali through hands-on involvement'
              label='Volunteer'
              path='/volunteer'
            />
            <CardItem
              src='images/Donate_Home.png'
              text="Support Bali's mission: every donation amplifies our organization's impact"
              label='Donate'
              path='/donate'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;