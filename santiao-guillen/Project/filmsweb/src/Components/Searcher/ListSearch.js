import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import img from '../../images/img-error.svg';
import "./searcher.css";

const ListSearch = () => {

    const state = useSelector(state => state.movieReducer.search);
    const navigate = useNavigate();

    return (
        <>
          {state.map((movie) => {
            return <div className="card-search" >
                <img onClick={()=> navigate(`/AboutFilm/${movie.id}`)} 
                src={movie.poster_path ? "https://image.tmdb.org/t/p/w1280" + movie.poster_path : img} 
                alt="poster"></img>
            </div> 
            })}
        </>
    );
};

export default ListSearch;
