import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1 className="text-xl font-bold mb-4">meow</h1>
      <div className="w-full"> {/* cards__container */}
        <div className="flex justify-between w-full"> {/* cards__wrapper */}
          <ul className="flex justify-between w-full"> {/* cards__items */}
            <CardItem
              src='images/AboutUs_Home.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='About Us'
              path='/About Us'
            />
            <CardItem
              src='images/Volunteer_Home.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Volunteer'
              path='/products'
            />
            <CardItem
              src='images/Donate_Home.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Donate'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
