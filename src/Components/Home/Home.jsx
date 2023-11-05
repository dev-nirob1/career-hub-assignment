import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturesJob from '../FeaturesJob/FeaturesJob';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const [jobCategoryData, setJobCategoryData] = useState([]);

    useEffect(() => {
        fetch('JobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategoryData(data))
    }, []);



    
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
            <FeaturesJob></FeaturesJob>

        </div>

    );
};

export default Home;