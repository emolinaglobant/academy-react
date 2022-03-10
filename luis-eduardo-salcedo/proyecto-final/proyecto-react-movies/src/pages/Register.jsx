import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../css/register.css";
import registerInitiate from "../store/login/actions";
const Register = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const { currentUser } = useSelector((state) => state.user);

    const history = useHistory();
    useEffect(() => {
        if (currentUser) {
            history.push("/");
        }
    }, [currentUser, history]);
    const dispatch = useDispatch();
    const { email, password, displayName, passwordConfirm } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName));
        setState({
            email: "",
            displayName: "",
            password: "",
            passwordConfirm: "",
        });
    };
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    return (
        <>
            <section className="register-form">
                <section id="#register-form">
                <Form  onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Names</Form.Label>
                        <Form.Control
                            className="input__Control"
                            id="displayName"
                            type="text"
                            placeholder="Enter your name"
                            name="displayName"
                            value={displayName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="input__Control"
                            id="user-email"
                            type="email"
                            placeholder="Full email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="input__Control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="input__Control"
                            id="inputRePassword"
                            type="password"
                            placeholder="Repeat Password"
                            name="passwordConfirm"
                            value={passwordConfirm}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        <i className="fas fa-user-plus"></i> Sign Up
                    </Button>
                    <br />
                    <br />
                    <hr />
                    <p>You have account</p>
                    <Link to="/login">
                        <Button
                            className="btn btn-primary btn-block"
                            type="button"
                            id="btn-signup"
                        >
                            <i className="fas fa-sign-in-alt"></i> Sin In
                        </Button>
                    </Link>
                </Form>
            </section>
            </section>
        </>
    );
};

export default Register;
