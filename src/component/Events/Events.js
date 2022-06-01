import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Events.css";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Events = () => {
  const dateToFormat = new Date();
  const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <>
      <Container>
        <Row className="event_bg">
          <Col sm={6}>
            <div className="event_note">
              <header style={{ fontSize: 25, color: "#892362" }}>
                Our Activities & Events
              </header>
              <p style={{ paddingTop: 4, fontSize:"1.0375rem"}}>See our Upcoming Events</p>
              <p style={{ fontSize: "1.1375rem", lineHeight: "1.6875rem" }}>
                At THS, there is always something exciting happening. Take a
                look at our upcoming events, and see what we’re doing now.
              </p>
              <Link to="/calendar">
                <div
                  className="ui button"
                  style={{ backgroundColor: "#892362", color: "#fff" }}
                >
                  See all Events
                </div>
              </Link>
            </div>
          </Col>
          <Col sm={6}>
            <Col className="holiday_api_bg">
              <Row>
                <Col sm={4} xs={12}>
                  <div className="holiday_api_date">
                    <h2 className="date">
                      <Moment format="MMMM">{dateToFormat}</Moment>
                      <br />
                      <Moment format="DD">{dateToFormat}</Moment>
                    </h2>
                  </div>
                </Col>
                <Col sm={8}>
                  <div className="holiday_event">
                    <p style={{ color: "#892362" }}>
                      <Moment format="dddd">{dateToFormat}</Moment>{" "}
                      {weekDay === true ? '(School)' : '(No School)'}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Events;
