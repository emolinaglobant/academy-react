import React, { useState } from "react";
import "./beast.scss";
import Weakness from "../../components/weakness/weakness";

function Beast({
  creature_name,
  group,
  img,
  description,
  hunted,
  location,
  oils,
  weakness,
  _id,
  huntedMonster,
}) {
  const [ubication, setUbication] = useState("");
  const ubicationLowCase = ubication.toLowerCase();
  const huntedHandler = () => {
    if (!hunted && ubication.length > 3) {
      console.log(ubicationLowCase, _id);
      huntedMonster(ubicationLowCase, _id);
    }
  };

  return (
    <article className="beastView">
      <h1>{creature_name}</h1>
      <h4>{group}</h4>
      <section className="beastInfo">
        <section className="beastImg">
          <figure>
            <img src={img} alt={creature_name} />
          </figure>
        </section>
        <section className="beastWeakness">
          <Weakness monsterWeak={oils} />
          {weakness.map((i, id) => {
            return <Weakness monsterWeak={i} key={id} />;
          })}
        </section>
        <section className="BeastHunted">
          {!hunted ? (
            <>
              <section className="borderButton">
                <button onClick={huntedHandler}>no hunted</button>
              </section>
              <form>
                <input
                  type="text"
                  value={ubication}
                  placeholder="Ubication (min 3 characters)"
                  onChange={(e) => setUbication(e.target.value)}
                />
              </form>
            </>
          ) : (
            <p>
              hunted in: <span>{location}</span>
            </p>
          )}
        </section>
      </section>
      <section className="beastText">
        <p>{description}</p>
      </section>
    </article>
  );
}

export default Beast;
