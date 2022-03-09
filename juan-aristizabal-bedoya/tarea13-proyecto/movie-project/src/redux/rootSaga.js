import {all} from "redux-saga/effects";
import { moviesSagas } from "./movieSagas";

export default function* rootSaga(){
    yield all ([...moviesSagas]);
}