import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { BiSad } from "react-icons/bi";
import "../css/PageNotFoundStyle.css";

function PageNotFound() {
  return (
    <>
      <NavBar />
      <Container className="PageNotFound_container">
        <BiSad size={150} color="grey" />
        <h1>404</h1>
        <h2>Page not found</h2>
      </Container>
    </>
  );
}

export default PageNotFound;
