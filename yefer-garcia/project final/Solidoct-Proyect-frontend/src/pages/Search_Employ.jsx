import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { dinamicTitle } from "../utils/dinamicTitle";
import Login from "./Solidoct_Employ/Login";
import Signup from "./Solidoct_Employ/Signup";
import Dasboard_Employ from "./Solidoct_Employ/Dasboard_Solidoct_Employ";

const Search_employ = () => {
  dinamicTitle("Solidoct Employer");
  const location = useLocation();
  return (
    <main className="container-notfound">
      {location.pathname.includes("login") ||
      location.pathname.includes("signup") ||
      location.pathname.includes("Dasboard") ? (
        ""
      ) : (
        <Link to="/search_employer/login">
          <h1 id="join">
            Join Now <i class="bi bi-aspect-ratio"></i>
          </h1>
        </Link>
      )}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dasboard" element={<Dasboard_Employ />} />
      </Routes>
    </main>
  );
};

export default Search_employ;
