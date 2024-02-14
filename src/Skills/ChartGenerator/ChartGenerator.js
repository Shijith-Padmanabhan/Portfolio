import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from 'recharts';

const ChartGenerator = ({ skill, name }) => {
    return (
        <RadarChart outerRadius={90} width={400} height={250} data={skill}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <Radar name={name} dataKey="rate" stroke="#000000" fill="#000000" fillOpacity={0.5} />
            <Legend wrapperStyle={{ position: 'relative', marginTop: '-30px' }} />
        </RadarChart>
    )
}

export default ChartGenerator;