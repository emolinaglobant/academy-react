import {useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";

import "./films.css";

const Films = () => {

    const state = useSelector(state => state.movieReducer.allMovies);
    const navigate = useNavigate();

    return (
        <>
        {
            state.map((movie) => {
            return <section className="container-cards" key={movie.id}>
                <img src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path} 
                onClick={()=> navigate(`/AboutFilm/${movie.id}`) } alt="imgs-props"></img>
                <label>{movie.vote_average} ⭐</label>
                <h4 className="title">{movie.title}</h4>
            </section>
            })}
        </>
    );
};

export default Films;