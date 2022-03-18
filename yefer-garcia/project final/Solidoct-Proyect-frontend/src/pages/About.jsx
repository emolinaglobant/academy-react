import React from "react";
import { dinamicTitle } from "../utils/dinamicTitle";

const About = () => {
  dinamicTitle("Solidoct | About Us");
  return (
    <main className="about-container">
      <section className="about" id="about">
        <article className="container">
          <section className="contend-about">
            <h2 data-aos="fade-right">About our company</h2>

            <p data-aos="fade-right">
              Our progress as a company is reflected in our quality of service
              and commitment to our Clients in each of our projects. We are
              committed to preserving the environment and contributing to the
              growth of the country through a constant search for new markets to
              have a successful track record and offer greater benefits to our
              employees.
            </p>
          </section>

          <section className="container-text">
            <section className="card-text" data-aos="zoom-in">
              <h1>2017</h1>
              <p>Year of Establishment</p>
              <hr />
            </section>
            <section className="card-text" data-aos="zoom-in">
              <h1>50</h1>
              <p>Completed Projects</p>
              <hr />
            </section>
            <section className="card-text" data-aos="zoom-in">
              <h1>100</h1>
              <p>Professional Employees</p>
              <hr />
            </section>
            <section className="card-text" data-aos="zoom-in">
              <h1>+15</h1>
              <p>Business Partners</p>
              <hr />
            </section>
          </section>

          <section>
            <strong>Lesfer Garcia</strong>
            <p>Director Manager</p>
          </section>
        </article>
      </section>

      <section className="about-description-container">
        <article className="contend-about">
          <div className="card-left card-contents">
            <img src="/imagenes-solidoct/receptionists.jpg" alt="" />
          </div>
          <div className="card-right card-contents">
            <img src="/img/logo-trasnparent.png" alt="" />
            <h1>Whats Solidoct?</h1>
            <p>
              We are a company of engineers and architects who seek the full
              satisfaction of their clients, offering personalized and
              integrated treatment with a range of exclusive services for all
              our clients.
            </p>
            <p>
              We seek continuous improvement in our processes, through
              innovation and, above all, the optimization of the projects we
              build. We have spent years in constant growth in the Peruvian
              Services market.
            </p>
          </div>
        </article>
      </section>

      <section className="geo">
        <picture>
          <img src="/img/peru.svg" alt="" id="map-peru" />
        </picture>
      </section>
    </main>
  );
};

export default About;
