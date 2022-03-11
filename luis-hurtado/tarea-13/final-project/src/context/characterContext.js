import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterContextProvider = (props) => {
  //character state
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter] = useState(null);

  //filter state
  let status = ["Alive", "Dead", "Unknown"];
  let genders = ["female", "male", "genderless", "unknown"];
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  //handleFilters
  const [filterStatus, setFilterStatus] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [userInput, setUserInput] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  //api URL
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${userInput}&status=${filterStatus}&gender=${filterGender}&species=${filterSpecies}`;

  //API call
  const getData = async () => {
    try {
      const data = await axios.get(api);
      setCharacters(data.data.results);
      console.log(data.data);
    } catch (error) {
      setCharacters([]);
      console.log("No characters found");
    }
  };

  useEffect(() => {
    getData(api);
  }, [api]);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        selectedCharacter,
        status,
        species,
        genders,
        userInput,
        pageNumber,
        getData,
        setPageNumber,
        setUserInput,
        setCharacters,
        setFilterStatus,
        setFilterGender,
        setFilterSpecies,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
