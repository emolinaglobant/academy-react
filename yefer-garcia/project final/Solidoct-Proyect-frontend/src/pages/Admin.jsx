import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_Service from "../utils/API_Servics";
import { dinamicTitle } from "../utils/dinamicTitle";

const Admin = () => {
  dinamicTitle("Solidoct Team 🔐");

  const [emailAdmin, setEmailAdmin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validateData = (e) => {
    e.preventDefault();
    const body = {
      email: emailAdmin,
      password: password,
    };
    emailAdmin.includes("@solidoct.com") ? (
      API_Service.post("v1/signin/", body).then((res) => {
        localStorage.setItem("token_admin", res.data.token);
        navigate("/manager_solidoct");
        window.location.reload(true);
      })
    ) : (
      <></>
    );
  };
  return (
    <main className="admin">
      <article>
        <h1>
          Team Solidoct <i className="bi bi-key-fill"></i>
        </h1>
        <form action="">
          <input
            type="email"
            placeholder="Email_Corporative"
            value={emailAdmin}
            onChange={(event) => {
              setEmailAdmin(event.currentTarget.value);
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

          <button
            className="btn"
            onClick={(e) => {
              validateData(e);
            }}
          >
            Submit
          </button>
        </form>
      </article>
    </main>
  );
};

export default Admin;
