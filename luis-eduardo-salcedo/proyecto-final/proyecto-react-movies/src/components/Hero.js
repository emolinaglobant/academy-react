import React from "react";

const Hero = ({ selectedMovie }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";
    return (
        <article
            className={"hero"}
            style={{
                backgroundImage: `url(${IMAGE_PATH}${
                    selectedMovie && selectedMovie.backdrop_path
                })`,
            }}
        >
            <section className={"hero-content max-center"}>
                <h1 className={"hero-title"}>
                    {selectedMovie && selectedMovie.title}
                </h1>
                {selectedMovie && selectedMovie.overview ? (
                    <p className={"hero-overview"}>
                        {" "}
                        {selectedMovie && selectedMovie.overview}
                    </p>
                ) : (
                    'orem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bono'
                )}
            </section>
        </article>
    );
};

export default Hero;
