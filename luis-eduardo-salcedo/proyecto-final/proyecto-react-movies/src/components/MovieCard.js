import React from "react";

import "../css/user.css";
function MovieCard({ movie }) {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
    return (
        <article className="movie-card">
            {movie.poster_path ? (
                <img
                    className={"movie-cover"}
                    src={`${IMAGE_PATH}${movie.poster_path}`}
                    alt=""
                />
            ) : (
                <section className={"movie-placeholder"}>
                    No Image found{" "}
                </section>
            )}
            <h5 className={"movie-title"}>{movie.title}</h5>

            <a href={`/detailsFilms/${movie.id}`}>More details</a>
        </article>
    );
}

export default MovieCard;
