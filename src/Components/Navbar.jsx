import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Close navbar on menu click
  };

  return (
    <Navbar
      bg="light"
      sticky="top"
      expand="lg"
      expanded={expanded}
      className="shadow p-4"
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>FarmName</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mx-auto d-flex gap-lg-3 background-primary px-3 py-2 rounded-3"
            onClick={handleNavClick}
          >
            <Nav.Link className="text-white" onClick={() => navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate("about")}>
              About Us
            </Nav.Link>
            <Nav.Link
              className="text-white"
              onClick={() => navigate("services")}
            >
              Programs
            </Nav.Link>
            <Nav.Link
              className="text-white"
              onClick={() => navigate("contacts")}
            >
              Contact
            </Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate("events")}>
              Events
            </Nav.Link>
          </Nav>
          <div className="btn-div m-1">
            <Button className="donate-btn btn-lg">Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
