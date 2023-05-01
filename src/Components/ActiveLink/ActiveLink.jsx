import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({isActive})=>
            `md:mr-10 text-lg font-medium text-[#757575] ${isActive ? 'text-[#7E90FE]' : ''}`}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;