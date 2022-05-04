import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  // NavList
  const NavListHome = { text: "Home" };
  const NavListAbout = { text: "About THS" };
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
    <div ui sticky>
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
              <Nav.Link className="nav-link">
                <Link to="/">{NavListHome.text}</Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link to="/about">{NavListAbout.text}</Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link to="/gallery">{NavListGallery.text}</Link>
              </Nav.Link>
              <NavDropdown title="Activities" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#Teacher's day">
                  <Link to="/teacher's day">{ActivityTeacher.text}</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#excursion">
                  <Link to="/excursion">{ActivityStudent.text}</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#award">
                  <Link to="/award">{ActivityPrize.text}</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2}>
                <Link to="/contact">{NavListContact.text}</Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="/portal">{NavListPortal.text}</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
