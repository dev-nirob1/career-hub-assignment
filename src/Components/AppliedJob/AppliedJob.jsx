import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

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
    console.log(jobs)

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
        <div className='container mx-auto'>
            <div className='text-right mb-5'>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobCategory('all')}><a>All</a></li>
                        <li onClick={() => handleJobCategory('On Site')}><a>Onsite</a></li>
                        <li onClick={() => handleJobCategory('Full Time')}><a>Full Time</a></li>
                        <li onClick={() => handleJobCategory('Part Time')}><a>Part Time</a></li>
                        <li onClick={() => handleJobCategory('Remote')}><a>Remote</a></li>
                    </ul>
                </div>
            </div>

        {
            jobs.length
        }
        </div>
    );
};

export default AppliedJob;