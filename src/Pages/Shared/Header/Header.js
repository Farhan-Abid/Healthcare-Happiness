import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar className="nav-style" collapseOnSelect expand="lg" bg="Info" variant="primary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Healthcare Happiness
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLink} to="/about">
              Know Me
            </Nav.Link>
            <Nav.Link href="home#services">Our Speciliaties</Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
            {user ? (
              <button className="btn btn-dark" onClick={() => signOut(auth)}>
                Sign Out
              </button>
            ) : (
              <Nav.Link as={CustomLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
