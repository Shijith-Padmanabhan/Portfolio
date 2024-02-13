import React from 'react';
import Social from './Social/Social';
import './About.css';
import userData from '../userData';

const About = () => {
    const { name, yob, currentCompany, currentLocation, highestEducaion, social: {
        linkedIn,
        github
    } } = userData;
    const age = new Date().getFullYear() - yob; 
    return (
        <div className='about'>
            <div className='heading'>
                <h1 className='heading-text'>About Me.</h1>
            </div>
            <Social/>
            <p>
                Hi, I am {name}, a {age} year old software developer (JavaScript stack), based out of {currentLocation}. I am an {highestEducaion} presently employed with {currentCompany}.
            </p>
            <p>
                Connect with me on <a href={linkedIn} target='_blank' rel="noreferrer">LinkedIn</a> for professional networking! I am game for any kind of conversation with like minded people. Lets have coffee together! Get in touch with me here.
                If you want to work together with me / view my projects, I have my public GitHub repos linked <a href={github} target='_blank' rel="noreferrer">here</a>.
            </p>
            <p>
                If you are looking to have random conversations far from the professional life, do get in touch with me through my social media accounts listed in this page.
            </p>
            <p>
                Wishing you all the very best.
            </p>
            <p>
                Godspeed!
            </p>
            <p>
                Lots of love,<br/> <span className='sign'>{name.split(' ')[0]}</span>.
            </p>
        </div>
    )
}

export default About;