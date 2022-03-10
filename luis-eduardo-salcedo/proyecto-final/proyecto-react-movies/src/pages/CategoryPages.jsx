import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { useDispatch } from "react-redux";
import { fectchCategoryFilm } from "../store/films/reducerFilms";
import { FilmsList } from "../components/FilmsList";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
function CategoryPages() {
    const { category } = useParams();
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fectchCategoryFilm(category, page));
    });

    return (
        <>
            <NavBar />
            <FilmsList page={page} setPage={setPage} />
            <Footer />
        </>
    );
}

export default CategoryPages;
