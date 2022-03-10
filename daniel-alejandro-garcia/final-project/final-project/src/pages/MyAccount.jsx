import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/authContext/AuthContext";
import entrenador from "../assets/img/entrenador.png";
import { usePokeApi } from "../context/pokeApiContext/PokeApiContext";
import "../css/MyAccountStyle.css";

function MyAccount() {
  const { user } = useAuth();
  const { myFavoritesPokemons, resetPokemonsLiked } = usePokeApi();

  return (
    <>
      <NavBar />
      <article className="container p-4 mt-4 containerProfile">
        <section>
          <section className="profile">
            <figure>
              <img
                src={user.photoURL ? user.photoURL : entrenador}
                alt="profile"
              />
            </figure>
            <section>
              <h2 className="name">{user.displayName}</h2>
              <h2>{user.email}</h2>
              <h3>Pokemons Liked: {myFavoritesPokemons.length}</h3>
              <p>
                <b>Last Login:</b> {user.metadata.lastSignInTime}
              </p>
              <button onClick={resetPokemonsLiked}>Reset likes</button>
            </section>
          </section>
          <h2>Your favorite Pokemons:</h2>
          <section className="myPokemons">
            {myFavoritesPokemons.map((pokemon, index) => (
              <ul key={index}>
                <li>{pokemon}</li>
              </ul>
            ))}
          </section>
        </section>
      </article>
      <Footer />
    </>
  );
}

export default MyAccount;
