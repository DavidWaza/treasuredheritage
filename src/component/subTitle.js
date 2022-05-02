import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const subTitle = (props) => {
  const styles = {
    marginTop: 40,
    marginBottom: 2,
    padding: "20px 30px",
    color: "#fff",
    borderColor:"3px solid black"
  };

  return (
    <div>
      <Container>
        <Row>
          <Col style={styles}>
            <h3>{props.title}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default subTitle;
