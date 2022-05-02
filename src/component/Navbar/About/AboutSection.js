import "./AboutSection.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutSection = () => {
  const AboutHeader = { text: "what we do" };
  const AboutDress = { text: "dressing code ths" };
  const AboutSubHeader = [
    "Treasured Heritage School (THS) is a Christian Montessori  School that offers educational services from Creche to Grade levels. We are poised to build a total child that is spiritually, morally and academically sound, exuding self  confidence that can make the child compete favourably with",
  ];
  const AboutSubDress = [
    " In THS, we place high premium on proper dressing. Pupils must ALWAYS appear neatly dressed with their white socks, black shoes and trimmed nails. Boys and girls must have their hair properly done. No use of hair extension please. Boys must also have their hair cut low. Any apparel that is not in tandem with the school’s recommendation shall be confiscated.",
  ];
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col className="text_section" style={{paddingTop:25}}>
              <h3>ABOUT THS</h3>
              <a href="#About">
                <p style={{ marginBottom: 20 }}>Know More > </p>
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
              <div className="ui piled segment">
                <h4 className="ui header"> {AboutHeader.text} </h4>
                <p style={{fontSize:"1.1357rem"}}>{AboutSubHeader}</p>
              </div>
              <div className="ui piled segment">
                <h4 className="ui header"> {AboutDress.text} </h4>
                <p style={{fontSize:"1.1357rem"}}>{AboutSubDress}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default AboutSection;
