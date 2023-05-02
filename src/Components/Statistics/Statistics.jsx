import React from 'react';
import {  Pie, PieChart, PolarGrid, Tooltip } from 'recharts';

const Statistics = () => {
    const data = [
        {
            assignment: "Assignment-1",
            result: 57
        },
        {
            assignment: "Assignment-2",
            result: 59
        },
        {
            assignment: "Assignment-3",
            result: 60
        },
        {
            assignment: "Assignment-4",
            result: 55
        },
        {
            assignment: "Assignment-5",
            result: 60
        },
        {
            assignment: "Assignment-6",
            result: 56
        },
        {
            assignment: "Assignment-7",
            result: 56
        }
    ]

    return (
        <div className='text-center mt-10'>
            <h3 className='text-4xl text-bold'>Statistics of My 7 Assignment Results in Pie Chart</h3>

            <div >
                <PieChart className='mx-auto' width={500} height={500}>
                    <Pie data={data} dataKey="result" nameKey="assignment" outerRadius={200} innerRadius={20} fill="#8884d8"></Pie>
                    <Tooltip />
                    <PolarGrid />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;