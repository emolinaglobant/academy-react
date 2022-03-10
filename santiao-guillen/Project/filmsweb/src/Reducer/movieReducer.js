
const initialState = {
    allMovies: [], 
    search: [], 
    ranking: []
}

export const movieReducer = (state = initialState, action) => {

    switch(action.type) {

        case '@films/getMovies':
        return state, {
            ...state,
            allMovies: action.payload
        }

        case '@films/search':

        return state, {
            ...state,
            search: action.payload
        }

        case '@films/getRanking':
        return state, {
            ...state,
            ranking: action.payload
        } 
        
        default:
            return state
        }
    }

export const getMovies = (movies) => {
    return {
        type: '@films/getMovies',
        payload: movies
    }
}

export const getResultSearch = (foundMovies) => {
    return {
        type: '@films/search',
        payload: foundMovies
    }
}  

export const ranking = (ranking) => {
    return {
        type: '@films/getRanking',
        payload: ranking
    }
}