import axios from 'axios'

const urlUser = "https://fakestoreapi.com/";
const urlSearch = "https://api.themoviedb.org/3/search/movie";
const url = "https://api.themoviedb.org/3/discover/movie";
const urlRanking = "https://api.themoviedb.org/3/movie/top_rated";
const urlIdFilm = "https://api.themoviedb.org/3/movie/";
const api_key = "?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43";

// get user's data
export const loginUser = async (dataUser) => {
    let resultLoginUser = await axios.post(urlUser + "auth/login", {
        username: dataUser.userName,
        password: dataUser.password,
    })
    return resultLoginUser.data;
}

// create a new user
export const addUser = async (newUser) => {

    let resultAddUser = await axios.post(urlUser + "users", {
        email: newUser.email,
        username: newUser.userName,
        password: newUser.password,
        name: {
            firstname: 'John',
            lastname: 'Doe'
        },
        address: {
            city: 'kilcoole',
            street: '7835 new road',
            number: 3,
            zipcode: '12926-3874',
            geolocation: {
                lat: '-37.3159',
                long: '81.1496'
            }
        },
        phone: '1-570-236-7033'
    })
    return resultAddUser.data;
}

// this function gets the search that the user enters in the input
export const getFilm = async (search) => {
    let resultSearch = await axios(urlSearch + api_key + "&query=" + search)
    return resultSearch.data
}

// this function returns the movies with the best rating according to the api
export const getRanking = async () => {
    let ranking = await axios(urlRanking + api_key);
    return (await ranking).data;
}

// this function returns an array of objects
export const getAllFilms = async (page) => {
    let films = await axios(url + api_key + "&page=" + page)
    return films.data;
}

// this funtion get the id
export const getId = async (id) => {
    let idMovie = await axios(urlIdFilm + id + api_key);
    return idMovie.data;
}



