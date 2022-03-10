import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const pokeApiContext = createContext();

const INITIAL_URL = "https://pokeapi.co/api/v2/pokemon";

export const usePokeApi = () => {
  const context = useContext(pokeApiContext);
  if (!context) throw new Error("Not pokeApi Provider");
  return context;
};

export const PokeApiContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [individualPokemon, setIndividualPokemon] = useState();
  const [searchPokemon, setSearchPokemon] = useState();
  const [currentPageURL, setCurrentPageURL] = useState(INITIAL_URL);
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);
  const [randomPokemon, setRandomPokemon] = useState([]);
  const [myFavoritesPokemons, setMyFavoritesPokemons] = useState(() => {
    const saved = window.localStorage.getItem("namePokemon");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const getFetchPokemon = async () => {
    axios
      .get(currentPageURL, {
        cancelToken: source.token,
      })
      .then(async (resp) => {
        setLoading(false);
        setNextPageURL(resp.data.next);
        setPrevPageURL(resp.data.previous);
        const promises = resp.data.results.map(async (pokemonData) => {
          return await fetchData(pokemonData.url);
        });
        const result = await Promise.all(promises);
        setPokemon(result);
      })
      .catch((error) => console.log(error));
    setLoading(true);
  };

  const getIndividual = async (id) => {
    await axios
      .get(`${INITIAL_URL}/${id}`)
      .then((resp) => {
        setIndividualPokemon(resp.data);
      })
      .catch((error) => console.log(error));
  };

  const randomPokemonFetch = async (number) => {
    await axios
      .get(`${INITIAL_URL}/${number}`)
      .then((resp) => {
        setRandomPokemon([...randomPokemon, resp.data]);
      })
      .catch((error) => console.log(error));
  };

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonSearch = async (pokemonName) => {
    await axios
      .get(`${INITIAL_URL}/${pokemonName}`)
      .then((resp) => {
        if (resp === undefined) {
          setSearchPokemon([]);
        }
        setSearchPokemon(resp.data);
      })
      .catch((error) => {
        console.log(error);
        setSearchPokemon(undefined);
      });
  };

  const goToNextPage = () => {
    setCurrentPageURL(nextPageURL);
  };

  const goToPrevPage = () => {
    setCurrentPageURL(prevPageURL);
  };

  const catchMyFavoritePokemons = (idPokemon) => {
    let updated = [...myFavoritesPokemons];
    const indexFav = myFavoritesPokemons.indexOf(idPokemon);
    if (indexFav >= 0) {
      updated.splice(indexFav, 1);
      setMyFavoritesPokemons(updated);
    } else {
      setMyFavoritesPokemons([idPokemon, ...myFavoritesPokemons]);
    }
    window.localStorage.setItem(
      "namePokemon",
      JSON.stringify(myFavoritesPokemons)
    );
  };

  const resetPokemonsLiked = () => {
    window.localStorage.removeItem("namePokemon");
    setMyFavoritesPokemons([]);
  };

  useEffect(() => {
    window.localStorage.setItem(
      "namePokemon",
      JSON.stringify(myFavoritesPokemons)
    );
  }, [myFavoritesPokemons]);

  useEffect(() => {
    getFetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageURL]);

  return (
    <pokeApiContext.Provider
      value={{
        goToNextPage,
        goToPrevPage,
        getPokemonSearch,
        randomPokemonFetch,
        getIndividual,
        catchMyFavoritePokemons,
        resetPokemonsLiked,
        pokemon,
        loading,
        nextPageURL,
        prevPageURL,
        searchPokemon,
        randomPokemon,
        individualPokemon,
        myFavoritesPokemons,
      }}
    >
      {children}
    </pokeApiContext.Provider>
  );
};
