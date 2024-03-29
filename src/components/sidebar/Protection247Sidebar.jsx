import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import LeftArrow from '../../assets/svg/leftarrow.svg'
import SidebarCard from './SidebarCard'

const Protection247Sidebar = ({show, onHide, onBack}) => {
  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement='end' className='side--bar rounded-start-5'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
            <img src={LeftArrow} alt="" width={16} onClick={onBack}/>
            </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
        <h6 className='text-primary sidebar--header mb-3 fw-bold' style={{fontSize:'.7rem'}}>24/7 PROTECTION</h6>

        <SidebarCard title={"Renew Plan"}/>
        <SidebarCard title={"Compare Plans"}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Protection247Sidebar
