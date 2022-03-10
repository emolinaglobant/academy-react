import {useEffect, useState, useRef} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {getResultSearch} from '../../Reducer/movieReducer';
import {getFilm} from '../../DataRequest';
import ListSearch from './ListSearch';

import './searcher.css';
import '../Films/films.css';

const Searcher = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.movieReducer.search);

    let myRef = useRef(null);
    const [inputMovie, setInputMovie] = useState('');
    const [boxList, setBoxList] = useState(false);
    
    const getNameMovie = (e) => setInputMovie(e.target.value);

    useEffect(() => {
        if (inputMovie !== '') {
            searchMovie();
        }
    },[inputMovie]);

    //search movies
    const searchMovie = () => {
        getFilm(inputMovie).then((foundMovies) => dispatch(getResultSearch(foundMovies.results)))
        .catch(function(err){
            console.log(err);
        })
    }

    const validSearch = (inputMovie) => {
        const userRegex = /^[A-Z ]+$/i;  
        return userRegex.test(inputMovie);
    }

    const search = (e) => {
        e.preventDefault()

        if (!validSearch(inputMovie)) {
            setInputMovie('');
            setBoxList(false);
        }else {
            myRef.current.scrollIntoView();
            setBoxList(true);
        }
    }
   
    return (
        <>
            <div className='container-search'>
                <img src='https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg' alt='img'></img>
                <header>
                    <h1>films<span>Web</span></h1>
                </header>
                <section className='box-input'>
                    <input type='text' name='search' placeholder='search movies,series,tv' onChange={getNameMovie} value={inputMovie} autocomplete='off' />
                    <button className='btn-search' aria-label='btn-search' onClick={search}><span className='icon-search'></span></button>
                </section>
                <span className='icon-up-open'></span>
            </div>

            <div ref={myRef}>
                <section className={boxList ? 'listSearch' : 'hide-listSearch'}>
                    <label>results of your search: <span>"{state.length !== 0 ? inputMovie : "No results found"}"</span></label>
                    <div className='list'>
                        <ListSearch />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Searcher;




