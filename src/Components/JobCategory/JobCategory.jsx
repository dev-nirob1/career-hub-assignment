import React from 'react';

const JobCategory = ({ jobCategory }) => {
    const { icon, title, jobAvailable } = jobCategory;
    return (
        <div className='bg-[#7E90FE0D] p-10 rounded-lg'>
            <img className='p-4 mx-auto md:mx-0 bg-[#9873FF0D] rounded-lg' src={icon} alt="icon" />
            <h3 className='mt-10 mb-2 text-[#474747] font-bold text-[20]'>{title}</h3>
            <p className='text-[#A3A3A3] font-medium'>{jobAvailable}</p>
        </div>
    );
};

export default JobCategory;