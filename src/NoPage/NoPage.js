import React from 'react';
import { Link } from 'react-router-dom';
import './NoPage.css';
import Footer from '../Footer/Footer';

const NoPage = () => {
  return (
    <div>
      <div className='noPageContainer'>
        <div className='nopage'>
          <h1 className='heading-text'> Sorry, this page does not exist. </h1>
          <Link to='/'><button>Go back to home</button></Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default NoPage;