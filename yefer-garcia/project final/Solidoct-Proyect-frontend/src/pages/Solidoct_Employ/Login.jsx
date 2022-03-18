import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_Servics from "../../utils/API_Servics";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateData = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    API_Servics.post("v1/signin/", body).then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/search_employer/Dasboard");
    });
  };

  console.log(email);
  console.log(password);

  return (
    <main className="container-notfound">
      <article className="container-employ">
        <section className="card-left">
          <form>
            <section className="title">
              <h1>Login</h1>
            </section>
            <input
              type="emai"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.currentTarget.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
            />
            <p>
              Are you not part of Solidoct Employ yet?{" "}
              <Link to="/search_employer/signup">
                <span>Join here</span>
              </Link>
            </p>

            <button
              className="btn"
              onClick={(e) => {
                validateData(e);
              }}
            >
              Submit
            </button>
          </form>
        </section>
        <picture className="card-right">
          <img src="/imagenes-solidoct/login.svg" alt="" width={200} />
        </picture>
      </article>
    </main>
  );
};

export default Login;
