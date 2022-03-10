import React from "react";
import PropTypes from "prop-types";
import "../css/Card.css";

export const Card = ({ imageSource, title, text, url }) => {
  return (
    <>
      <main className="card text-center bg-dark animate__animated animate__fadeInUp">
        <section className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </section>
        <section className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {text
              ? text
              : "Show More"}
          </p>
          <a
            href={url ? url : ""}
            target="_blank"
            className="btn btn-outline-secondary border-0"
            rel="noreferrer"
          >
            Go to {title}
          </a>
        </section>
      </main>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;