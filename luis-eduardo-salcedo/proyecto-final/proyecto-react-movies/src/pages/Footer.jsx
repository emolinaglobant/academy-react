import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/footer.css";
const Footer = () => {
    return (
        <MDBFooter className="page-footer font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            React-movies
                        </h5>
                        <p>
                            Here you can use rows and columns here to organize
                            your footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            Categorys
                        </h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/Category/28">Action</a>
                            </li>
                            <li>
                                <a href="/Category/12">Adventure</a>
                            </li>
                            <li>
                                <a href="/Category/16">Animation</a>
                            </li>
                            <li>
                                <a href="/Category/35">Comedy</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            Categorys
                        </h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/Category/80">Crime</a>
                            </li>
                            <li>
                                <a href="/Category/99">Documentary</a>
                            </li>
                            <li>
                                <a href="/Category/18">Drama</a>
                            </li>
                            <li>
                                <a href="/Category/10751">Family</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            Categorys
                        </h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/Category/14">Fantasy</a>
                            </li>
                            <li>
                                <a href="/Category/36">History</a>
                            </li>
                            <li>
                                <a href="/Category/27">Horror</a>
                            </li>
                            <li>
                                <a href="/Category/9648 ">mystery</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <hr />
            <section className="text-center py-3">
                <ul className="list-unstyled list-inline mb-0">
                    <li className="list-inline-item">
                        <h5 className="mb-1">Register for free</h5>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="/register"
                            className="btn btn-danger btn-rounded"
                        >
                            Sign up!
                        </a>
                    </li>
                </ul>
            </section>
            <hr />
            <section className="text-center">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-sm btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-sm btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-sm btn-gplus mx-1">
                            <i className="fab fa-google-plus"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn-floating btn-sm btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a  href="/" className="btn-floating btn-sm btn-dribbble mx-1">
                            <i className="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="/"> @Eduardo </a>
                </MDBContainer>
            </section>
        </MDBFooter>
    );
};

export default Footer;
