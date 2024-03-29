import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import { faLocationDot, faPhone, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const JobDetails = () => {
    const [details, setJobDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = useParams();

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                setJobDetails(data);

                setLoading(false);
            });
    }, [id.id]);

    const singleDetails = details.find((singleData) => {
        return parseInt(singleData.id) === parseInt(id.id);
    });
    // console.log(singleDetails)

    const handleApply = id => {
        addToDb(id)
        alert('Job Applied')
    }

    return (
        <div className='container mx-auto'>
            <div className='py-5 md:py-10 lg:py-20 text-center bg-gray-50'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl'>Job Details</h1>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : singleDetails ? (
                <div className='grid px-2 lg:grid-cols-3 my-10'>
                    <div className='lg:col-span-2'>
                        <div className='mb-5 w-full md:w-10/12'>
                            <h4 className='text-2xl text-neutral-900 font-semibold'>Job Description:</h4>
                            <p className='text-lg mt-2 text-neutral-500 font-medium'>{singleDetails.job_description}</p>
                        </div>
                        <div className='mb-5 w-full md:w-10/12'>
                            <h4 className='text-2xl text-neutral-900 font-semibold'>Job Responsibility:</h4>
                            <p className='text-lg mt-2 text-neutral-500 font-medium'>{singleDetails.responsibility}</p>
                        </div>
                        <div className='mb-5 w-full md:w-10/12'>
                            <h4 className='text-2xl text-neutral-900 font-semibold'>Requirement:</h4>
                            <p className='text-lg mt-2 text-neutral-500 font-medium'>{singleDetails.educational_description}</p>
                        </div>
                        <div className='mb-5 w-full md:w-10/12'>
                            <h4 className='text-2xl text-neutral-900 font-semibold'>Experience:</h4>
                            <p className='text-lg mt-2 text-neutral-500 font-medium'>{singleDetails.experience}</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center w-full'>
                        <div className='p-6 rounded-t-lg bg-gradient-to-t from-[#d4d5da] to-[#dedae9]'>
                            <h3 className='text-xl text-[#1A1919] font-bold'>Job Details</h3>
                            <hr className='my-2' />
                            <div className='text-lg text-[#757575] mb-3 space-y-2'>
                                <p> <span className='text-[#474747] font-semibold'><FontAwesomeIcon icon={faSackDollar} /> Salary :</span> {singleDetails.salary} (Per Month)</p>
                                <p><span className='text-[#474747] font-semibold'><FontAwesomeIcon icon={faCalendarCheck} /> Job Title :</span> {singleDetails.title}</p>
                            </div>

                            <h3 className='text-xl text-[#1A1919] font-bold'>Contact Information</h3>
                            <hr className='my-2' />

                            <div className='text-lg text-[#757575] mb-3 space-y-2'>
                                <p><span className='text-[#474747] font-semibold'><FontAwesomeIcon icon={faPhone} /> Phone :</span> {singleDetails?.contact_information?.phone}</p>
                                <p><span className='text-[#474747] font-semibold'><FontAwesomeIcon icon={faEnvelope} /> Email : </span>{singleDetails?.contact_information?.email}</p>
                                <p><span className='text-[#474747] font-semibold'><FontAwesomeIcon icon={faLocationDot} /> Address :</span> {singleDetails?.contact_information?.address}</p>
                            </div>

                        </div>

                        <button onClick={() => handleApply(singleDetails.id)} className='py-3 w-3/4 md:w-full px-4 mt-4 border text-xl font-semibold text-white rounded md:rounded-b-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Apply Now</button>
                    </div>
                </div>
            ) : (
                <div>No job details found</div>
            )}
        </div>
    );
};

export default JobDetails;
