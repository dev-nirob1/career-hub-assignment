import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedCard from './AppliedCard';

const AppliedJob = () => {
    const jobsData = useLoaderData()
    const [appliedJobData, setAppliedJobData] = useState([])
    const [jobs, setJobs] = useState([])
    // console.log(appliedJobData, jobs)

    const handleJobCategory = category => {
        if (category === 'all') {
            setJobs(appliedJobData);
        }

        else {
            const filteredJobs = appliedJobData.filter(applied => applied.category === category);
            setJobs(filteredJobs);
        }
    }
    // console.log(jobs)

    useEffect(() => {
        let cart = []
        const applieddJob = getShoppingCart()
        for (const id in applieddJob) {
            const foundJob = jobsData.find(job => (parseInt(job.id) === parseInt(id)))
            if (foundJob) {
                cart.push(foundJob)
            }
        }
        setAppliedJobData(cart)
        setJobs(cart)
    }, [jobsData])


    return (
        <>
            <div className='py-5 md:py-10 lg:py-20 text-center bg-gray-50'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl'>Applied Jobs</h1>
            </div>
            <div className='container my-5 md:my-10 lg:my-16 mx-auto'>

                <div className='text-right mb-5'>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn m-1">Filter By <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </label>
                        
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobCategory('all')}><a>All</a></li>
                            <li onClick={() => handleJobCategory('On Site')}><a>Onsite</a></li>
                            <li onClick={() => handleJobCategory('Full Time')}><a>Full Time</a></li>
                            <li onClick={() => handleJobCategory('Part Time')}><a>Part Time</a></li>
                            <li onClick={() => handleJobCategory('Remote')}><a>Remote</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        jobs.map(job => <AppliedCard key={job.id} job={job} />)
                    }
                </div>
            </div>
        </>
    );
};


export default AppliedJob;