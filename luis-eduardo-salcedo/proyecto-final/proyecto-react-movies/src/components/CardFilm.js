import React from "react";
import "../css/user.css";
import MovieCard from "./MovieCard";

function CardFilm({ data, page, setPage }) {
    return (
        <>
            <article className="container ">
                <section className="buttons-change-page">
                    {page === 1 ? (
                        <button
                            className="buttons-change-page-btn"
                            onClick={() => setPage(page + 1)}
                        >
                            Next
                        </button>
                    ) : (
                        <>
                            <button
                                className="buttons-change-page-btn"
                                onClick={() => setPage(page - 1)}
                            >
                                Previos
                            </button>
                            <button
                                className="buttons-change-page-btn"
                                onClick={() => setPage(page + 1)}
                            >
                                Next
                            </button>
                        </>
                    )}
                </section>
            </article>

            <section className="container-movies max-center">
                {data.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
            </section>

            <article className="container ">
                <section className="buttons-change-page">
                    {page === 1 ? (
                        <button
                            className="buttons-change-page-btn"
                            onClick={() => setPage(page + 1)}
                        >
                            Next
                        </button>
                    ) : (
                        <>
                            <button
                                className="buttons-change-page-btn"
                                onClick={() => setPage(page - 1)}
                            >
                                Previos
                            </button>
                            <button
                                className="buttons-change-page-btn"
                                onClick={() => setPage(page + 1)}
                            >
                                Next
                            </button>
                        </>
                    )}
                </section>
            </article>
        </>
    );
}

export default CardFilm;
