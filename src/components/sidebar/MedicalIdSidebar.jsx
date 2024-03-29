import React from 'react'
import { Offcanvas, Button, Nav, Container, Image } from 'react-bootstrap'
import LeftArrow from '../../assets/svg/leftarrow.svg'
import mid_data from '../../data/MedIdMegaMenuData'
import SidebarCard from './SidebarCard'
import WatchImg from '../../assets/images/watch.png'

const MedicalIdSidebar = ({show, onHide, onBack}) => {
  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement='end' className='side--bar rounded-start-5'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='ps-2'>
            <img src={LeftArrow} alt="" width={16} onClick={onBack}/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=''>
            <h6 className='text-primary sidebar--header mb-3 fw-bold' style={{fontSize:'.7rem'}}>MEDICAL IDS</h6>

            {mid_data && mid_data.map(c => <SidebarCard key={c.id} title={c.title}/>)}

            <Container className='bg--green p-3 mt-5 rounded-4'>
                <p className='fs-5 fw-medium'>QR Code Medical Id for Apple Watch</p>
                <p className='fs-6 lh-sm'>⭐⭐⭐⭐⭐</p>
                <div className='d-flex justify-content-center'>
                    <Image fluid src={WatchImg} alt="" />

                </div>
            </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default MedicalIdSidebar
