import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import { useSelector, useDispatch } from "react-redux";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (validator.isEmpty(name)) {
      dispatch(setError("name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is required"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "passwor should be at least six characters and match each other"
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <section>
      {msgError && <section className="auth__alert-error">{msgError}</section>}

      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          value={email}
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type={"password"}
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type={"password"}
          placeholder="confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn__primary">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </section>
  );
};
