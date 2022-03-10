import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";
import "../css/user.css";
import { useDispatch, useSelector } from "react-redux";
import { fecthSearchMovies } from "../store/films/reducerFilms";
const User = () => {
    const [searchKey, setSearchKey] = useState("");
    const { listSlideRadom, listSearchMovies:movies } = useSelector((state) => state.films);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fecthSearchMovies(searchKey));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function searchMovies(e) {
        e.preventDefault();
        dispatch(fecthSearchMovies(searchKey));
    }

    const renderMovies = () =>
    movies ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) : "";
    return (
        <>
            <Hero selectedMovie={listSlideRadom} />

            <header className={"header"}>
                <article className={"header-content max-center"}>
                    <section className={"container"}>
                        <form onSubmit={searchMovies} className="form-search">
                            <input
                                className="input-search"
                                type="text"
                                onChange={(e) => setSearchKey(e.target.value)}
                                placeholder="Search you movies"
                            />
                            <button className="btn-search" type={"submit"}>
                                Search!
                            </button>
                        </form>
                    </section>
                </article>
            </header>
            <section className="container-movies max-center">{renderMovies()}</section>
        </>
    );
};

export default User;