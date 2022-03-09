import React, { useContext } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import { ContextData } from "../../context/getData";
import Weakness from "../../components/weakness/weakness";

function Home() {
  const { monsters, geraltMode, geralt, ciri, setGeraltMode } =
    useContext(ContextData);
  const randomNum = Math.floor(Math.random() * 71);
  const randomMonster = monsters[randomNum];
  const mainCharacter = geraltMode ? geralt : ciri;
  const geraltTitular = geraltMode ? " " : "thingTxt";
  const ciriTitular = geraltMode ? "thingTxt" : " ";

  return (
    <article className="home">
      <section className="randomMonster">
        <section className="infoMonster">
          <Link to={`/creature/${randomMonster.alt_name}`} key={randomMonster._id}>
            <h2>{randomMonster.creature_name}</h2>
          </Link>
          <h4>{randomMonster.group}</h4>
          <section className="homeWeakness">
            <Weakness monsterWeak={randomMonster.oils} />
            {randomMonster.weakness.map((i, id) => {
              return <Weakness monsterWeak={i} key={id} />;
            })}
          </section>
        </section>
        <section className="borderMonsterHomeImg">
          <figure>
            <img src={randomMonster.img} alt={randomMonster.alt_name} />
          </figure>
        </section>
      </section>
      <section className="biography">
        <section className="borderBiographyHomeImg">
          <figure>
            <img src={mainCharacter.img} alt={mainCharacter.name} />
          </figure>
        </section>
        <section className="biographyText">
          <h3 onClick={() => setGeraltMode(!geraltMode)}>
            <span className={geraltTitular}>{geralt.name}</span> ||{"  "}
            <span className={ciriTitular}>{ciri.name}</span>
          </h3>
          <p>{mainCharacter.text}</p>
        </section>
      </section>
    </article>
  );
}

export default Home;
