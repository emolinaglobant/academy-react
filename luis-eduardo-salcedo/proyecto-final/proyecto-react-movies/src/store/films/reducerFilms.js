import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const filmsSlice = createSlice({
    name: "films",
    initialState: {
        list: [],
        listSlide: [],
        listSlideRadom: [],
        listSearchMovies: [],
        setListCast: [],
        setListSimilar: [],
        setListMoviesCard: [],
    },
    reducers: {
        setFilmList: (state, action) => {
            state.list = action.payload;
        },
        setSlideList: (state, action) => {
            state.listSlide = action.payload;
        },
        setListSlideRadom: (state, action) => {
            state.listSlideRadom = action.payload;
        },
        setListSearchMovies: (state, action) => {
            state.listSearchMovies = action.payload;
        },
        setListCast: (state, action) => {
            state.setListCast = action.payload;
        },
        setListSimilar: (state, action) => {
            state.setListSimilar = action.payload;
        },
        setListMoviesCard: (state, action) => {
            state.setListMoviesCard = action.payload;
        },
    },
});
export const {
    setFilmList,
    setSlideList,
    setListCast,
    setListSimilar,
    setListMoviesCard,
    setListSlideRadom,
    setListSearchMovies,
} = filmsSlice.actions;

export default filmsSlice.reducer;

const API_KEY = "8a79d1842df4d26dc7901a12fd438754";
const API_BASE = "https://api.themoviedb.org/3";

export const fetchAllFilm = () => (dispatch) => {
    axios
        .get(`${API_BASE}/discover/tv?with:network=213&api_key=${API_KEY}`)
        .then((response) => {
            dispatch(setFilmList(response.data.results));
        })
        .catch((error) => {
            console.error(error);
        });
};

export const fectchCategoryFilm =
    (category, page = 1) =>
    (dispatch) => {
        axios
            .get(
                `${API_BASE}/discover/movie?with_genres=${category}&api_key=${API_KEY}&page=${page}`
            )
            .then((response) => {
                dispatch(setFilmList(response.data.results));
            })
            .catch((error) => {
                console.error(error);
            });
    };

export const fecthCastCredits = (movie) => (dispatch) => {
    axios
        .get(`${API_BASE}/movie/${movie}/credits?api_key=${API_KEY}`)
        .then((response) => {
            dispatch(setListCast(response.data.cast));
        })
        .catch((error) => {
            console.error(error);
        });
};

export const fecthSimilar = (movie) => (dispatch) => {
    axios
        .get(`${API_BASE}/movie/${movie}/similar?api_key=${API_KEY}`)
        .then((response) => {
            dispatch(setListSimilar(response.data.results));
        })
        .catch((error) => {
            console.error(error);
        });
};

export const fecthMoviesCard = (movie) => (dispatch) => {
    axios
        .get(`${API_BASE}/movie/${movie}?api_key=${API_KEY}`)
        .then((response) => {
            dispatch(setListMoviesCard(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fecthSearchMovies = (searchKey) => (dispatch) => {
    const type = searchKey ? "search" : "discover";
    let randomNumber = Math.floor(Math.random() * 19);
    axios
        .get(
            `${API_BASE}/${type}/movie?api_key=${API_KEY}&query=${searchKey}&page=1&include_adult=false`
        )
        .then((response) => {
            dispatch(setListSlideRadom(response.data.results[randomNumber]));
            dispatch(setListSearchMovies(response.data.results));
        })
        .catch((error) => {
            console.log(error);
        });
};
