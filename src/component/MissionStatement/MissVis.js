import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./MissVis.css";

const MissVis = () => {
  return (
    <>
        <Container>
            <Row  className="missVis_bg g-0">
                <Col sm={6}>
                    <div className='bg'></div>
                </Col>
                <Col sm={6}>
                    <div className='bg_two'></div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default MissVis