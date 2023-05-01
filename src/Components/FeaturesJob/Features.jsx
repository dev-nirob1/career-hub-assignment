import React from 'react';

const Features = ({jobInfo}) => {
    console.log(jobInfo)
    const {logo, company, title, location, salary} = jobInfo;
    return (
        <div>
            <img src={logo} alt="logo" />
            <h4>{title}</h4>
            <p>{company}</p>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
        </div>
    );
};

export default Features;