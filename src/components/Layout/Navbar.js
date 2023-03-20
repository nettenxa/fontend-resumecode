import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const logOut = () => {
  window.localStorage.clear();
  window.location.href = "./";
};
const logIn = () => {
  window.location.href = "/login";
};
const reg = () => {
  window.location.href = "/register";
};

class NavbarPage extends Component {
  render() {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    console.log("LogIn: ", isLoggedIn);
    if(isLoggedIn == null){
      return (
        <div className="nav-wrapper white">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <i className="material-icons">code</i>
              <Navbar.Brand href="/dashboard">NetteN</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar">
                  <Nav.Link href="/dashboard">Home</Nav.Link>
                  <Nav.Link href="/project">Project</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            <button className="btn btn-flat waves-effect white black-text" onClick={logIn}>Log in</button>
            {/* <button className="btn btn-outline-danger blue accent-3"  onClick={reg}>Register</button> */}
            </Container>
          </Navbar>
        </div>
      );
    }
    else{
      return (
        <div className="nav-wrapper white">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <i className="material-icons">code</i>
              <Navbar.Brand href="/dashboard">NetteN</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar">
                  <Nav.Link href="/dashboard">Home</Nav.Link>
                  <Nav.Link href="/project">Project</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Container>
          </Navbar>
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
            }}
            className="col s5 brand-logo center black-text"
          ></Link>
        </div>
      );
    }
  }
}

export default NavbarPage;
