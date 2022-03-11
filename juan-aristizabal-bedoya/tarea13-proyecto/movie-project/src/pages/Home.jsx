import React from "react";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";

const Home = () => {
  return (
    <article>
      <Search />
      <MoviesList />
    </article>
  );
};

export default Home;
