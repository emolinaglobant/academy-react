import React, { useState } from "react";
import { SiPokemon } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useAuth } from "../context/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import AlertError from "../components/AlertError";
import "../css/LoginStyle.css";

function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { logIn, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(user.email, user.password);
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
        case "auth/wrong-password":
          setError("Wrong password");
          break;
        case "auth/user-not-found":
          setError("User not found");
          break;
        case "AUTH/POPUP-CLOSED-BY-USER":
          setError("Pop up closed");
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

  const handleResetPassword = async () => {
    if (!user.email) return setError("Please enter your email");
    try {
      await resetPassword(user.email);
      setError("We send you an email with a link to reset your password");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <NavBar />
      <article className="container-login">
        <section className="content-login">
          <section className="icon-login">
            <SiPokemon size={180} color="red" />
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
              <button>Sign In</button>
              <section>
                <p className="accountLink">
                  Don't have an Account <a href="/register">Register</a>
                </p>
                <a
                  className="resetPass"
                  href="#!"
                  onClick={handleResetPassword}
                >
                  Reset password
                </a>
              </section>
            </form>
            <section className="button">
              <button onClick={handleLoginGoogle}>
                <FcGoogle size={27} /> Sign In with Google
              </button>
            </section>
          </section>
          <br />
        </section>
      </article>
      <Footer />
    </>
  );
}

export default LoginPage;
