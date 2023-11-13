import { Link } from 'react-router-dom';

interface CardItemProps {
  path: string;
  src: string;
  label: string;
  text: string;
}

function CardItem(props: CardItemProps) {
  return (
    <>
      <li className='w-full px-2 py-8 mx-1 my-1'>
        <Link className='flex flex-col items-center p-8 bg-white border-2 border-violet-950 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl' to={props.path}>
          <figure className='w-full h-72 mb-6 overflow-hidden rounded-lg'>
            <img
              className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-110' // Added zoom effect here
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
