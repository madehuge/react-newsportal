import React from "react";
import Logo from "../Assets/logo.png";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitterX } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import Footermenu from "./Footermenu";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <Row>
          <Col md={3}>
            <h2>About Us</h2>
            <p className="about_in">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              reprehenderit non libero veniam facere nostrum hic officia fugiat
              beatae inventore nisi nihil consequuntur, corrupti minima dolorem
              placeat animi praesentium sit!
            </p>
          </Col>
          <Col md={6}>
            <div className="logo">
              <Link to="/">
                <img src={Logo} className="img-fluid" alt="Company Logo" />
              </Link>
            </div>
          </Col>
          <Col md={3}>
            <ul className="social-icons">
              <li>
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  aria-label="Visit our Facebook page"
                >
                  <BsFacebook aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" aria-label="Visit our Instagram page">
                  <BsInstagram aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" aria-label="Visit our YouTube channel">
                  <BsYoutube aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/xyx" aria-label="Visit our Twitter profile">
                  <BsTwitterX aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Footermenu />
    </footer>
  );
}
