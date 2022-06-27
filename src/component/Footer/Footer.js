import AboutUs from "../../images/about-us.png";
import Calls from "../../images/calls.png";
import Contact from "../../images/contact.png";
import Location from "../../images/location.png";
import Events from "../../images/events.png";
import Internet from "../../images/internet.png";
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

const EventsDay =  ["watermelon day", "parents day", "teachers day", 'lady bug', 'penguin day'] 

const Footer = () => {
  return (
    <Box>
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
            {EventsDay.map((event) => {
              return(
              <FooterLink href="#">{event}</FooterLink>
            )})}
          </Column>
          <Column>
            <img src={Contact} alt="" style={{ height: 50, width: 50 }} />
            <Heading>Contact Us</Heading>
            <div style={{ display: "flex" }}>
              <img src={Calls} alt="" style={{ height: 35, width: 35 }} />
              <FooterLink href="#">
                08029246221 08023055307 08035031946
              </FooterLink>
            </div>
            <div style={{ display: "flex" }}>
              <img src={Location} alt="" style={{ height: 35, width: 35 }} />
              <FooterLink href="#">
                112, Moferere Street, off Ajilosun,Behind Ado Local Govt.,
                Health Centre, Ado-Ekiti.
              </FooterLink>
            </div>
          </Column>
          <Column >
		  <img src={Internet} alt="" style={{ height: 50, width: 50 }} />
            <Heading>Social Media</Heading>
            <div style={{ display: "flex" }}>
              <FooterLink href="https://web.facebook.com/people/Treasured-Heritage-School-Christian-Montessori/100063690275152/">
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
