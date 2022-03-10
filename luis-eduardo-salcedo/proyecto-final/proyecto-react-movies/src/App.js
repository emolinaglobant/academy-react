import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import CategoryPages from "./pages/CategoryPages";
import { auth } from "./firebase";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { setUser } from "./store/login/actions";
import DetailsFilms from "./pages/DetailsFilms";
import Footer from "./pages/Footer";
import "./App.css";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(setUser(authUser));
            } else {
                dispatch(setUser(""));
            }
        });
    }, [dispatch]);
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/category/:category" component={CategoryPages} />
            <Route path="/login" component={Login} />
            <Route path="/detailsFilms/:movie" component={DetailsFilms} />
            <Route path="/footer" component={Footer} />
            <Route path="/register" component={Register} />
        </>
    );
}

export default App;
