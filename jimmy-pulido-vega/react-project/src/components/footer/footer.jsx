import React from "react";
import "./footer.scss";

function Fotter() {
  return (
    <footer className="footerBorder">
      <section className="footerConteiner">
        <p>
          Front by: <span>Jimmy Alejandro</span> ||
          <a
            className="netWorks"
            href="https://github.com/iDeerBoy"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            github{" "}
          </a>
          ||
          <a
            className="netWorks"
            href="https://www.linkedin.com/in/jimmy-pulido/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            linkedIn
          </a>
        </p>
        <p>
          Back by: <span>Gisell Gutierrez</span> ||
          <a
            className="netWorks"
            href="https://github.com/iDeerBoy"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            github{" "}
          </a>
          ||
          <a
            className="netWorks"
            href="https://www.linkedin.com/in/jimmy-pulido/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            linkedIn
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Fotter;
