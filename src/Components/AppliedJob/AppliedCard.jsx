import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AppliedCard = ({ job }) => {
    const { logo, title, company, job_type, location, salary, id } = job;
    console.log(job)
    return (
        <div className="p-3 md:p-5 text-center md:text-start border rounded-md flex flex-col md:flex-row md:items-center gap-3 md:gap-5 lg:gap-8">
            <div>
                <img className="w-[200px] mx-auto md:mx-0 bg-gray-300 py-14 px-5 rounded" src={logo} alt="" />
            </div>
            <div className="flex-1 space-y-2">
                <h3 className='text-2xl mb-2 text-[#474747] font-bold'>{title}</h3>
                <h2 className="text-[#757575] text-xl font-semibold">{company}</h2>
                <div>
                    <button className='mr-4 border border-[#9873FF] py-2 px-6 rounded text-[#9873FF] font-medium hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white'>{job_type[0]}
                    </button>

                    <button className='mr-4 border border-[#9873FF] py-2 px-6 rounded text-[#9873FF] font-medium hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white'>{job_type[1]}</button>
                </div>
                <div className="flex gap-5 text-[#757575] justify-center md:justify-start text-base md:text-lg font-medium">
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faSackDollar} /> Salary : {salary}</p>
                </div>
            </div>
            <div>
                <Link to={`/jobDetails/${id}`}>
                    <button className='py-3 px-4 mt-6 border text-xl font-semibold text-white rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedCard;