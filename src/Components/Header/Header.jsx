import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='flex border justify-between items-center container mx-auto h-20'>
            <h2 className='text-4xl font-bold'>JobFinder</h2>
            <nav>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/applied-job">Applied Jobs</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </nav>
            <button className='text-[20px] text-white px-7 py-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg'>Start Applying</button>

        </div>
    );
};

export default Header;