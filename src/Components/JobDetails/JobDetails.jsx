import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const [details, setJobDetails] = useState([]);
    const [loading, setLoading] = useState(true); 

    const id = useParams();

    useEffect(() => {
        fetch('/public/data.json')
            .then((res) => res.json())
            .then((data) => {
                setJobDetails(data);
                setLoading(false); 
            });
    }, [id.id]);

    const singleDetails = details.find((singleData) => {
        return parseInt(singleData.id) === parseInt(id.id);
    });

    const handleAdd = (id) => {
        console.log(id)
    }

    return (
        <div className='container mx-auto'>
            <div className='p-10 text-center bg-gray-50'>
                <h1 className='text-3xl md:text-5xl'>Job Details</h1>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : singleDetails ? (
                <div className='grid grid-cols-3 my-10'>
                    <div className='col-span-2'>
                        <div className='mb-5'>
                            <h4 className='text-2xl'>Job Description:</h4>
                            <p className='text-lg'>{singleDetails.job_description}</p>
                        </div>
                        <div className='mb-5'>
                            <h4 className='text-2xl'>Job Responsibility:</h4>
                            <p className='text-lg'>{singleDetails.responsibility}</p>
                        </div>
                        <div className='mb-5'>
                            <h4 className='text-2xl'>Requirement:</h4>
                            <p className='text-lg'>{singleDetails.educational_description}</p>
                        </div>
                        <div className='mb-5'>
                            <h4 className='text-2xl'>Experience:</h4>
                            <p className='text-lg'>{singleDetails.experience}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=> handleAdd(singleDetails.id)} className="px-4 py-3 bg-gray-200">Apply</button>
                    </div>
                </div>
            ) : (
                <div>No job details found</div>
            )}
        </div>
    );
};

export default JobDetails;
