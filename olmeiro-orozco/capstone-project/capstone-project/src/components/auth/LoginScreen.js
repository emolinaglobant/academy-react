import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch( startLoginEmailPassword( email, password ));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <section>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={ handleLogin }>
        <input
          autoComplete="off"
          className="auth__input"
          name="email"
          onChange={handleInputChange}
          placeholder="email"
          type="text"
          value={email}
        />
        <input
          className="auth__input"
          name="password"
          onChange={handleInputChange}
          placeholder="password"
          type={"password"}
          value={password}
        />

        <button
          className="btn btn__primary"
          disabled={ loading }
          type="submit"
        >
          Login
        </button>

        <section className="auth__google">
          <p>Login with google</p>

          <section className="google__btn" onClick={ handleGoogleLogin }>
            <section className="google__icon-wrapper">
              <img
                alt="google button"
                className="google__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </section>
            <p className="btn__text">
              <b>Sign in with google</b>
            </p>
          </section>
        </section>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </section>
  );
};
