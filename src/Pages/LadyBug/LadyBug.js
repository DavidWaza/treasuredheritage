import React from "react";
import "./LadyBug.css";
import { Container, Row, Col } from "react-bootstrap";
import { HeritageSubText, HeritageText, LadyBugMap } from "../Map/Map";

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
        <Row>
          <Col>
            <p id="text">
              <span style={{ color: "#892362" }}>{HeritageText}</span>{" "}
              {HeritageSubText} Lady Bug Day
            </p>
          </Col>
        </Row>
        <Row>
          {LadyBugMap.map(({ id, src }) => {
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
export default LadyBug;
