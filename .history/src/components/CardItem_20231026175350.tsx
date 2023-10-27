import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='w-full px-4 py-8 mx-4 my-4'>
        <Link className='flex flex-col items-center p-8 bg-white border-2 border-violet-950 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl w-72 h-72' to={props.path}>
          <figure className='w-full h-full mb-6 overflow-hidden rounded-lg'>
            <img
              className='w-full h-full object-cover'
              alt='Image'
              src={props.src}
            />
          </figure>
          <span className='mb-3 text-4xl font-bold text-violet-950'>{props.label}</span>
          <div className='text-center text-black'>
            <h2 className='text-2xl'>{props.text}</h2>
          </div>
        </Link>
      </li>
    </>
  );
}


export default CardItem;
