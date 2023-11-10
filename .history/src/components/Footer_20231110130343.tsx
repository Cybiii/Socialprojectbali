import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-gray-950 text-white p-10 '>
      <div className='flex justify-between items-center mb-6'>
        <Link to='/' className='flex items-center'>
          <img src='/images/SPB_lgo.jpeg' alt="Social Project Bali Logo" className='mr-3 h-10' />
          <span className='text-xl font-bold'>SOCIAL PROJECT BALI</span>
        </Link>
      </div>
      <div className='max-w-7xl items-center'>
      <div className='flex flex-wrap justify-between'>
        <div className='w-full sm:w-auto mb-6 sm:mb-0'>
          <h2 className='font-semibold mb-3'>About Us</h2>
          <Link to='/history' className='block text-indigo-500 hover:text-purple-500'>Our History</Link>
          <Link to='/about-us' className='block text-indigo-500 hover:text-purple-500'>Mission</Link>
          <Link to='/gallery' className='block text-indigo-500 hover:text-purple-500'>Gallery</Link>
        </div>
        <div className='w-full sm:w-auto mb-6 sm:mb-0'>
          <h2 className='font-semibold mb-3'>Get Involved</h2>
          <Link to='/volunteer' className='block text-indigo-500 hover:text-purple-500'>Volunteer</Link>
          <Link to='/donate' className='block text-indigo-500 hover:text-purple-500'>Donate</Link>
        </div>
        <div className='w-full sm:w-auto mb-6 sm:mb-0'>
          <h2 className='font-semibold mb-3'>Contact Us</h2>
          <Link to='/contact-us' className='block text-indigo-500 hover:text-purple-500'>Contact Page</Link>
        </div>
        <div className='w-full sm:w-auto mb-6 sm:mb-0'>
          <h2 className='font-semibold mb-3'>Connect</h2>
          <Link to='https://www.instagram.com/socialprojectbali/?hl=en' className='block text-indigo-500 hover:text-purple-500' target='_blank'>Instagram</Link>
          <Link to='https://www.facebook.com/socialprojectbali/' className='block text-indigo-500 hover:text-purple-500' target='_blank'>Facebook</Link>
          <Link to='https://www.youtube.com/@socialprojectbali746' className='block text-indigo-500 hover:text-purple-500' target='_blank'>Youtube</Link>
        </div>
      </div>
      <div className='text-center pt-6'>
        <small className='text-white text-opacity-50'>SOCIAL PROJECT BALI © {new Date().getFullYear()}</small>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
