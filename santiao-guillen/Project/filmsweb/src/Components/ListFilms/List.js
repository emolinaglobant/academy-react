import { useEffect } from 'react';
import { getMovies } from '../../Reducer/movieReducer';
import { useDispatch , useSelector} from 'react-redux';
import {getAllFilms} from "../../DataRequest";
import Films from '../Films/Films';
import Pagination from '../Pagination/Pagination';
import "../Films/films.css";

const RenderApi = () => {
    
    const dispatch = useDispatch();
    const count = useSelector(state => state.movieReducer.count);

    const getAllMovies = () => {
        getAllFilms(count).then((allMovies) => dispatch(getMovies(allMovies.results)))
        .catch(function(err){
            console.log(err);
        })
    }

    useEffect(() => {
        getAllMovies();
    });

    return (
        <fragment id="top">
            <header className="title-films">
                <label>on billboard 🎬</label>
            </header>
            <article className="list">
                <Films />
            </article>
            <Pagination count={count}/>
        </fragment>
    );
};

export default RenderApi;