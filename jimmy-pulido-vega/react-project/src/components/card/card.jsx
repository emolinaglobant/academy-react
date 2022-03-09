import React from "react";
import "./card.scss";
import huntedIcon from "../../images/hunted.png";

function Card({ img, alt_name, creature_name, group, hunted }) {
  return (
    <section className="card">
      <div className="cardBorder">
        {hunted && (
          <figure className="hunted">
            <img src={huntedIcon} alt="hunted icon" />
          </figure>
        )}
        <figure>
          <img src={img} alt={alt_name} />
        </figure>
        <section className="cardText">
          <h2>{creature_name}</h2>
          <p>{group}</p>
        </section>
      </div>
    </section>
  );
}

export default Card;
