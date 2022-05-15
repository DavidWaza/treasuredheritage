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
        {LadyBugMap.map(({ id, src }) => {
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
export default LadyBug;
