import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import WatchImg from "../../../assets/images/watch.png"

const MegaMenuAd = () => {
  return (
    <>
      <div className=''>
        <Container className='bg--green p-3 mb-4 rounded-4'>
             <p className='fs-4 w-75 lh-sm'>QR Code Medical Id for Apple Watch</p>
             <p className='fs-6 lh-sm'>⭐⭐⭐⭐⭐</p>
             <div className=' d-flex justify-content-center'>
              <Image fluid className='ad--img w-75 ms-2' src={WatchImg} alt="watch image"/>
             </div>
        </Container>
        <Button variant='outline-dark rounded-5 w-100'>Renew</Button>
      </div>
    </>
  )
}

export default MegaMenuAd
