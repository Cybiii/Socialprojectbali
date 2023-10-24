import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
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