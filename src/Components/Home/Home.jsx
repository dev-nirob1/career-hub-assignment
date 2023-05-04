import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import Features from '../FeaturesJob/Features';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobsInfo = useLoaderData();
    const [jobCategoryData, setJobCategoryData] = useState([]);

    useEffect(() => {
        fetch('JobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategoryData(data))
    }, []);

    const handleViewDetailsBtn = (id) =>{
        console.log(id)
    }

    const [displayCard, setDisplayCard] = useState(4);

    const handleSeeMoreBtn = () => {
        setDisplayCard(jobsInfo.length);
    }

    return (
        <div>
            <Banner></Banner>
            <section className='container mx-auto mt-32'>

                <h2 className='text-center text-5xl font-bold'>Job Category List</h2>

                <p className='text-center mt-4 mb-8 font-medium text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols-1 text-center md:text-left md:grid-cols-4 gap-6'>
                    {
                        jobCategoryData.map(jobCategory => <JobCategory jobCategory={jobCategory} key={jobCategory.id}></JobCategory>)
                    }
                </div>

            </section>

            <section className='container mx-auto mt-32'>

                <h2 className='text-center text-5xl font-bold'>Featured Jobs</h2>

                <p className='text-center mt-4 mb-8 font-medium text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:grid grid-cols-2 gap-6'>
                    {
                       jobsInfo.slice(0, displayCard).map(jobInfo => <Features key={jobInfo.id} jobInfo={jobInfo} handleViewDetailsBtn={handleViewDetailsBtn}></Features>)
                    }
                </div>

                {displayCard < jobsInfo.length && (
                    <button className='block mx-auto my-10 py-4 px-7 border text-xl font-semibold text-white rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]' onClick={handleSeeMoreBtn}>See All Jobs</button>
                )}

            </section>

        </div>

    );
};

export default Home;