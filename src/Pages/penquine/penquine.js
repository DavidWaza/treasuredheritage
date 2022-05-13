import React from "react";
import "./penquine.css";
import { Container, Row, Col } from "react-bootstrap";
// import { Images } from "./PenguinMap";

 const Images = [
  {
    id: 1,
    src: require("../../images/ALL PICTURE/penguin/11.JPG"),
  },
  {
    id: 2,
    src: require("../../images/ALL PICTURE/penguin/12.JPG"),
  },
  {
    id: 3,
    src: require("../../images/ALL PICTURE/penguin/13.JPG"),
  },
  {
    id: 4,
    src: require("../../images/ALL PICTURE/penguin/14.JPG"),
  },
  {
    id: 5,
    src: require("../../images/ALL PICTURE/penguin/15.JPG"),
  },
  {
    id: 6,
    src: require("../../images/ALL PICTURE/penguin/16.JPG"),
  },
  {
    id: 7,
    src: require("../../images/ALL PICTURE/penguin/17.JPG"),
  },
  {
    id: 8,
    src: require("../../images/ALL PICTURE/penguin/18.JPG"),
  },
];

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
              <span style={{ color: "#892362" }}>
                AT TREASURED HERITAGE SCHOOLS,
              </span>{" "}
              we are known for creating real life experiences for our treasures
              to teach them about the world and its inhabitants! Here are some
              pictures from out Penguin Day.
            </p>
          </Col>
        </Row>
        {Images.map((image) => {
          return (
            <Row>
              <Col sm={4} className="imgsrc" key={image.id}>
                {image.src}
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default penquine;
