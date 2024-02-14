import React from 'react';
import './Footer.css';
import userData from '../userData';
import Social from '../About/Social/Social';

const Footer = () => {
    const { name } = userData;
    return (
        <div className='footer-container'>
            <div className='footer'>
            <div>
                <p title="Head over to my GitHub to check out the src!" className='low-margin-p'><b>&#169; {new Date().getFullYear()}</b>. No rights reserved.</p>
                <p className='low-margin-p'>Feel free to copy!</p>
                <p className='low-margin-p'>
                    Made with <span className='red'>&#9829;</span> in India using <span ><a href='https://react.dev/' target='_blank' rel="noreferrer">
                    <img className='imageSpan' src='/React.png' alt='react'/></a></span>!
                </p>
            </div>

            <div>   
                <h1 className='heading-text sign footer-sign'>
                    {name}
                </h1>
            </div>
            <div>
                <p className='low-margin-p'>Find me everywhere at:</p>
                <Social />
            </div>
        </div>
        <div className='footer-end'>

        </div>
        </div>
    )
}

export default Footer;;