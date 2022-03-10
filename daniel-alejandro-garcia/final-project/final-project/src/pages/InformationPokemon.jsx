/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePokeApi } from "../context/pokeApiContext/PokeApiContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SpinnerLoading from "../components/SpinnerLoading";
import "../css/InformationPokemonStyle.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function InformationPokemon() {
  const { individualPokemon, getIndividual } = usePokeApi();
  const { id } = useParams();
  let statist = [];

  const data = {
    labels: [
      "hp",
      "attack",
      "defense",
      "special-attack",
      "special-defense",
      "speed",
    ],
    datasets: [
      {
        label: "Stats",
        data: statist,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  useEffect(() => {
    getIndividual(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      <h1 className="text-center mt-4">Pokemon Information</h1>
      <section className="container p-4 information-container">
        {individualPokemon ? (
          <>
            <section className="simple-data">
              <figure>
                <img
                  src={individualPokemon.sprites.front_default}
                  alt={individualPokemon.name}
                />
              </figure>
              <h2>
                {individualPokemon.name} #{individualPokemon.id}
              </h2>
            </section>
            <section className="stats-pokemon">
              {individualPokemon.stats.map((stat) => {
                statist.push(stat.base_stat);
              })}
              <Radar data={data} options={options} />
            </section>
            <section className="basic-information">
              <section className="sectionOne">
                <h3>Height: {individualPokemon.height / 10}kg</h3>
                <h3>Weight: {individualPokemon.weight / 10}m</h3>
              </section>
              <section className="sectionTwo">
                <h2>Abilities:</h2>
                {individualPokemon.abilities.map((ability, index) => {
                  return <li key={index}>{ability.ability.name}</li>;
                })}
              </section>
              <section className="types-pokemon">
                <h2 className="text-center">Type:</h2>
                <section>
                  {individualPokemon.types.map((type, index) => {
                    return (
                      <section
                        key={index}
                        className={`pokemon-type type-${type.type.name}`}
                      >
                        {type.type.name}
                      </section>
                    );
                  })}
                </section>
              </section>
            </section>
          </>
        ) : (
          <SpinnerLoading />
        )}
      </section>
      <Footer />
    </>
  );
}

export default InformationPokemon;
