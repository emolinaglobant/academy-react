import { useEffect, useRef, useState } from "react";
import Elements from "../components/Elements";
import Modal from "../components/UI/Modal";
import {ReactComponent as MovieSvg} from "../assets/movie.svg";
import { useSelector } from "react-redux";

const Movies = () => {
  const data = useSelector(state => state.data.movies);
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState(undefined);
  const convertToList = (item) => {
    const formatItem = {
      Title: item.title,
      "Episode Number": item.episode_id,
      Director: item.director,
      Producer: item.producer,
    };
    return Object.entries(formatItem);
  };

  return (
    <section>
      <Elements total={data.length}>
        {data.map((movies, index) => (
          <ul key={index} className="items">
            {movies.results.map((movie, index) => (
              <li
                key={index}
                className="item"
                onClick={() => {
                  setShowModal(true);
                  setMovie(convertToList(movie));
                }}
              >{movie.title}
                <MovieSvg width="80" heigth="80" opacity={.7}/>
              </li>
            ))}
          </ul>
        ))}
      </Elements>
      <Modal
        showModal={showModal}
        itemList={movie}
        onCloseModal={() => {
          setShowModal(false);
        }}
      />
    </section>
  );
};
export default Movies;
