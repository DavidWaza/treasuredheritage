import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Calendar.css";
import CalendarEvent from "./CalendarEvent";
import ParentImg from "../images/parent.jpg";
import Anoint from "../images/anoint.jpg";
import ChildPlay from "../images/childPlay.jpg";
import Cat from "../images/cat.jpg";
import CatPre from "../images/catpre.jpg";
import Submission from "../images/submission.jpg";
import Democracy from "../images/democracy.jpg";
import OpenHouse from "../images/open.jpg";
import Break from "../images/break.jpg";
import Father from "../images/father.jpg";
import Ramadan from "../images/idifatir.jpg";
import Revise from "../images/revise.jpg";
import Dress from "../images/dress.jpg";

const Calendar = () => {
  const Month = {
    fontSize: 25,
    color: "#892362",
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="global_heroBanner calendar_banner">
              <h1 className="global_title">All Events</h1>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: "center", marginTop: 15 }}>
          <h1>
            ACADEMIC CALENDER
            <br />
            HIGHER GROUND (3rd) TERM 2021/2022 ACADEMICS SESSION
          </h1>
          <h3>Monday 9th MAY – Friday 29th JULY 2022 (13 WEEKS)</h3>
        </div>

        {/* MAY */}

        <Row style={{ marginTop: 25 }}>
          <p style={Month}>MAY</p>
          <Col sm={4}>
            <CalendarEvent
              img={ParentImg}
              header="Parents Teachers Forum"
              date="Saturday, 21st MAY"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={Anoint}
              header="Anointing Service"
              date="Wednesday, 25th MAY"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={ChildPlay}
              header="Children's Day"
              date="Friday, 27th MAY"
            />
          </Col>
        </Row>

        {/* JUNE */}

        <Row style={{ marginTop: 25 }}>
          <p style={Month}>JUNE</p>
          <Col sm={4}>
            <CalendarEvent
              img={Submission}
              header="Submission of Examination Question "
              date="Friday, 3rd JUNE"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={Cat}
              header="1st Continuous Assessment (Grade Level)"
              date="Monday 30th - Friday 3rd JUNE"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={CatPre}
              header="Skill Practice (Preschool) "
              date="Monday 6th– Friday 10th JUNE"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 12 }}>
          <Col sm={4}>
            <CalendarEvent
              img={Democracy}
              header="Democracy Day "
              date="Sunday 12th JUNE,"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={OpenHouse}
              header="Open House"
              date="Friday 10th  JUNE"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={Break}
              header="Mid-Term Break "
              date="Friday 10th,  JUNE"
            />
          </Col>
          <Col sm={4} style={{ marginTop: 15 }}>
            <CalendarEvent
              img={Father}
              header="Father's Day "
              date="Friday 17th, JUNE"
            />
          </Col>
        </Row>

        {/* JULY */}

        <Row style={{ marginTop: 25 }}>
          <p style={Month}>JULY</p>
          <Col sm={4}>
            <CalendarEvent
              img={Cat}
              header="2nd Continuous Assessment (Grade Level)"
              date="Monday 1st - Friday 8th JULY"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={Ramadan}
              header="Id el Kabir"
              date=" Sunday 10th - Monday 11th JULY"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={Revise}
              header="Revision/teaching"
              date="Tuesday 12th – Friday 15th JULY"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 12 }}>
          <Col sm={4}>
            <CalendarEvent
              img={Revise}
              header="Examination "
              date="Monday 18th – Friday 22nd JULY,"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              img={Dress}
              header="Dress Rehearsal"
              date="Monday 25th - Tuesday 27th JULY"
            />
          </Col>
          <Col sm={4}>
            <CalendarEvent
              //   img={Break}
              header="Mid-Term Break "
              date="Friday 10th,  JUNE"
            />
          </Col>
          <Col sm={4} style={{ marginTop: 15 }}>
            <CalendarEvent
              //   img={Father}
              header="Father's Day "
              date="Friday 17th, JUNE"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calendar;
