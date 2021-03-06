import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, People, Planets, Movies, Vehicles} from "./views";
import { Header, Footer, Loading } from "./components/static";
import { useDispatch, useSelector } from "react-redux";
import {fetchData} from "./features/dataSlice";

function App() {
  const status = useSelector(state=> state.users.status);
  const isData = useSelector(state => state.data);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("people"));
    dispatch(fetchData("movies"));
    dispatch(fetchData("vehicles"));
    dispatch(fetchData("planets"));
  }, []);

  return (
    <main>
      <Header location={location.pathname}/>
      <article className="content">
        <Routes >
          <Route exact path="/" element={<Home location={location.pathname}/>} />
          <Route path="/people" element={!isData.people ? <Loading />:status==="200" ? <People /> : <Home showAlert={true} location={location.pathname} /> }/>
          <Route path="/planets" element={!isData.planets  ? <Loading />: status === "200" ? <Planets/> : <Home showAlert={true} location={location.pathname} />}/>
          <Route path="/vehicles" element={!isData.vehicles  ? <Loading />:status === "200" ? <Vehicles /> : <Home showAlert={true} location={location.pathname} />}/>
          <Route path="/movies" element={!isData.movies  ? <Loading />:status === "200" ? <Movies/> : <Home showAlert={true} location={location.pathname} />}/>
        </Routes>
      </article>

      <Footer />
    </main>
  );
}

export default App;
