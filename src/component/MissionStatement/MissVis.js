import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MissVis.css";
import diamond from "../../images/diamond.gif";
import eye from "../../images/vision.png";

const MissVis = () => {
  return (
    <>
      <Container>
        <Row className="missVis_bg g-0">
          <Col sm={6}>
            <div className="bg">
              <img src={diamond} alt="gif" className="diamond" />
              <div className="mission_state">
                <h4>Our Mission</h4>
              </div>
              <p className="mission_para">
                1. Provide a sound Montessori system of education required{" "}
                <br />
                for the acquisition of relevant knowledge and skills.
                <br />
                <br />
                2. Groom children that can compete favourably on a global level.
                <br />
                <br />
                3. Develop children of faith with godly character
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <div className="bg_two">
              <img src={eye} alt="" className="diamond" />
              <div className="mission_state">
                <h4 className="vision_title">Our Vision</h4>
              </div>
              <p className="mission_para" style={{ color: "#fff" }}>
                1. To be among the foremost providers of all-round qualitative
                education in Nigeria.
                <br />
                <br />
                2. A Citadel where leaders with high spiritual, moral and
                intellectual values are raised.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MissVis;
