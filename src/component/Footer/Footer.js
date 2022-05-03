import AboutUs from "../../images/about-us.png";
import Calls from "../../images/calls.png";
import Contact from "../../images/contact.png";
import Loaction from "../../images/location.png";
import Events from "../../images/events.png";
import FaceBook from "../../images/fb.png";
import Instagram from "../../images/insta.png";
import Twitter from "../../images/twitter.png";
import "./SubFooter.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{ color: "green", textAlign: "center", marginTop: "-50px" }}
      ></h1>
      <Container>
        <Row>
          <Column>
            <img src={AboutUs} alt="" style={{ height: 50, width: 50 }} />
            <Heading>About Us</Heading>
            <FooterLink href="#">Mission</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <img src={Events} alt="" style={{ height: 50, width: 50 }} />
            <Heading>Events</Heading>
            <FooterLink href="#">Mother's Day</FooterLink>
            <FooterLink href="#">Teacher's Day</FooterLink>
            <FooterLink href="#">WaterMelon Day</FooterLink>
            <FooterLink href="#">Excursions</FooterLink>
          </Column>
          <Column>
            <img src={Contact} alt="" style={{ height: 50, width: 50 }} />
            <Heading>Contact Us</Heading>
            <div style={{ display: "flex" }}>
              <img src={Calls} alt="" style={{ height: 50, width: 50 }} />
              <FooterLink href="#">
                08029246221 08023055307 08035031946
              </FooterLink>
            </div>
            <div style={{ display: "flex" }}>
              <img src={Loaction} alt="" style={{ height: 50, width: 50 }} />
              <FooterLink href="#">
                112, Moferere Street, off Ajilosun,Behind Ado Local Govt.,
                Health Centre, Ado-Ekiti.
              </FooterLink>
            </div>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <div style={{ display: "flex" }}>
              <FooterLink href="#">
                <img src={FaceBook} alt="" style={{ height: 50, width: 50 }} />
              </FooterLink>
              <FooterLink href="#">
                <img src={Instagram} alt="" style={{ height: 50, width: 50 }} />
              </FooterLink>
              <FooterLink href="#">
                <img src={Twitter} alt="" style={{ height: 50, width: 50 }} />
              </FooterLink>
            </div>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
