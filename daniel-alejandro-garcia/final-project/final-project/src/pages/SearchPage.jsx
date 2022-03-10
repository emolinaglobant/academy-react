import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { usePokeApi } from "../context/pokeApiContext/PokeApiContext";
import { Button } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import { MdSearchOff } from "react-icons/md";
import CardPokemon from "../components/CardPokemon";
import "../css/SearchPokemonStyle.css";

function SearchPage() {
  const { getPokemonSearch, searchPokemon } = usePokeApi();
  const [valueInput, setValueInput] = useState("");
  const [disable, setDisable] = useState(true);

  const handleSendInfo = async () => {
    await getPokemonSearch(valueInput);
  };

  useEffect(() => {
    if (valueInput === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [valueInput]);

  return (
    <>
      <NavBar />
      <section className="container mt-4 containerSearchPage p-4">
        <section className="searchBar mb-4">
          <input
            type="text"
            onChange={(e) => setValueInput(e.target.value)}
            placeholder="Name or number"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendInfo();
              }
            }}
          />
          <Button
            variant="info"
            size="sm"
            disabled={disable}
            onClick={handleSendInfo}
          >
            <BiSearchAlt size={30} color="white" />
          </Button>{" "}
        </section>
        {searchPokemon ? (
          <CardPokemon pokemon={searchPokemon} />
        ) : (
          <section className="container text-center p-4">
            <MdSearchOff size={200} color="gray" />
            <h2>Pokemon not found</h2>
          </section>
        )}
      </section>
      <Footer />
    </>
  );
}

export default SearchPage;
