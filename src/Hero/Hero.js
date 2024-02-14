import { React } from 'react-dom';
import { ReactTyped } from "react-typed";
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import userData from '../userData' 


const Hero = () => {
    const { name, adjectives } = userData;
    return (
        <div className='hero-image'>
            <div className='hero-content'>
            <div className='grid-container'>
                <div className='grid-child'>
                    <div className='img-container'>
                        <img src={'/'+name+'.jpeg'} alt='face shot' className='my-photo'></img>
                    </div>
                </div>
                <div className='grid-child banner-text'>
                    <p className='hello'>
                        Hello World!
                    </p>
                    <p className='i-am'>
                        I am <span className='name'>{name}.</span>
                    </p>
                    <p className='i-am'>
                        I am <ReactTyped strings={adjectives} typeSpeed={20} backSpeed={10} loop />
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero;