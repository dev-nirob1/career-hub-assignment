import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
    const jobsData = useLoaderData()
    // console.log(appliedJobData, jobs)
    let cart = []
    const applieddJob = getShoppingCart()
    for (const id in applieddJob) {
        const foundJob = jobsData.find(job => (parseInt(job.id) === parseInt(id)))
        if (foundJob) {
            cart.push(foundJob)
        }
    }
    console.log(cart)

    return (
        <div className='container mx-auto'>
            <div className='text-right'>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;