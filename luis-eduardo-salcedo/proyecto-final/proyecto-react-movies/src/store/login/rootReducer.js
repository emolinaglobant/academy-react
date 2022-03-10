import {combineReducers} from 'redux';
import userReducer from './reducerLogin';
import films from '../films/reducerFilms'
const rootReducer = combineReducers({
    films,
    user:userReducer,
})
export default rootReducer;