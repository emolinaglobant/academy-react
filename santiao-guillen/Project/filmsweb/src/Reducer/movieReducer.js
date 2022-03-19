
const initialState = {
    allMovies: [], 
    search: [], 
    ranking: [], 
    count: 1,
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

        case '@films/next':
            let numberPageNext = state.count + 1;

        return state, {
            ...state,
            count: numberPageNext
        } 

        case '@films/previous':
            let numberPagePrev = state.count - 1;
            if (numberPagePrev === 0) numberPageNext = null;

        return state, {
            ...state,
            count: numberPagePrev
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

export const nextPage = (count) => {
    return {
        type: '@films/next',
        payload: count
    }
}

export const previousPage = (count) => {
    return {
        type: '@films/previous',
        payload: count
    }
}