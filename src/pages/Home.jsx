import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Left from '../components/main/Left'
import Center from '../components/main/Center'
import Right from '../components/main/Right'

const Home = () => {
  return (
    <>
      <Container className=''>
        <Row>
            <Col md={{order: 'first'}} className='col-12 col-sm-12 col-md-12 col-lg-4 d-flex flex-column pt-4 gap-4'>
                <Left />
            </Col>
            <Col lg={{order: 'last'}} className='col-12 col-sm-12 col-md-12 col-lg-4 d-flex flex-column justify-content-end pt-4 ps-4'>
                <Right />
            </Col>
            <Col className='col-12 col-sm-12 col-md-12 col-lg-4 pt-4'>
                <Center />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
