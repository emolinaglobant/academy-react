import { useEffect, useState } from 'react';
import { getMovies } from '../../Reducer/movieReducer';
import { useDispatch } from 'react-redux';
import {getAllFilms} from "../../DataRequest";
import Films from '../Films/Films';
import Pagination from '../Pagination/Pagination';
import "../Films/films.css";

const RenderApi = () => {
    
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const getAllMovies = () => {
        getAllFilms(count).then((allMovies) => dispatch(getMovies(allMovies.results)))
        .catch(function(err){
            console.log(err);
        })
    }

    useEffect(() => {
        getAllMovies();
    });

    // paging functions
    const nextPage = () => {
        let pagina = count + 1;
        setCount(pagina);
    }

    const previousPage = () => {
        let pagina = count - 1;
        if (pagina === 0) return null;
        setCount(pagina);
    }

    return (
        <fragment id="top">
            <header className="title-films">
                <label>on billboard 🎬</label>
            </header>
            <article className="list">
                <Films />
            </article>
            <Pagination
                previousPage={previousPage}
                nextPage={nextPage}
                count={count}
            />
        </fragment>
    );
};

export default RenderApi;