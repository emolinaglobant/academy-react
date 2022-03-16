import React from "react";
import { NavDropdown } from "react-bootstrap";
import newsOption from "../assets/img/newsOption.jpg";
import "../css/CardNewStyle.css";

function CardNew({ news }) {
  return (
    <>
      <section className="card-news">
        <figure>
          <img
            src={news.urlToImage ? news.urlToImage : newsOption}
            alt={news.title}
          />
        </figure>
        <NavDropdown.Divider />
        <section>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <a href={news.url} target="_blank" rel="noreferrer">
            See more
          </a>
        </section>
        <NavDropdown.Divider />
        <section>
          <h3>Published: {news.publishedAt}</h3>
        </section>
      </section>
    </>
  );
}

export default CardNew;
