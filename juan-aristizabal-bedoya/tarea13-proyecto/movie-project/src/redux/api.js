import axios from "axios";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=db71dbe`;

export const fetchMovies = async (movieName) => {
  return axios.get(`${API_ENDPOINT}&s=${movieName}`);
};

export const fetchMovie = async (movieId) => {
  return axios.get(`${API_ENDPOINT}&i=${movieId}`);
};
