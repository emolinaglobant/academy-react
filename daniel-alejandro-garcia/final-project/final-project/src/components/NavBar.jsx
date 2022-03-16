import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { CgPokemon } from "react-icons/cg";
import { useAuth } from "../context/authContext/AuthContext";
import { usePokeApi } from "../context/pokeApiContext/PokeApiContext";
import { VscAccount } from "react-icons/vsc";
import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";
import { GoSignIn } from "react-icons/go";
import "../css/NavBarStyle.css";

function NavBar() {
  const { logOut, user } = useAuth();
  const { resetPokemonsLiked } = usePokeApi();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      resetPokemonsLiked();
      navigate("/");
    } catch (error) {}
  };

  let index;
  let result;

  if (user) {
    index = user.email.indexOf("@");
    result = user.email.substring(0, index);
    result[0].toUpperCase();
  }

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <CgPokemon size={40} color="red" /> DANIDEX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/surpriseme">Surprise me!</Nav.Link>
              <Nav.Link href="/search">
                <BiSearchAlt />
                Search
              </Nav.Link>
            </Nav>
            <NavDropdown
              title={user ? result : "Guest"}
              id="av-dropdown-success-example"
            >
              {user ? (
                <>
                  <NavDropdown.Item href="/myAccount">
                    <VscAccount color="red" /> My account
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogOut}>
                    <CgLogOut color="#30A7D7" /> Log Out
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="/login">
                    <GoSignIn /> Sign In
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/register">
                    <BiUserPlus /> Register
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
