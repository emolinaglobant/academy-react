import React from "react";
import { AiOutlineRight, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAuth } from "../context/authContext/AuthContext";
import { usePokeApi } from "../context/pokeApiContext/PokeApiContext";
import "../css/CardPokemonStyle.css";

function CardPokemon({ pokemon }) {
  const { catchMyFavoritePokemons, myFavoritesPokemons } = usePokeApi();
  const { user } = useAuth();

  const redHeart = <AiFillHeart color="red" />;
  const blackHeart = <AiOutlineHeart color="white" />;

  const heart = myFavoritesPokemons.some(
    (favPokemon) => favPokemon === pokemon.name
  )
    ? redHeart
    : blackHeart;

  const changeStateLike = (idPokemon) => {
    catchMyFavoritePokemons(idPokemon);
  };

  return (
    <>
      {pokemon && (
        <section key={pokemon.id} className="card-pokemons">
          <section className="pokemon-id">
            <h2>#{pokemon.id}</h2>
          </section>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
          <section className="pokemon-types">
            {pokemon.types.map((type, index) => {
              return (
                <section
                  key={index}
                  className={`pokemon-type-text type-${type.type.name}`}
                >
                  {type.type.name}
                </section>
              );
            })}
          </section>
          <section className="mt-2 options-pokemon">
            {user ? (
              <>
                <a href="#!" onClick={() => changeStateLike(pokemon.name)}>
                  {heart}
                </a>
              </>
            ) : (
              <a href="/login">{heart}</a>
            )}
            <a
              href={`/pokemon/information/${pokemon.id}`}
              variant="outline-dark"
            >
              <AiOutlineRight size={20} color="white" />
            </a>
          </section>
        </section>
      )}
    </>
  );
}

export default CardPokemon;
