import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_Servics from "../../utils/API_Servics";

const Signup = () => {
  const [firtsName, setFirtsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const validateData = (e) => {
    e.preventDefault();
    const body = {
      first_name: firtsName,
      last_name: lastName,
      email: email,
      password: password,
      password2: password2,
    };
    API_Servics.post("v1/signup/", body).then((res) => {
      localStorage.setItem("token_sign", res.data.token);
      navigate("/search_employer/Dasboard");
    });
  };
  return (
    <main className="container-notfound">
      <article className="container-employ">
        <section className="card-left">
          <form>
            <div className="title">
              <h1>Join the Solidoct team</h1>
            </div>
            <input
              type="text"
              placeholder="Firts Name"
              value={firtsName}
              onChange={(event) => {
                setFirtsName(event.currentTarget.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.currentTarget.value);
              }}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={password2}
              onChange={(event) => {
                setPassword2(event.currentTarget.value);
              }}
            />
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
          <img src="/imagenes-solidoct/login_svg.svg" alt="" width={200} />
        </picture>
      </article>
    </main>
  );
};

export default Signup;
