import React from "react";
import './LadyBug.css';
import { Container, Row, Col } from "react-bootstrap";

const LadyBug = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="global_heroBanner Ladybug_banner">
              <h1 className="global_title">LADY BUG DAY</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LadyBug;
