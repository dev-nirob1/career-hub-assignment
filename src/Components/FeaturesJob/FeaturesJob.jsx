import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';

const FeaturesJob = () => {
    const [jobsInfo, setJobsInfo]= useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setJobsInfo(data))
    },[])

    const [displayCard, setDisplayCard] = useState(4);

    const handleSeeMoreBtn = () => {
        setDisplayCard(jobsInfo.length);
    }

    return (
        <div>
            <section className='container mx-auto mt-32'>

                <h2 className='text-center text-5xl font-bold'>Featured Jobs</h2>

                <p className='text-center mt-4 mb-8 font-medium text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid md:grid-cols-2 gap-6'>

                    {
                        jobsInfo.slice(0, displayCard).map(jobInfo => <JobCard key={jobInfo.id}
                        jobInfo={jobInfo}
                        ></JobCard>)
                    }
                </div>

                {displayCard < jobsInfo.length && (
                    <button className='block mx-auto my-10 py-4 px-7 border text-xl font-semibold text-white rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]' onClick={handleSeeMoreBtn}>See All Jobs</button>
                )}

            </section>

        </div>
    );
};

export default FeaturesJob;