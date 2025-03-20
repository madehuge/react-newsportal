import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footermenu() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto ms-auto">
            <Nav.Link as={Link} to="privacy-policy">
              Privacy Policy
            </Nav.Link>
            <Nav.Link as={Link} to="terms-and-conditions">
              Terms & Conditions
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
