import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='w-1/3 px-4 py-6'> {/* Adjust the width and padding for the card */}
        <Link className='flex flex-col items-center p-6 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl' to={props.path}>
          <figure className='w-full h-56 mb-4 overflow-hidden rounded-lg'>
            <img
              className='w-full h-full object-cover'
              alt='Image'
              src={props.src}
            />
          </figure>
          <span className='mb-2 text-3xl font-bold text-indigo-700'>{props.label}</span> {/* Adjust the font size for the label */}
          <div className='text-center text-black'>
            <h2 className='text-xl'>{props.text}</h2> {/* Adjust the font size for the card description */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
