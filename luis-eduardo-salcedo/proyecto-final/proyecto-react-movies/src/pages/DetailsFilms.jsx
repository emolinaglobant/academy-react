
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsFilmsCategory from "../components/DetailsFilmsCategory";
import { NavBar } from "../components/NavBar";
import { fecthCastCredits, fecthMoviesCard, fecthSimilar } from "../store/films/reducerFilms";

function DetailsFilms() {
    const { movie } = useParams();
    const { setListCast, setListSimilar, setListMoviesCard } = useSelector((state) => state.films);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(fecthMoviesCard(movie));
        dispatch(fecthCastCredits(movie));
        dispatch(fecthSimilar(movie));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <NavBar />
            <DetailsFilmsCategory
                data={setListCast}
                dataMovie={setListMoviesCard}
                dataSimilar={setListSimilar}
                movie={movie}
            />
        </>
    );
}

export default DetailsFilms;
