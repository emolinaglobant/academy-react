import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../css/Login.css";
import {
    facebookSignInInitiate,
    googleSignInInitiate,
    loginInitiate,
} from "../store/login/actions";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const { email, password } = state;

    const { currentUser } = useSelector((state) => state.user);

    const history = useHistory();
    useEffect(() => {
        if (currentUser) {
            history.push("/");
        }
    }, [currentUser, history]);
    const dispatch = useDispatch();

    const handleGooglesignIn = () => {
        dispatch(googleSignInInitiate());
    };

    const handleFacebooksignIn = () => {
        dispatch(facebookSignInInitiate());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("se jodio");
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({ email: "", password: "" });
    };
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    return (
        <>
            <article className="img-background">
                <section id="logreg-forms">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="label">
                                *Email address
                            </Form.Label>
                            <Form.Control
                                id="input__Control"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="label">*Password</Form.Label>
                            <Form.Control
                                id="input__Control"
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button
                            className="button__sign btn-block"
                            type="submit"
                        >
                            <i className="fas fa-sign-in-alt"></i> Sign In
                        </Button>
                        <br />
                        <br />
                        <section className="social-login">
                            <Button
                                variant="danger"
                                className="google-btn social-btn"
                                type="button"
                                onClick={handleGooglesignIn}
                            >
                                <span>
                                    <i className="fab fa-google-plus-g"></i>{" "}
                                    Sign in with Google+
                                </span>
                            </Button>
                            <Button
                                id="facebook-btn "
                                type="button"
                                onClick={handleFacebooksignIn}
                            >
                                <span>
                                    <i className="fab fa-facebook-f"></i> Sign
                                    in with Facebook
                                </span>
                            </Button>
                        </section>
                        <hr />
                        <p>Don't have an account</p>
                        <Link to="/register">
                            <Button
                                className="btn  btn-block"
                                type="button"
                                id="btn-signup"
                            >
                                <i className="fas fa-user-plus"></i> sign up New
                                Account
                            </Button>
                        </Link>
                    </Form>
                </section>
            </article>
        </>
    );
};

export default Login;
