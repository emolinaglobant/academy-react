import "./weakness.scss";
import React, { useContext, useState } from "react";
import { ContextData } from "../../context/getData";

function Weakness({ monsterWeak }) {
  const { weakness } = useContext(ContextData);
  const [showName, setShowName] = useState(false);
  const onMouseHandler = () => setShowName(!showName);

  return weakness.map((i) => {
    return (
      monsterWeak === i.name && (
        <section
          className="weakImg"
          key={i._id}
          onMouseEnter={onMouseHandler}
          onMouseLeave={onMouseHandler}
        >
          <figure>
            <img src={i.img} alt={i.alt_name} />
          </figure>
          {showName && <p>{i.alt_name}</p>}
        </section>
      )
    );
  });
}

export default Weakness;
