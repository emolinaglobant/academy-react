import React from "react";
import logo from "../assets/tmovie.png";

const Header = () => {
  return (
    <article className="header_container">
      <section>
        <figure>
          <img src={logo} alt="application logo" className="img_logo" />
        </figure>
      </section>
      <section>
        <h2 className="main_title">Movie Directory</h2>
      </section>
      <section>
        <h3 className="main_title">Juan Aristizabal</h3>
      </section>
    </article>
  );
};

export default Header;
