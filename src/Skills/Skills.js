import React from 'react';
import userData from '../userData';
import ChartGenerator from './ChartGenerator/ChartGenerator';
import './Skills.css';

const Skills = () => {
    const { skills } = userData;
    const charts = Object.keys(skills).map(skillType => <ChartGenerator skill={skills[skillType]} name={skillType} />)
    return (
        <div className='skills' id="skills" name="skills">
            <div className='heading'>
                <h1 className='heading-text'>
                    Skills.
                </h1>
            </div>
            <div className='skill-container'>
                {charts}
            </div>
        </div>
    )
}

export default Skills;