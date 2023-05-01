import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import Features from '../FeaturesJob/Features';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <section className='md:flex md:flex-row justify-between items-center mt-10'>
                <div className='md:w-1/2'>

                    <h1 className='text-4xl md:text-7xl font-bold'>One Step <br /> <span> Closer To Your </span> <br /><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span> </h1>

                    <p className='text-[#757575] my-6 md:my-8 text-lg md:text-xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                    <button className='text-lg md:text-[20px] px-5 md:px-7 py-4 md:py-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg font-semibold text-white'>Get Started</button>
                </div>

                <div className='md:w-1/2'>
                    <img src="../../../public/assets/All Images/P3OLGJ1 copy 1.png" alt="banner Image" />
                </div>
            </section>
            <JobCategory></JobCategory>
            <Features></Features>
        </div>

    );
};

export default Banner;