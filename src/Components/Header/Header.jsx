import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex border justify-between items-center container mx-auto h-20'>
            <h2 className='text-4xl font-bold'>JobFinder</h2>
            <nav className=''>
                <Link className='mr-10' to="/">Home</Link>
                <Link className='mr-10' to="/statistics">Statistics</Link>
                <Link className='mr-10' to="/">Applied Jobs</Link>
                <Link className='mr-10' to="/">Blog</Link>
            </nav>
            <button className='text-[20px] text-white px-7 py-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg'>Start Applying</button>

        </div>
    );
};

export default Header;