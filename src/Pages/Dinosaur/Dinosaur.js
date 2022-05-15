import React from "react";
import "./Dinosaur.css";
import { Container, Row, Col } from "react-bootstrap";
import { DinosaurMap, HeritageSubText, HeritageText } from "../Map/Map";

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
        <Row>
          <Col>
            <p id="text">
              <span style={{ color: "#892362" }}>{HeritageText}</span>{" "}
              {HeritageSubText} Dinosaur Day.
            </p>
          </Col>
        </Row>
        {DinosaurMap.map(({ id, src }) => {
          return (
            <Row>
              <Col key={id} className="imgsrc">
                {src}
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};
export default Dinosaur;
