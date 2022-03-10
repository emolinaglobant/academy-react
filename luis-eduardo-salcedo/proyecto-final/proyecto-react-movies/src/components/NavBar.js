import logo from "../assets/logo.png";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../css/nav-bar.css";
import { logoutInitiate } from "../store/login/actions";

export function NavBar() {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleAuth = () => {
        if (currentUser) {
            dispatch(logoutInitiate());
        }
    };

    return (
        <Navbar
            sticky="top"
            collapseOnSelect
            id="nav"
            expand="sm"
            variant="dark"
        >
            <Container className="container">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="/">React-movies</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title="Movies"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href={`/Category/28`}>
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Category/27">
                                Horror
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Category/35">
                                Comedy
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Category/12">
                                Adventure
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Category/80">
                                Crime
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Category/10402">
                                Music
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Category/10749">
                                Romance
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Category/10752">
                                War
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        {!currentUser && (
                            <>
                                <Nav.Link href="/login">Log In</Nav.Link>
                            </>
                        )}
                        <NavDropdown
                            title={
                                currentUser
                                    ? currentUser.displayName
                                    : currentUser.email
                            }
                            id="collasible-nav-dropdown"
                        >
                            {!currentUser && (
                                <>
                                    <NavDropdown.Item href="/login">
                                        Sign In
                                    </NavDropdown.Item>
                                    {currentUser ? (
                                        ""
                                    ) : (
                                        <NavDropdown.Item href="/Register">
                                            Sign Up
                                        </NavDropdown.Item>
                                    )}
                                </>
                            )}
                            {currentUser ? (
                                <NavDropdown.Item>
                                    {" "}
                                    <img
                                        src={currentUser.photoURL}
                                        alt="user profile"
                                        className=" rounded rounded-full   text-center"
                                    />
                                </NavDropdown.Item>
                            ) : (
                                ""
                            )}

                            {currentUser ? (
                                <>
                                    {" "}
                                    <NavDropdown.Divider />{" "}
                                    <NavDropdown.Item onClick={handleAuth}>
                                        Log Out
                                    </NavDropdown.Item>
                                </>
                            ) : (
                                ""
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
