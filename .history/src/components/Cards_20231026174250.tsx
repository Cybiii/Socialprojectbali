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
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='About Us'
              path='/aboutus'
            />
            <CardItem
              src='images/Volunteer_Home.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Volunteer'
              path='/volunteer'
            />
            <CardItem
              src='images/Donate_Home.png'
              text='Ride through the Sahara Desert on a guided camel tour'
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