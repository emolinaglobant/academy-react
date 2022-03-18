import React from "react";

import "../style/layout.scss";

const Home = () => {
  return (
    <>
      <section className="welcome">
        <video className="video" autoPlay loop muted>
          <source src="../../solidoct.mp4" />
        </video>
        <div className="filter"></div>
        <article className="welcome-contend">
          <h1 data-aos="fade-right">Building a SOLIDOCT Future</h1>
          <h3 data-aos="fade-right">Honest and reliable servers since 2015.</h3>
          <section>
            <a href="/services">
              <button className="btn" data-aos="zoom-in">
                See Services
              </button>
            </a>
            <a href="/contact">
              <button className="btn" data-aos="zoom-in">
                Contact
              </button>
            </a>
          </section>
        </article>
      </section>

      <section className="article-1">
        <section className="left">
          <h3 data-aos="fade-right">Improvement is what we do</h3>
          <h1 data-aos="fade-right">
            Solidoct Services <br /> Leading Quality Projects
          </h1>
        </section>
        <section className="right">
          <a href="/projects">
            <button className="btn" data-aos="zoom-in">
              Read More
            </button>
          </a>
        </section>
      </section>

      <article className="section-card ">
        <section className="left">
          <aside className="contend">
            <h1 data-aos="fade-up">
              <hr />
              Comercial
            </h1>
            <p data-aos="fade-up">
              We are a company that develops projets from the engineering,
              manufacturing and assembly of metallic structures.We have
              qualified professionals who guarentee the quality and
              responsability of the elaborated project.​
            </p>
            <p data-aos="fade-up">
              A continuous follow-up in the pre and post sale commissioned by a
              select human team, the transport of the merchandise with total
              care and guarantee, personalized advice on the use of the products
              and financing.
            </p>
          </aside>
        </section>
        <picture className="card-right">
          <img
            src="../../imagenes-solidoct/estructua-metalica.jpg"
            alt=""
            className="estruct"
            data-aos="fade-up"
          />
        </picture>
      </article>

      <article className="section-card article-2">
        <picture className="card-right">
          <img
            src="../../imagenes-solidoct/metro.jpg"
            alt=""
            data-aos="fade-up"
          />
        </picture>
        <section className="left">
          <aside className="contend">
            <h1 data-aos="fade-right">
              <hr />
              Infrastructure
            </h1>
            <p data-aos="fade-right">
              Our infrastructure is flexible, reliable and secure, companies can
              face infrastructure, productivity and reliability problems. In
              general we have an infrastructure that distinguishes us from other
              companies
            </p>
            <p data-aos="fade-right">
              From the beginning we have made an effort to maintain a solid
              competitive position of services with high quality standards,
              showing our commitment to the growth of the country, becoming the
              strategic partner of the sectors that directly influence national
              growth such as mining, industrial , construction, fishing,
              metalworking, among others, providing comprehensive services that
              allow you to work hand in hand with your business objectives and
              needs.
            </p>
          </aside>
        </section>
      </article>

      <section className="services">
        <aside>
          <section className="top">
            <article className="container-top">
              <section className="left">
                <h5 data-aos="fade-right">Our Services</h5>
                <h2 data-aos="fade-right">
                  We offer a range of services to meet your needs.
                </h2>
                <p data-aos="fade-left">
                  Explore our services in more depth at{" "}
                  <span>Solidoct Services</span>
                </p>
              </section>
              <section className="right">
                <a href="/services">
                  <button className="btn" data-aos="zoom-in">
                    Read More
                  </button>
                </a>
              </section>
            </article>
          </section>
        </aside>
        <article className="bottom">
          <section className="part1">
            <section className="top">
              <section className="box" data-aos="flip-right">
                <i className="bi bi-hammer icon"></i>
                <h4>Carpentry</h4>
              </section>
              <section className="box" data-aos="flip-right">
                <i className="bi bi-gear-fill icon"></i>
                <h4>Metal Structures</h4>
              </section>
              <section className="box" data-aos="flip-right">
                <i className="bi bi-textarea-resize icon"></i>
                <h4>Glassware</h4>
              </section>
              <section className="box" data-aos="flip-right">
                <i className="bi bi-box2 icon"></i>
                <h4>Interior Design</h4>
              </section>
            </section>
          </section>
          <section className="part2">
            <section className="down">
              <article className="box" data-aos="flip-right">
                <i className="bi bi-stars icon"></i>
                <h4>General Cleaning</h4>
              </article>
              <article className="box" data-aos="flip-right">
                <i className="bi bi-cone-striped icon"></i>
                <h4>Building</h4>
              </article>
              <article className="box" data-aos="flip-right">
                <i className="bi bi-wallet-fill icon"></i>
                <h4>Furniture</h4>
              </article>
              <article className="box" data-aos="flip-right">
                <i className="bi bi-paint-bucket icon"></i>
                <h4>Painting</h4>
              </article>
            </section>
          </section>
        </article>
      </section>

      <section className="section-designer ">
        <article className="card">
          <picture className="card-left">
            <img
              src="/imagenes-solidoct/diseno-interiores.jpg"
              alt=""
              data-aos="fade-up"
            />
          </picture>
          <section className="card-right">
            <article className="Contents">
              <h3 data-aos="fade-left">Design Area</h3>
              <p data-aos="fade-left">
                Our group of professionals dedicated to architectural design,
                interior design and construction is a pioneer in interior design
                focused on a turnkey approach, corporate specialty and modular
                office design in Peru.
              </p>
              <p data-aos="fade-left">
                ​Design is something that characterizes us, starting from the
                unique logo that differentiates us from our competitors. The
                service we provide offers a unique and minimalist relief. For
                years our buyers have been comfortable with the design offered
                by Solidoc.
              </p>
            </article>
          </section>
        </article>
      </section>

      <section className="clients">
        <h2 data-aos="fade-right">
          We believe that each client is a <br /> long-term partnership...
        </h2>
        <h5 data-aos="fade-right">Our Customers</h5>
        <picture className="galery">
          <img
            data-aos="fade-up"
            src="../../partherns/3M.jpg"
            alt=""
            width={100}
          />
          <img
            data-aos="fade-up"
            src="../../partherns/municipalidad.jpg"
            alt=""
            width={100}
          />
          <img
            data-aos="fade-up"
            src="../../partherns/sodimac.png"
            alt=""
            width={200}
          />
        </picture>
      </section>

      <section className="end">
        <picture className="svg-wave ">
          <svg
            className="svg2"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              className="svg2-2"
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            ></path>
          </svg>
        </picture>
      </section>
    </>
  );
};

export default Home;
