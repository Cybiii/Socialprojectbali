import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='w-full px-2 py-8 mx-5 my-5'> {/* Adjusted py-6 to py-8 */}
        <Link className='flex flex-col items-center p-8 bg-white border-2 border-violet-950 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl' to={props.path}>
          <figure className='w-full h-72 mb-6 overflow-hidden rounded-lg'> {/* Adjusted h-56 to h-72 and mb-4 to mb-6 */}
            <img
              className='w-full h-full object-cover'
              alt='Image'
              src={props.src}
            />
          </figure>
          <span className='mb-3 text-4xl font-bold text-violet-950'>{props.label}</span> {/* Adjusted text-3xl to text-4xl */}
          <div className='text-center text-black'>
            <h2 className='text-2xl'>{props.text}</h2> {/* Adjusted text-xl to text-2xl */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
