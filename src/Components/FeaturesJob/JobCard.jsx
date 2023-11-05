import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ jobInfo }) => {
    const { id, logo, title, company, job_type, location, salary } = jobInfo;
    console.log(jobInfo)
    return (
        <div className='border border-[#E8E8E8] p-10 rounded-lg '>
            <img className='w-[120px]' src={logo} alt="" />

            <h2 className='text-2xl mt-8 mb-2 text-[#474747] font-bold'>{title}</h2>

            <p className='text-[#757575] text-xl font-semibold'>{company}</p>

            <div className='my-4'>
                <button className='mr-4 border border-[#9873FF] py-2 px-6 rounded text-[#9873FF] font-medium hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white'>{job_type[0]}
                </button>

                <button className='mr-4 border border-[#9873FF] py-2 px-6 rounded text-[#9873FF] font-medium hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white'>{job_type[1]}</button>
            </div>

            <div className='flex text-[#757575] text-xl font-medium'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>

            <Link to={`/jobDetails/${id}`}>
            <button className='py-3 px-4 mt-6 border text-xl font-semibold text-white rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details</button>
            </Link>

        </div>
    );
};

export default JobCard;