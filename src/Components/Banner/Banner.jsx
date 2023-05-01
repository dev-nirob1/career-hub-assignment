import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import Features from '../FeaturesJob/Features';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <section className='flex justify-between items-center'>
                <div className=' w-1/2'>

                    <h1 className='text-7xl font-bold'>One Step <br /> <span> Closer To Your </span> <br /><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span> </h1>

                    <p className='text-[#757575] my-8 text-xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                    <button className='text-[20px] px-7 py-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-white'>Get Started</button>
                </div>

                <div className='w-1/2'>
                    <img src="../../../public/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </section>
            <JobCategory></JobCategory>
            <Features></Features>
        </div>

    );
};

export default Banner;