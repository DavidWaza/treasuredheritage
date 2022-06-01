import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "../../../images/icon.png";
import "./Level.css";
import { Link } from "react-router-dom";

const Level = () => {
  return (
    <div>
      <Container>
        <Row className="overlay_bg">
          <Col sm={4}>
            <div className="headerDiv">
              <img src={Icon} alt="" className="icon" />
              <p className="headerTitle">Creche School</p>
            </div>
            <div className="img_card crecheImg"></div>
            <div className="content">
              Our Creche is divided into two categories for effective service
              delivery that will make your baby experience a Minder/Child
              interaction such that the baby hardly misses the motherly
              attention.
            </div>
            <Link to="/level">
              <button className="btn-grade">Learn More</button>
            </Link>
          </Col>
          <Col sm={4}>
            <div className="headerDiv-T">
              <img src={Icon} alt="" className="icon" />
              <p className="headerTitle">Pre-School</p>
            </div>
            <div className="img_card preImg"></div>
            <div className="content">
              Our Pre-School is divided into two categories: The Reception
              classes and the Nursery classes. RECEPTION CLASS: We have
              Reception 1 & 2.
            </div>
            <Link to="/level">
              <button className="btn-grade btn-yellow">Learn More</button>
            </Link>{" "}
          </Col>
          <Col sm={4}>
            <div className="headerDiv">
              <img src={Icon} alt="" className="icon" />
              <p className="headerTitle">Nursery School</p>
            </div>
            <div className="img_card nurseryImg"></div>
            <div className="content">
              Here in THS, our Nursery class starts from age 4. We offer the
              Montessori system of education combined with the British, American
              and Nigerian curriculum.
            </div>
            <Link to="/level">
              <button className="btn-grade">Learn More</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Level;
