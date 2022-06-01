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
        <Row>
          {DinosaurMap.map(({ id, src }) => {
            return (
              <Col sm={4} key={id} className="imgDisplay">
              <img src={src} alt='img' className="imgsrc" />
            </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default Dinosaur;
