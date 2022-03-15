import React from "react";
import "../css/details-films-category.css";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import Footer from "../pages/Footer";
const DetailsFilmsCategory = ({ dataMovie, data, dataSimilar, movie }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
    const IMAGE_PATH_PROFILE = "https://image.tmdb.org/t/p/w500";
    const IMAGE_PATH_POSTER = "https://image.tmdb.org/t/p/w300";

    return (
        <>
            <article
                className="container-hero"
                style={{
                    backgroundImage: `url(${IMAGE_PATH}${
                        dataMovie && dataMovie.backdrop_path
                    })`,
                }}
            >
                <section className="hero__cards">
                    <section className="hero__container__img">
                        <img
                            className="hero__img"
                            src={`${IMAGE_PATH}${
                                dataMovie ? dataMovie.poster_path : "does not have"
                            }`}
                            alt=""
                        />
                    </section>
                    <section className="container">
                        <section className="container__title">
                            <p className="hero__title">
                                {dataMovie ? dataMovie.title : "does not have"}
                            </p>

                            <section className="genres">
                                {dataMovie ?
                                    dataMovie.genres?.map((genre, i) => (
                                            <span
                                                key={i}
                                                className="genres__item"
                                            >
                                                {genre.name}
                                            </span>
                                        )): "does not have genres"}
                            </section>
                            <section className="container__data">
                                <p className="container__runtime">
                                    Duration:{" "}
                                    {dataMovie ? dataMovie.runtime : "does not have"}{" "}
                                    min
                                </p>
                                <p>
                                    User Score:{" "}
                                    {dataMovie
                                        ? dataMovie.vote_average
                                        : "does not have"}
                                </p>
                                <p>
                                    Release:{" "}
                                    {dataMovie
                                        ? dataMovie.release_date
                                        : "does not have"}
                                </p>
                            </section>
                            <h2>General view:</h2>
                            <p>
                                {" "}
                                {dataMovie ? dataMovie.overview : "does not have"}
                            </p>
                        </section>
                    </section>
                </section>
            </article>

            <h2 style={{ textAlign: "center", fontSize: "50px" }}>main cast</h2>
            <article className="casts">
                {data
                    ? data.slice(0, 10).map((item, i) => (
                        <section key={i} className="casts__item">
                            <section>
                                {item.profile_path ? (
                                    <img
                                        className="casts__item__img"
                                        src={`${IMAGE_PATH_PROFILE}${item.profile_path}`}
                                        alt=""
                                    />
                                ) : (
                                    <section className="casts__item__im__noFound">
                                        No Image found{" "}
                                    </section>
                                )}
                            </section>
                            <p className="casts__item__name">{item.name}</p>
                            <p>{item.character}</p>
                        </section>
                    ))
                : "does not have"}
            </article>

            <article className="similar">
                <h2>Movies Similar</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                >
                    {dataSimilar.map((item, i) => (
                        <SwiperSlide key={i}>
                            <img
                                className="similar_img"
                                src={`${IMAGE_PATH_POSTER}${
                                    item ? item.poster_path : "does not have"
                                }`}
                                alt=""
                            />
                            <p>{item.title}</p>
                            <a href={`/detailsFilms/${item.id}`}>
                                More details
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>

            <Footer />
        </>
    );
};

export default DetailsFilmsCategory;
