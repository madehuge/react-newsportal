import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import {
  BsSearch,
  BsTextRight,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitterX,
} from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Topmenu from "./Topmenu";
import SearchBox from "./SearchBox";
import SidebarBox from "./SidebarBox";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="Header">
        <Container>
          <Row>
            <Col md={3}>
              <nav role="navigation" aria-label="Primary Navigation">
                <ul className="top-menu">
                  <li>
                    <button
                      className="search-btn"
                      onClick={() => setSearchOpen(!searchOpen)}
                      aria-label="Toggle search box"
                      aria-expanded={searchOpen}
                    >
                      <BsSearch aria-hidden="true" />
                    </button>
                  </li>
                  <li>
                    <button
                      className="menu-btn"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      aria-label="Toggle sidebar menu"
                      aria-expanded={sidebarOpen}
                    >
                      <BsTextRight aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </nav>
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
      </header>

      {/* Search and Sidebar Components */}
      <SearchBox
        searchOpen={searchOpen}
        toggleSearchBox={() => setSearchOpen(false)}
      />
      <SidebarBox
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(false)}
      />

      <Topmenu />
    </>
  );
}
