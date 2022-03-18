import React from "react";
import { dinamicTitle } from "../utils/dinamicTitle";

const Proyects = () => {
  dinamicTitle("Solidoct | Projects");
  return (
    <main className="container-notfound">
      <picture className="coming-soon" data-aos="fade-up">
        <img src="/img/development.png" alt="" width={300} />
      </picture>
      <h1 className="margin-left" data-aos="fade-right">
        Page Development ...
      </h1>
    </main>
  );
};

export default Proyects;
