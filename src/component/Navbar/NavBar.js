import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  // NavList
  const NavListHome = { text: "Home" };
  const NavListAbout = { text: "About THS" };
  const NavListEvent = { text: "Event" };
  const NavListGallery = { text: "Gallery" };
  const NavListContact = { text: "Contact" };
  const NavListPortal = { text: "Portal" };

  //   Activities
  const ActivityTeacher = { text: "Teacher's Day" };
  const ActivityStudent = { text: "Student's Excursion" };
  const ActivityPrize = { text: "Prize giving Day" };

  const styles = {
    height: 130,
  };

  return (
    <div>
      <Navbar
        style={styles}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="navbar"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://treasuredheritageschool.com/wp-content/uploads/2019/04/ths_image.jpg"
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home" className="nav-link">
                {NavListHome.text}
              </Nav.Link>
              <Nav.Link href="#About" className="nav-link">
                {NavListAbout.text}
              </Nav.Link>
              <Nav.Link href="#Gallery" className="nav-link">
                {NavListGallery.text}
              </Nav.Link>
              <Nav.Link href="#event" className="nav-link">
                {NavListEvent.text}
              </Nav.Link>

              <NavDropdown title="Activities" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#Teacher's day">
                  {ActivityTeacher.text}
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#excursion">
                  {ActivityStudent.text}
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#award">
                  {ActivityPrize.text}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#contact">
                {NavListContact.text}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#contact">
                {NavListPortal.text}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
