import React from 'react'
import './FormBanner.css';

const FormError = ({submitError, submitSuccessful, formError}) => {
  if(formError) {
    return (
      <div className='formError'>
          <p> Please fill all the fields, thank you.</p>
      </div>
    )
  }
  else if (submitError) {
    return (
      <div className='formError'>
          <p> Was not sent successfully, please try again.</p>
      </div>
    )
  }
  else if( submitSuccessful) {
    return (
      <div className='formSuccess'>
          <p> Sent successfully. Thank you for your message!</p>
      </div>
    )
  }
}

export default FormError;