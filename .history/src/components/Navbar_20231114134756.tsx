import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    let Links = [
        {name:"HOME", link:"/"},
        {name:"ABOUT US", link:"/aboutus"},
        {name:"HISTORY", link:"/history"},
        {name:"VOLUNTEER", link:"/volunteer"},
        {name:"GALLERY", link:"/gallery"},
        {name:"CONTACT US", link:"https://linktr.ee/socialprojectbali"},
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
           <div className='md:flex items-center justify-between bg-gray-950 py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                    <img src="/images/SPB_logo.jpeg" alt="Logo" className="h-10 mr-4" />
                    SOCIAL PROJECT BALI
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                    {
                        open ? <XMarkIcon className='w-7 h-7'/> : <Bars3BottomRightIcon className='w-7 h-7'/>
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                        <li key={index} className='md:ml-8 text-white md:my-0 my-7'>
                            <a href={link.link} className='hover:text-blue-400 duration-500'>{link.name}</a>
                        </li>))
                    }
                    {/* button (if needed) */}
                </ul>
           </div>
        </div>
    );
};

export default Header;
