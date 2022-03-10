import React, { useContext } from "react";
import "./huntedList.scss"
import { ContextData } from "../../context/getData";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import NoList from "../../components/noList/noList";

function HuntedList() {
  const { monsters } = useContext(ContextData);
  const newList = monsters.filter((i) => i.hunted === true);
  return (
    <article className="huntedList">
      <h3>Hunted Beast</h3>
      {newList.length !== 0 ? (
        <section className="cardList">
          {newList.map((i) => {
            return (
              <Link to={`/creature/${i.alt_name}`} key={i._id}>
                <Card {...i} />
              </Link>
            );
          })}
        </section>
      ) : (
        <NoList />
      )}
    </article>
  );
}

export default HuntedList;
