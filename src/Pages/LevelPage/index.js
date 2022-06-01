import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import "./index.css";

const bannerText = { text: "Treasured Heritage School" };
const bannerSubText = { text: "A Montesorri School" };
const sectionTitle = { text: "Academic Activities" };
const sectionContent = [
  "Treasured Heritage School (THS) is a Christian Montessori School that offers educational services from Creche to Grade levels. We are poised to build a total child that is spiritually, morally and academically sound, exuding self confidence that can make the child compete favourably with his/her contemporaries in any part of the world. Our safe and conducive environment where external disturbances and distractions are completely eliminated or reduced to the barest minimum makes our school the ideal place to put your child/ward. Treasured Heritage School was established in the year 2014.",
];

const index = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="overlay"></div>
            <div className="belowlay"></div>
            <div className="banner">
              <p className="bannerText">{bannerText.text}</p>
              <p className="bannerSubText">{bannerSubText.text}</p>
            </div>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col sm={4}>
              <SectionTitle title={sectionTitle.text} />
              <div className="line"></div>
            </Col>
            <Col sm={6}>
              <div className="sectionContent">
                <p>{sectionContent}</p>
              </div>
            </Col>
          </Row>
          <Row className="ad">
            <Col sm={6}>
              <div className="ad-img">
              </div>
            </Col>
            <Col sm={6}>
              <div >
                <p className="bigText">Apply for Admission</p>
                <p className='smallText'>
                <div className="line yellow-line"></div>
                  We don’t just give students an education and experience that
                  sets them up for success in a career, we help them succeed in
                  their career—to discover a field they’re passionate about and
                  dare to lead it.
                </p>
              </div>
              <Link to='/portal'>
              <button className="btn-grade btn-ad">join us</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default index;
