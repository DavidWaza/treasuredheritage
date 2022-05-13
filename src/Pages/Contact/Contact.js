import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import Addy from "../../images/locationIcon.png";
import Call from "../../images/phone.png";
import Email from "../../images/email.png";
import { Form } from "./Form";

const headerStyles = {
  textAlign: 'center',
  marginTop:30,
  fontSize:40,
  color: '#892362',
  fontWeight:'bold',
  backgroundColor: 'white',
  opacity:'0.9',
}

const Contact = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Container>
        <Row>
          <Col sm={4}>
            <div className="address_section">
              <div className="inner_section">
                <img src={Addy} alt="" />
                <h2>ADDRESS</h2>
                <p id="name_text">
                  112 Moferere street, off Ajilosun. Behind Ado Local Govt,
                  Health Center. Ado
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="call_section">
              <div className="inner_section">
                <img src={Call} alt="" />
                <h2 style={{ color: "#892362" }}>CONTACT</h2>
                <p style={{ color: "#892362" }} id="name_text">
                  08029246221, 08023055307 08035031946
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="address_section">
              <div className="inner_section">
                <img src={Email} alt="" />
                <h2>EMAIL ADDRESS</h2>
                <p id="name_text_email">info@treasuredheritageschool.com</p>
                <p id="name_text_email">
                  admission@treasuredheritageschool.com
                </p>
                <p id="name_text_email">
                  martina.bominuru@treasuredheritageschool.com
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="contact_bg">
              <header style={headerStyles}>CONTACT US</header>
              <Form />
              </div>          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
