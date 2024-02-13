import React from 'react';
import './AnchorImages.css';

const AnchorImages = ({url, account}) => {
  return (
    <a href={url} target='_blank' rel="noreferrer">
        <img src={'/'+account+'.png'} alt={account} className='social-image'/>
    </a>
  )
}

export default AnchorImages;