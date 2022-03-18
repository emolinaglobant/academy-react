import React from "react";
import { Link } from "react-router-dom";
import logo from "../Img/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { auth } from "../Config/FirebaseConfig";
import { useHistory } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { MdLogout } from "react-icons/md";
import { useAuth } from '../Context/AuthContext'

export const NavBar = ({ user, totalProducts }) => {
  const history = useHistory();
  const { userData } = useAuth();
  console.log(userData);

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cards">Home</Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
            </Nav>
            {userData && (
              <>
                <Link className="navlink text-white" to="/">
                  {userData.displayName ? userData.displayName : user}
                </Link>
                <section className="cart-menu-btn">
                  <Link className="navlink text-white" to="cart">
                    <AiOutlineShoppingCart size={20} color="white" />
                    <span className="cart-indicator">{totalProducts} </span>
                  </Link>
                </section>
                <section className="button_logout" onClick={handleLogout}>
                  <MdLogout size={20} color="white">
                    Logout
                  </MdLogout>
                </section>
              </>
            )}
            {!userData && (
              <>
                <Nav.Link className="navlink text-white" href="/login">
                  Log in
                </Nav.Link>
                <Nav.Link className="signup_button text-white" href="/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
