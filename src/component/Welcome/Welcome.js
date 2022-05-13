import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Welcome.css";

const Welcome = () => {
  const WelcomeTitle = { text: "Welcome to THS" };
  return (
    <div>
      <Container>
        <Row className="g-0">
          <Col sm={6}>
            <div className="welcome_img"></div>
          </Col>
          <Col sm={6}>
            <div className="ui raised segment welcome_note ">
              <h2 className="welcome_title"><strong>{WelcomeTitle.text}</strong></h2>
              <div className="welcome_text">
                <p style={{ color: "#892362" }}>
                  <strong>Welcome</strong>
                </p>
                <p style={{fontSize:"1.1357rem"}}>
                  It is my pleasure to welcome you to our website. We are
                  particularly delighted that you have created time to visit
                  this site. <br />
                  This site is the official platform for the dissemination of
                  information to the general public and to members of the
                  Treasured Heritage School community in particular. We have
                  made the site very interactive where you can access every
                  information on THS, and also express your views about us.{" "}
                  <br />
                  It is my sincere belief that after this visit, you will have a
                  very positive view about us. And we hope this will not be your
                  last.
                  <br />
                  We look forward to hearing from you very soon
                </p>
                <p style={{fontSize:"1.1357rem"}}>Yours in the affairs of moulding lives.</p>
                <p style={{ color: "#892362" }}>
                  Martina George - Bominuru(Mrs)
                </p>
                Proprietress
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
