import React from 'react';
import { Image } from 'react-bootstrap';
import PatientImg from '../../assets/images/patient.png';

const Center = () => {
  return (
    <>
      <div className='position-relative d-flex justify-content-center pt-3'>
        <Image src={PatientImg} alt='patient image' />
        <div className='bg-white position-absolute bottom-0 w-50 rounded-top-4 d-flex flex-column align-items-center p-2' style={{maxWidth:'200px'}}>
            <h2 className='fs-5 fw-bold mb-0'>Susan</h2>
            <p className='font--small mb-0 pb-2'>Member since 2010</p>
        </div>
      </div>
    </>
  )
}

export default Center
