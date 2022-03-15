import React, { useEffect } from "react";
import { fetchAllFilm } from "../store/films/reducerFilms";
import { useDispatch, useSelector } from "react-redux";
import CardFilm from "./CardFilm";

export const FilmsList = ({ page, setPage }) => {
    const { list } = useSelector((state) => state.films);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllFilm());
    }, [dispatch]);

    return <CardFilm data={list} page={page} setPage={setPage} />;
};
