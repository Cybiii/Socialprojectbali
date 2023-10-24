import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1 className="text-xl font-bold">Explore Social Project Bali</h1>
      <div className="w-full">
        <div className="flex justify-between">
          <ul className="flex justify-between">
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
