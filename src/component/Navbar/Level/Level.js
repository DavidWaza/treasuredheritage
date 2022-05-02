import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Level.css";

const Level = () => {
  const LevelHeader = { text: "Our Levels" };
  const Paragraph = [
    " Treasured Heritage consists of FOUR Levels united by a commitment to providing education of the highest quality   Every level is led by reputable academics dedicated to driving innovation in research and learning. Discover the programs available in each level.",
  ];

  return (
    <div>
      <Container>
        <Row className="overlay_bg">
          <Col sm={12}>
            <Container fluid>
              <Row>
                <Col sm={4}>
                  <div className="Level">
                    <p className="level_text">{LevelHeader.text}</p>
                  </div>
                  <div className="paragraph">{Paragraph}</div>
                  <button className="ui button btn-pry">Show more</button>
                </Col>
                <Col sm={8}>
                  <Row className="g-1">
                    <Col sm={6}>
                      <div className="creche">
                        <h2 className="header_title">Creche</h2>
                        <p className="school_text">
                          Our Creche is divided into two categories for
                          effective service delivery that will make your baby
                          experience a Minder/Child interaction such that the
                          baby hardly misses the motherly attention.
                        </p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="creche">
                        <h2 className="header_title">Pre-School</h2>
                        <p className="school_text">
                          Our Pre-School is divided into two categories: The
                          Reception classes and the Nursery classes. RECEPTION
                          CLASS: We have Reception 1 & 2.
                        </p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="creche">
                        <h2 className="header_title">Nursery</h2>
                        <p className="school_text">
                          Here in THS, our Nursery class starts from age 4. We
                          offer the Montessori system of education combined with
                          the British, American and Nigerian curriculum.
                        </p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="creche">
                        <h2 className="header_title">Grade</h2>
                        <p className="school_text">
                          Our Grades classes 1 to 5. In THS, the terminating
                          class is Grade 5. Like in our Pre-School, we adopt a
                          combination of both the Conventional and the
                          Montessori methods of teaching.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Level;
