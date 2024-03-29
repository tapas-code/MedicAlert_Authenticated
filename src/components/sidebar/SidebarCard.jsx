import React from 'react'
import { Nav } from 'react-bootstrap'
import ArrowSvg from '../../assets/svg/rightarrow.svg'

const SidebarCard = ({title, handleClick}) => {
  return (
    <div className='d-flex justify-content-between mb-4' onClick={handleClick}>
      <Nav.Link className='fw-medium font--medium'>{title}</Nav.Link>
      <img src={ArrowSvg} alt='right arrow' width='20px'/>
    </div>
  )
}

export default SidebarCard
