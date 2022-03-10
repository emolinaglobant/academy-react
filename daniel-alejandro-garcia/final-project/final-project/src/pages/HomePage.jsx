import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { usePokeApi } from "../context/pokeApiContext/PokeApiContext";
import Pagination from "../components/Pagination";
import SpinnerLoading from "../components/SpinnerLoading";
import CardPokemon from "../components/CardPokemon";

function HomePage() {
  const {
    pokemon,
    loading,
    goToNextPage,
    goToPrevPage,
    nextPageURL,
    prevPageURL,
  } = usePokeApi();

  if (loading) return <SpinnerLoading />;

  return (
    <>
      <NavBar />
      <article className="container mt-4">
        <h1>POKEDEX</h1>
        <Pagination
          gotoNextPage={nextPageURL ? goToNextPage : null}
          gotoPrevPage={prevPageURL ? goToPrevPage : null}
        />
        <section className="card-group-pokeapi p-4">
          {pokemon.map((p) => (
            <CardPokemon pokemon={p} key={p.name} />
          ))}
        </section>
        <Pagination
          gotoNextPage={nextPageURL ? goToNextPage : null}
          gotoPrevPage={prevPageURL ? goToPrevPage : null}
        />
      </article>
      <Footer />
    </>
  );
}

export default HomePage;
