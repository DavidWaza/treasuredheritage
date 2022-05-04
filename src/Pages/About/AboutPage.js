import { Col, Container, Row, Accordion } from "react-bootstrap";
import MissVis from "../../component/MissionStatement/MissVis";
import SubTitle from "../../component/subTitle";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <div className="global_heroBanner about_banner">
            <h1 className="global_title">About THS</h1>
          </div>
        </Col>
        <Row>
          <Col sm={12}>
            <div style={{ marginTop: 20 }}>
              <h2 className="about_header">Our History</h2>
              <p className="sub_header">CHRISTIAN MONTESSORI EDUCATION</p>
              <p style={{ fontSize: 18, padding: 10 }}>
                <span style={{ color: "#892362" }}>
                  Treasured Heritage School (THS) is a Christian Montessori
                  School {""}
                </span>
                that offers educational services from Creche to Grade levels. We
                are poised to build a total child that is spiritually, morally
                and academically sound, exuding self confidence that can make
                the child compete favourably with his/her contemporaries in any
                part of the world. Our safe and conducive environment where
                external disturbances and distractions are completely eliminated
                or reduced to the barest minimum makes our school the ideal
                place to put your child/ward.{" "}
                <span style={{ color: "#892362" }}>
                  Treasured Heritage School
                </span>{" "}
                was established in the year 2014
              </p>
            </div>
            <MissVis />
            <Container>
              <SubTitle title="SCHOOL STRUCTURE" />
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>CRECHE</Accordion.Header>
                  <Accordion.Body>
                    Our Creche is divided into two categories for effective
                    service delivery that will make your baby experience a
                    Minder/Child interaction such that the baby hardly misses
                    the motherly attention. Babies from ages 2-18 months are in
                    Creche 1 where they get treatments specifically tailored for
                    their age group. Toys, playmats, walkers, educational CDs
                    and other play materials specifically designed for this age
                    group are adequately provided. Our staff ratio for this
                    category is One Minder to Four babies (1:4). Children from
                    ages 18 months - 2 years are placed in Creche 2. This is the
                    age group where children like to explore and experiment in
                    order to satisfy their curiosity. Hence, in Treasured
                    Heritage School we take cognisance of this need and have
                    made adequate provisions to satisfy their curiosity and to
                    also prepare them for the new experience in the Pre-School.
                    We allow them to give expressions to their feelings and
                    emotions as we appreciate that this is one of the ways to
                    discovering themselves. We engage them in lots of fun-filled
                    activities but with enough rest time recommended for their
                    age group.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>PRE-SCHOOL</Accordion.Header>
                  <Accordion.Body>
                    Our Pre-School is divided into two categories: The Reception
                    classes and the Nursery classes. RECEPTION CLASS: We have
                    Reception 1 & 2. The starting age for Reception 1 is 2
                    years, and 3 years for reception 2. They learn to make
                    sentences of 2-3 words here. They follow simple instructions
                    like “give the ball to daddy”, “sit down” etc. They are also
                    ready for Toilet training. In Reception 1, they often
                    display separation anxiety. That’s why we engage
                    professionals to make them overcome separation anxiety after
                    a very short period of enrolling them in THS. The Reception
                    2 pupils are gradually becoming independent and they can
                    clearly express themselves and relate with other children.
                    They enjoy singing, rhyming and making up words. Our team of
                    Montessori professionals are ever ready to help them find
                    expressions and develop self-confidence. Pupils at this
                    level are taught letter sounds.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>NURSERY</Accordion.Header>
                  <Accordion.Body>
                    Here in THS, our Nursery class starts from age 4. We offer
                    the Montessori system of education combined with the
                    British, American and Nigerian curriculum. We are driven by
                    our belief that the early stage of a child is the foundation
                    upon which the skills of a child is laid, and we strive to
                    the best of our ability to build a very strong foundation
                    for them. Our culture of Nelson handwriting is religiously
                    enforced from this level. Our pupils are taught the blending
                    of letters to form words through the learning of letter
                    sounds.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>GRADE</Accordion.Header>
                  <Accordion.Body>
                    Our Grades classes 1 to 5. In THS, the terminating class is
                    Grade 5. Like in our Pre-School, we adopt a combination of
                    both the Conventional and the Montessori methods of
                    teaching. The age range for this level is from age 5 to age
                    11. Our pupils are at this level exposed to all the basic
                    facts of learning that make them to be well grounded. We
                    have very high-performance rate at all external
                    examinations. Our pupils pass Federal and States
                    examinations with Distinctions. Some of the distinctive
                    attributes of our pupils are their high level of
                    independence and self-confidence. They are very outspoken
                    and morally upright. Our pupils are our testimonials. We
                    have 100% pupils’ success rate in THS.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Container>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default AboutPage;
