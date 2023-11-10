import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-gray-950 text-white p-4'> {/* Reduced overall padding */}
      <div className='flex justify-between items-center mb-4'> {/* Reduced margin bottom */}
        <Link to='/' className='flex items-center'>
          <img src='/images/SPB_logo.jpeg' alt="Social Project Bali Logo" className='mr-2 h-8' /> {/* Adjusted logo size and margin */}
          <span className='text-lg font-bold'>SOCIAL PROJECT BALI</span> {/* Adjusted font size */}
        </Link>
      </div>
      <div className='flex flex-wrap justify-between gap-4'> {/* Introduced gap for consistent spacing */}
        <div className='w-full sm:w-auto mb-4'> {/* Reduced margin bottom */}
          <h2 className='font-semibold mb-2'>About Us</h2> {/* Reduced margin bottom */}
          <Link to='/history' className='block text-indigo-500 hover:text-purple-500'>Our History</Link>
          <Link to='/about-us' className='block text-indigo-500 hover:text-purple-500'>Mission</Link>
          <Link to='/gallery' className='block text-indigo-500 hover:text-purple-500'>Gallery</Link>
        </div>
        <div className='w-full sm:w-auto mb-4'> {/* Reduced margin bottom */}
          <h2 className='font-semibold mb-2'>Get Involved</h2> {/* Reduced margin bottom */}
          <Link to='/volunteer' className='block text-indigo-500 hover:text-purple-500'>Volunteer</Link>
          <Link to='/donate' className='block text-indigo-500 hover:text-purple-500'>Donate</Link>
        </div>
        <div className='w-full sm:w-auto mb-4'> {/* Reduced margin bottom */}
          <h2 className='font-semibold mb-2'>Contact Us</h2> {/* Reduced margin bottom */}
          <Link to='/contact-us' className='block text-indigo-500 hover:text-purple-500'>Contact Page</Link>
        </div>
        <div className='w-full sm:w-auto mb-4'> {/* Reduced margin bottom */}
          <h2 className='font-semibold mb-2'>Connect</h2> {/* Reduced margin bottom */}
          <Link to='//www.instagram.com/socialprojectbali' className='block text-indigo-500 hover:text-purple-500' target='_blank'>Instagram</Link>
          <Link to='//www.facebook.com/socialprojectbali' className='block text-indigo-500 hover:text-purple-500' target='_blank'>Facebook</Link>
          <Link to='//www.youtube.com/socialprojectbali' className='block text-indigo-500 hover:text-purple-500' target='_blank'>Youtube</Link>
        </div>
      </div>
      <div className='text-center pt-4'> {/* Reduced padding top */}
        <small className='text-white text-opacity-50'>SOCIAL PROJECT BALI © {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}

export default Footer;
