import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  // Define the corresponding icon for each label
  const getIcon = (label) => {
    switch (label) {
      case 'About Us':
        return 'fas fa-info-circle';
      case 'Donate':
        return 'fas fa-donate';
      case 'Volunteer':
        return 'fas fa-hands-helping';
      default:
        return '';
    }
  };

  return (
    <>
      <li className='w-full px-2 py-8 mx-1 my-1'>
        <Link className='flex flex-col items-center p-8 bg-white border-2 border-violet-950 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl relative' to={props.path}>
          {/* Overlay */}
          <div className='absolute inset-0 bg-black opacity-40'></div>
          
          {/* Icon */}
          <i className={`${getIcon(props.label)} text-white absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl`}></i>

          <figure className='w-full h-72 mb-6 overflow-hidden rounded-lg z-0'>
            <img
              className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-110'
              alt='Image'
              src={props.src}
            />
          </figure>

          <span className='mb-3 text-4xl font-bold text-violet-950 z-10'>{props.label}</span>
          <div className='text-center text-black z-10'>
            <h2 className='text-2xl'>{props.text}</h2>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
