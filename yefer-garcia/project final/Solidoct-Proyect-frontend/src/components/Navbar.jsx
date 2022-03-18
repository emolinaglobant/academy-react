import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;

    let header = document.getElementById("header");

    if (scroll > 20) {
      header.classList.add("nav_mod");
    } else if (scroll < 20) {
      header.classList.remove("nav_mod");
    }
  };
  const location = useLocation();
  let nav = document.getElementById("nav");
  let background_menu = document.getElementById("back_menu");

  function mostrar_menu() {
    nav.style.right = "300px";
    background_menu.style.display = "block";
  }

  function ocultar_menu() {
    nav.style.right = "-350px";
    background_menu.style.display = "none";
  }

  return (
    <header id="header" data-aos="fade-down">
      <article className="container__header">
        <section className="logo">
          <a href="/">
            <h1>Sólidoct</h1>
          </a>
        </section>
        <nav className="container__nav">
          <i className="fas fa-bars " id="btn_menu" onClick={mostrar_menu}></i>
          <div id="back_menu" onClick={ocultar_menu}></div>
          <nav id="nav">
            <ul>
              {localStorage.getItem("token_admin") ? (
                <>
                  <li>
                    {location.pathname == "/" ? (
                      <a href="/" className="select">
                        HOME
                      </a>
                    ) : (
                      <a href="/">HOME</a>
                    )}
                  </li>
                  <li>
                    {location.pathname == "/about" ? (
                      <a href="/about" className="select">
                        ABOUT US
                      </a>
                    ) : (
                      <a href="/about">ABOUT US</a>
                    )}
                  </li>
                  <li>
                    {location.pathname == "/questions" ? (
                      <a href="/questions" className="select">
                        F Q
                      </a>
                    ) : (
                      <a href="/questions">F Q</a>
                    )}
                  </li>
                  <li>
                    {location.pathname == "/contact" ? (
                      <a href="/contact" className="select">
                        CONTACT
                      </a>
                    ) : (
                      <a href="/contact">CONTACT</a>
                    )}
                  </li>
                  <li>
                    {location.pathname == "/manager_solidoct" ? (
                      <a href="/manager_solidoct" className="select">
                        ADMIN SOLIDOCT
                      </a>
                    ) : (
                      <a href="/manager_solidoct">ADMIN SOLIDOCT</a>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <li>
                    {location.pathname == "/" ? (
                      <a href="/" className="select">
                        HOME
                      </a>
                    ) : (
                      <a href="/">HOME</a>
                    )}
                  </li>
                  <li>
                    {location.pathname == "/about" ? (
                      <a href="/about" className="select">
                        ABOUT US
                      </a>
                    ) : (
                      <a href="/about">ABOUT US</a>
                    )}
                  </li>
                  <li>
                    {location.pathname == "/questions" ? (
                      <a href="/questions" className="select">
                        F Q
                      </a>
                    ) : (
                      <a href="/questions">F Q</a>
                    )}
                  </li>
                  <li>
                    {location.pathname == "/contact" ? (
                      <a href="/contact" className="select">
                        CONTACT
                      </a>
                    ) : (
                      <a href="/contact">CONTACT</a>
                    )}
                  </li>
                </>
              )}
            </ul>
          </nav>
        </nav>
      </article>
    </header>
  );
};

export default Navbar;
