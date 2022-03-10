import React from "react";
import { Button } from "react-bootstrap";
import CardPokemon from "../components/CardPokemon";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SpinnerLoading from "../components/SpinnerLoading";
import { usePokeApi } from "../context/pokeApiContext/PokeApiContext";

function SurpriseMePage() {
  const { randomPokemon, randomPokemonFetch } = usePokeApi();
  let arrayRandoms = [];
  const handleNumberRandom = () => {
    while (arrayRandoms.length <= 4) {
      let random = Math.floor(Math.random() * 700 + 1);
      arrayRandoms.push(random);
      arrayRandoms.map((pokemon) => {
        return randomPokemonFetch(pokemon);
      });
    }
  };

  return (
    <>
      <NavBar />
      <section className="container mt-2 text-center">
        <h2>Surprise Me!</h2>
        <section className="container d-flex flex-wrap gap-4 p-2 justify-content-center">
          {randomPokemon ? (
            randomPokemon.map((p) => <CardPokemon pokemon={p} key={p.name} />)
          ) : (
            <SpinnerLoading />
          )}
        </section>
        <Button onClick={handleNumberRandom} size="md">
          Surprise Me!
        </Button>
      </section>
      <Footer />
    </>
  );
}

export default SurpriseMePage;
