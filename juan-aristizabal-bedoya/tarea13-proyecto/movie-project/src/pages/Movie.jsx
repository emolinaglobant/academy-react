import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import { getMovie } from "../redux/feature/movieSlice";

const Movie = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id]);

  return (
    <section className="movie_container">
      <figure>
        <img src={movie.Poster} alt={movie.Title} />
      </figure>
      <section className="information_container">
        <section>
          <Typography align="left" variant="h3" gutterBottom component="h2">
            {movie.Title}
          </Typography>

          <Typography align="left" variant="h5" gutterBottom component="h5">
            Year: {movie.Year}
          </Typography>

          <Typography align="left" variant="body1" gutterBottom component="p">
            {movie.Plot}
          </Typography>

          <Typography align="left" variant="h6" gutterBottom component="h6">
            Director: {movie.Director}
          </Typography>

          <Typography align="left" variant="h6" gutterBottom component="h6">
            Runtime: {movie.Runtime}
          </Typography>

          <Typography align="left" variant="h6" gutterBottom component="h6">
            Actors: {movie.Actors}
          </Typography>

          <Typography align="left" variant="h6" gutterBottom component="h6">
            Awards: {movie.Awards}
          </Typography>
        </section>
        <section className="money_rate_information">
          <Typography
            align="justify"
            variant="h6"
            gutterBottom
            component="h6"
            className="rating"
          >
            IMDb Rating: {movie.imdbRating}
          </Typography>
          <Typography align="justify" variant="h6" gutterBottom component="h6">
            BoxOffice: {movie.BoxOffice}
          </Typography>

          <Typography align="justify" variant="h6" gutterBottom component="h6">
            Genre: {movie.Genre}
          </Typography>
        </section>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          className="btn_back"
        >
          Go Back
        </Button>
      </section>
    </section>
  );
};

export default Movie;
