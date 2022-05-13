import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  // NavList
  const NavListHome = { text: "Home" };
  const NavListAbout = { text: "About THS" };
  const NavListBlog = { text: "Blog" };
  const NavListContact = { text: "Contact" };
  const NavListPortal = { text: "Portal" };

  //   Activities
  const ActivityTeacher = { text: "Teacher's Day" };
  const ActivityLadyBugs = { text: "Lady Bugs Day" };
  const ActivityDinosaur = { text: "Dinosaur Day" };
  const ActivityPenquine = { text: "Penquine Day" };
  const ActivityPrize = { text: "Prize Day" };

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
                <Link to="/blog">{NavListBlog.text}</Link>
              </Nav.Link>
              <NavDropdown title="Activities" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#TeachersDay">
                  <Link to="/teacher's day">{ActivityTeacher.text}</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#LadyBug">
                  <Link to="/ladybug">{ActivityLadyBugs.text}</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#Penguine">
                  <Link to="/penquine">{ActivityPenquine.text}</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-link" href="#dinosaur">
                  <Link to="/dinosaur">{ActivityDinosaur.text}</Link>
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
