import { ReactComponent as Heart } from "./assets/heart.svg";

const converToHearts = (lifes) => {
  const emptyArray = Array.apply(null, Array(lifes));
  return emptyArray.map((emptyElement, index) => (
    <Heart key={index} width={75} height={75} />
  ));
};
const dropMovie = (movie, moviesState) => {
  const movies = { ...moviesState };
  delete movies[movie.name];
  return movies;
};
const getRandomMovie = (movies) => {
  const moviesNames = Object.keys(movies);
  const randomMovie = moviesNames[(moviesNames.length * Math.random()) << 0];
  return { name: randomMovie, emoji: movies[randomMovie] };
};

export { getRandomMovie, dropMovie, converToHearts };
