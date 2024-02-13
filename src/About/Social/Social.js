import React from 'react';
import userData from '../../userData';
import AnchorImages from './AnchorImages/AnchorImages';
import './Social.css';

const Social = () => {
    const { social } = userData;
    const images = Object.keys(social).map(account => {
        return <AnchorImages url={social[account]} account={account}/>
    })
  return (
    <div className='social'>
        {images}
    </div>
  )
}

export default Social;