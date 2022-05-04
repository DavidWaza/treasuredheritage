import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../About/AboutPage.css";
import "./GalleryPage.css";
const Gallery = () => {
  const imgSize = {
    height: "50vh",
    width: "100%",
  };
  const Pic1 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2020/08/003155-scaled.jpg",
  ];
  const Pic2 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2020/08/003194-scaled.jpg",
  ];
  const Pic3 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/10/world-teachers-day-2019-22.jpg",
  ];
  const Pic4 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/10/cultural-day-2019-22.jpg",
  ];
  const Pic5 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/10/ths-pupils.jpg",
  ];
  const Pic6 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/10/graduation-2019.jpg",
  ];
  const Pic7 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/09/ths_color_day.jpg",
  ];
  const Pic8 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/09/ths_career_day_5.jpg",
  ];
  const Pic9 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/09/ths_career_day_4.jpg",
  ];
  const Pic10 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/09/ths_career_day_3.jpg",
  ];
  const Pic11 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/09/ths_career_day_2.jpg",
  ];
  const Pic12 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/09/ths_career_day.jpg",
  ];
  const Pic13 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/09/ths-dinner.jpg",
  ];
  const Pic14 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/09/ths-resumption-2019.jpg",
  ];
  const Pic15 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/08/election_campaign.jpg",
  ];
  const Pic16 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/08/swearing_in_prefects_ths_ekiti.png",
  ];
  const Pic17 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/08/teachers_day_ths_ekiti.jpg",
  ];
  const Pic18 = [
    "https://treasuredheritageschool.com/wp-content/uploads/2019/08/cultural_day_ths_ekiti.jpg",
  ];
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <div className="global_heroBanner gallery_banner">
            <h1 className="global_title">Gallery</h1>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={4}>
          <img src={Pic1} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic2} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic3} alt="" style={imgSize} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={4}>
          <img src={Pic4} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic5} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic6} alt="" style={imgSize} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={4}>
          <img src={Pic7} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic8} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic9} alt="" style={imgSize} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={4}>
          <img src={Pic10} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic11} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic12} alt="" style={imgSize} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={4}>
          <img src={Pic13} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic14} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic15} alt="" style={imgSize} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={4}>
          <img src={Pic16} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic17} alt="" style={imgSize} />
        </Col>
        <Col sm={4}>
          <img src={Pic18} alt="" style={imgSize} />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
