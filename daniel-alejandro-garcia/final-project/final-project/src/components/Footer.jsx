import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavDropdown } from "react-bootstrap";
import { SiPokemon } from "react-icons/si";

function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "#30a7d7" }}
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">
              <SiPokemon size={120} />
            </h5>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/home">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/surpriseme">Surprise Me!</a>
              </li>
              <li className="list-unstyled">
                <a href="/search">Search</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <NavDropdown.Divider />
        <MDBCol className="p-4">
          <a href="https://www.facebook.com/">
            <FaFacebookSquare size={30} className="m-2" />
          </a>
          <a href="https://www.google.com/">
            <FcGoogle size={30} className="m-2" />
          </a>
          <a href="https://twitter.com/">
            <FaTwitterSquare size={30} color="white" className="m-2" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare size={30} className="m-2" color="white" />
          </a>
        </MDBCol>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> DaniDev </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
