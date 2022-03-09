import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { geralt, ciri } from "./geraltAndCiri";
import { sings, bombs, potions, groups } from "./listWeakness";

export const ContextData = createContext({});
export const ContextDataProvider = (props) => {
  const [monsters, setMonsters] = useState([]);
  const [weakness, setWeakness] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [geraltMode, setGeraltMode] = useState(true);
  const [appLoaded, setAppLoaded] = useState(false);
  const [Titlesings, setTiltesings] = useState(sings[0]);
  const [Titlebombs, setTiltebombs] = useState(bombs[0]);
  const [Titlepotions, setTiltepotions] = useState(potions[0]);
  const [Titlegroups, setTiltegroups] = useState(groups[0]);
  const [counter, setCounter] = useState(0)

  // Get Data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://the-witcher-bestiary.herokuapp.com/api/"
      );
      const data = await res.json();
      setMonsters(data.creatures);
      setWeakness(data.weakness);
      setFilterList(data.creatures);
      setTimeout(() => {
        setAppLoaded(true);
      }, 1500);
    }
    fetchData();
  }, [counter]);

  // Put Hunted Data
  const huntedMonster = async (place, id) => {
    const res = await fetch(
      `https://the-witcher-bestiary.herokuapp.com/api/creatures/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          hunted: true,
          location: place,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    setCounter(counter + 1)
    console.log(res);
  };

  // Filter Data
  function filterDataGroup(e) {
    let newList = [];
    monsters.filter((value) => {
      return e.target.value === "all creatures"
        ? newList.push(value)
        : value.group === e.target.value && newList.push(value);
    });
    setFilterList(newList);
    setTiltesings(sings[0]);
    setTiltebombs(bombs[0]);
    setTiltepotions(potions[0]);
  }

  function filterDataSings(e) {
    let newList = [];
    monsters.filter((value) => {
      return e.target.value === "all signs"
        ? newList.push(value)
        : value.weakness.filter((i) => {
            return i === e.target.value && newList.push(value);
          });
    });
    setFilterList(newList);
    setTiltegroups(groups[0]);
    setTiltebombs(bombs[0]);
    setTiltepotions(potions[0]);
  }

  function filterDataBombs(e) {
    let newList = [];
    monsters.filter((value) => {
      return e.target.value === "all bombs"
        ? newList.push(value)
        : value.weakness.filter((i) => {
            return i === e.target.value && newList.push(value);
          });
    });
    setFilterList(newList);
    setTiltegroups(groups[0]);
    setTiltesings(sings[0]);
    setTiltepotions(potions[0]);
  }

  function filterDataPoions(e) {
    let newList = [];
    monsters.filter((value) => {
      return e.target.value === "all potions"
        ? newList.push(value)
        : value.weakness.filter((i) => {
            return i === e.target.value && newList.push(value);
          });
    });
    setFilterList(newList);
    setTiltegroups(groups[0]);
    setTiltesings(sings[0]);
    setTiltebombs(bombs[0]);
  }

  return (
    <ContextData.Provider
      value={{
        monsters,
        weakness,
        appLoaded,
        geraltMode,
        geralt,
        ciri,
        setGeraltMode,
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
        huntedMonster,
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};
