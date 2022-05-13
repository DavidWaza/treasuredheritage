import "./AboutSection.css";
import { Container, Row, Col } from "react-bootstrap";
import DiamondSmall from "../../../images/diamondxs.png";
import VisionSmall from "../../../images/visionxs.png";

const AboutSection = () => {
  const AboutHeader = { text: "what we do" };
  const AboutSubHeader = [
    "Treasured Heritage School (THS) is a Christian Montessori  School that offers educational services from Creche to Grade levels. We are poised to build a total child that is spiritually, morally and academically sound, exuding self  confidence that can make the child compete favourably with his/her contemporaries in any part of the world.",
  ];
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col className="text_section" style={{ paddingTop: 25 }}>
              <h3>ABOUT THS</h3>
              <a href="#About">
                <p style={{ marginBottom: 20 }}>Know More {'>'} </p>
              </a>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={6}>
              <div className="image_abt"></div>
            </Col>
            <Col sm={6}>
              <div>
                <h4 className="ui header "> {AboutHeader.text} </h4>
                <p style={{ fontSize: "1.1357rem" }} className="subHeader">
                  {AboutSubHeader}
                </p>
              </div>
              <Row style={{ paddingLeft: 30, marginTop: 20 }}>
                <Col sm={6}>
                  <img src={DiamondSmall} className="small_png" alt="" />
                  <div className="mission_div">
                    <div className="header_head">
                      <header>Our Mission</header>
                    </div>
                    <p>
                       Provide a sound Montessori system of education required{" "}
                      <br />
                      for the acquisition of relevant knowledge and skills.
                      <br />
                      <a href="#MisVis"><div className="ui button" style={{marginTop:15}}>Show more</div></a>
                      <br />
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <img src={VisionSmall} className="small_png" alt="" />
                  <div>
                    <div className="header_head">
                      <header>Our Vision</header>
                    </div>
                    <p>
                      To be among the foremost providers of all-round
                      qualitative education in Nigeria.
                      <br />
                      <div className="ui button" style={{marginTop:35}}>Show more</div>
                      <br />
                      </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default AboutSection;
