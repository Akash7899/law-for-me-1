import React from "react";
import HeaderTop from "./headerTop";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";

const Header = () => {
  return (
    <>
      <HeaderTop />
      {/* <Slider /> */}
      <div className="header">
        <div className="container">
          <div className="row">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <a href="#">
                    <img src={require("../assets/images/Logo.png")} />
                  </a>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </nav> */}
            <Navbar expand="lg">
              <Navbar.Brand href="#home">
                <img src={require("../assets/images/Logo.png")}  className="Logo"/>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto1">
                  <NavDropdown title="Legal Documents" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Documents1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Documents2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Documents3
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Legal Documents" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Documents1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Documents2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Documents3
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#home">Subscription Plans</Nav.Link>
                  <Nav.Link href="#link">Meet the Lawyers</Nav.Link>
                  <Nav.Link href="#link">Blog</Nav.Link>
                  <button className="btn userBtn">
                    <FaRegUserCircle className="useIcons" /> My Legal Hub
                  </button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
