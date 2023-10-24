import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item bg-indigo-700'>
        <Link className='cards__item__link bg-indigo-700' to={props.path}>
          <figure className='cards__item__pic-wrap bg-indigo-700' data-category={props.label}>
            <img
              className='cards__item__img bg-indigo-700'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info bg-indigo-700'>
            <h2 className='cards__item__text bg-indigo-700'>{props.text}</h2>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
