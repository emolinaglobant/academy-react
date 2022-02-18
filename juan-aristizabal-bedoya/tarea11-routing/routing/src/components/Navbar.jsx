import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <article className="navbar-container">

      <p className="center-text">Routing homework</p>
    <ul className="navbar-ul">
      <li className="navbar-li">
        <NavLink className="navlink" to="/">Monday</NavLink>
      </li>
      <li className="navbar-li">
        <NavLink className="navlink" to="/daytwo">Tuesday</NavLink>
      </li>
      <li className="navbar-li">
        <NavLink className="navlink" to="/daythree">Wednesday</NavLink>
      </li>
      <li className="navbar-li">
        <NavLink className="navlink" to="/dayfour">Thursday</NavLink>
      </li>
      <li className="navbar-li">
        <NavLink className="navlink" to="/dayfive">Friday</NavLink>
      </li>
      <li className="navbar-li">
        <NavLink className="navlink" to="/daysix">Satuday</NavLink>
      </li>
      <li className="navbar-li">
        <NavLink className="navlink" to="/dayseven">Sunday</NavLink>
      </li>
    </ul>
    </article>
  );
};

export default Navbar;
