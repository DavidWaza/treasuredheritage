import React from "react";
import './Dinosaur.css';
import { Container, Row, Col } from "react-bootstrap";

const Dinosaur = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="global_heroBanner watermelon_banner">
              <h1 className="global_title">DINOSAUR DAY</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Dinosaur;
