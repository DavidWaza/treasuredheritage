import React from "react";
import "./penquine.css";
import { Container, Row, Col } from "react-bootstrap";
import { HeritageSubText, HeritageText, PenguinMap } from "../Map/Map";

const penquine = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="global_heroBanner penquine_banner">
              <h1 className="global_title">PENGUIN DAY</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p id="text">
              <span style={{ color: "#892362" }}>{HeritageText}</span>{" "}
              {HeritageSubText} penguin Day.
            </p>
          </Col>
        </Row>

        <Row style={{ display: "flex" }}>
          {PenguinMap.map(({ id, src }) => {
            return (
              <Col sm={4} key={id} className="imgDisplay">
                <img src={src} alt="img" className="imgsrc" />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default penquine;
