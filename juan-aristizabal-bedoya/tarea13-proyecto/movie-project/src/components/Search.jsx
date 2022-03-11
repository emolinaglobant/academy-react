import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/feature/movieSlice";
import Header from "./Header";


const Search = () => {
  const [name, setName] = useState("batman");
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);

  return (
    <section>
      <Header />
      <form className="main_form" onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          className="input_text"
          value={name}
          placeholder="batman"
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className="error-text">{error}</p>}
      </form>
    </section>
  );
};

export default Search;
