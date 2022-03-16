import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { SiPokemon } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/LoginStyle.css";
import AlertError from "../components/AlertError";

function RegisterPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signUp, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/home");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Invalid Email");
          break;
        case "auth/weak-password":
          setError(
            "Invalid Password, password should be at least 6 characters"
          );
          break;
        case "auth/internal-error":
          setError("the input cannot be empty");
          break;
        case "auth/email-already-exists":
          setError("User already exists");
          break;
        case "auth/email-already-in-use":
          setError("User already in use");
          break;
        default:
          setError("");
          break;
      }
    }
  };

  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      setError(error.code);
    }
  };

  return (
    <>
      <NavBar />
      <article className="container-login">
        <section className="content-login">
          <section className="icon-login">
            <SiPokemon size={200} color="red" />
          </section>
          {error && <AlertError error={error} />}
          <section className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <br />
              <button>Create account</button> <br />
              <p>
                Do you already have an account? <a href="/login"> Log in</a>
              </p>
            </form>
            <section className="button">
              <button onClick={handleLoginGoogle}>
                <FcGoogle size={27} /> Sign Up with Google
              </button>
            </section>
          </section>
        </section>
      </article>
      <Footer />
    </>
  );
}

export default RegisterPage;
