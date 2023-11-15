import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className='flex justify-between items-center container mx-auto h-20'>
            <h2 className='text-3xl md:text-4xl font-bold'>JobFinder</h2>

            <div className='order-2 md:hidden' onClick={handleToggle}>
                <FontAwesomeIcon icon={open ? faTimes : faBars} className='h-6 w-6 text-gray-500' />
            </div>

            <nav className={`md:flex md:items-center font-medium text-lg w-full md:w-auto absolute md:relative top-20 md:top-0 right-0 transition-all duration-300 ease-in-out ${open ? 'bg-gray-200' : ''} ${open ? 'block' : 'hidden'}`}>

                <NavLink to="/" className={`px-3 py-2 rounded block md:inline-block mt-4 md:mt-0 mx-4 md:mx-2 text-gray-700 hover:text-blue-500 ${!open ? 'hover:bg-gray-100' : ''}`}>Home</NavLink>
                <NavLink to="/statistics" className={`px-3 py-2 rounded block md:inline-block mt-4 md:mt-0 mx-4 md:mx-2 text-gray-700 hover:text-blue-500 ${!open ? 'hover:bg-gray-100' : ''}`}>Statistics</NavLink>

                <NavLink to="/applied-job" className={`px-3 py-2 rounded block md:inline-block mt-4 md:mt-0 mx-4 md:mx-2 text-gray-700 hover:text-blue-500 ${!open ? 'hover:bg-gray-100' : ''}`}>Applied Jobs</NavLink>

                <NavLink to="/blog" className={`px-3 py-2 rounded block md:inline-block mt-4 md:mt-0 mx-4 md:mx-2 text-gray-700 hover:text-blue-500 ${!open ? 'hover:bg-gray-100' : ''}`}>Blog</NavLink>
            </nav>

            <button className='text-base text-[20px] text-white px-4 md:px-5 py-3 md:py-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold rounded-lg transition-all duration-300 ease-in-out'>Start Applying</button>
        </div>
    );
};

export default Header;
