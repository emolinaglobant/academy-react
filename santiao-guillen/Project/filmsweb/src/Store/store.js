import {loginReducer} from '../Reducer/loginReducer';
import {movieReducer} from '../Reducer/movieReducer';
import {createStore , combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
    loginReducer,
    movieReducer,
});
  
export const store = createStore(reducers , composeWithDevTools());