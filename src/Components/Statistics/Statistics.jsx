import React from 'react';
import { Pie, PieChart, ResponsiveContainer, PolarGrid, Tooltip } from 'recharts';

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
    ];

    return (
        <div className='text-center mt-10'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Statistics of My 7 Assignment Results in Pie Chart</h3>

            <div className='w-full'>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
                        <Pie data={data} dataKey="result" nameKey="assignment" outerRadius={150} innerRadius={20} fill="#8884d8"></Pie>
                        <Tooltip />
                        <PolarGrid />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
