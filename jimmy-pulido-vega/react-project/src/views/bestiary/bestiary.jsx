import React, { useContext } from "react";
import "./bestiary.scss";
import { ContextData } from "../../context/getData";
import { Link } from "react-router-dom";
import DropMenu from "../../components/dropMenu/dropMenu";
import Card from "../../components/card/card";
import NoList from "../../components/noList/noList";

function Bestiary() {
  const {
    sings,
    bombs,
    potions,
    groups,
    filterList,
    Titlesings,
    setTiltesings,
    Titlebombs,
    setTiltebombs,
    Titlepotions,
    setTiltepotions,
    Titlegroups,
    setTiltegroups,
    filterDataGroup,
    filterDataSings,
    filterDataBombs,
    filterDataPoions,
  } = useContext(ContextData);

  return (
    <article className="bestiary">
      <h4>Type of weaknes</h4>
      <section className="listWeakness">
        <div className="borderList">
          <DropMenu
            array={sings}
            filterData={filterDataSings}
            tilte={Titlesings}
            setTitle={setTiltesings}
          />
          <DropMenu
            array={bombs}
            filterData={filterDataBombs}
            tilte={Titlebombs}
            setTitle={setTiltebombs}
          />
          <DropMenu
            array={potions}
            filterData={filterDataPoions}
            tilte={Titlepotions}
            setTitle={setTiltepotions}
          />
        </div>
      </section>
      <h4>Type of Beast</h4>
      <section className="listGroups">
        <div className="borderList">
          <DropMenu
            array={groups}
            filterData={filterDataGroup}
            tilte={Titlegroups}
            setTitle={setTiltegroups}
          />
        </div>
      </section>
      {filterList.length !== 0 ? (
        <section className="listBeasts">
          {filterList.map((i) => {
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

export default Bestiary;
