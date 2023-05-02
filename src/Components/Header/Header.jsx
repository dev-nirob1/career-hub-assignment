import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='flex shadow-md justify-between items-center container mx-auto h-20'>
            <h2 className='text-3xl md:text-4xl font-bold'>JobFinder</h2>

            <div className='order-2 md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ? <XMarkIcon className='h-6 w-6' />
                        :
                        <Bars3Icon className='h-6 w-6' />
                }
            </div>

            <nav className={`hidden md:block w-3/4 md:w-fit ${open ? 'top-16 right-0' : '-top-96 right-8 '}`}>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/applied-job">Applied Jobs</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </nav>

            <button className='text-base text-[20px] text-white px-4 md:px-7 py-3 md:py-5  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold rounded-lg'>Start Applying</button>

        </div>
    );
};

export default Header;