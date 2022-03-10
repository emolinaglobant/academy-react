import "./App.scss";
import React, { useContext } from "react";
import TWlogo from "./images/TW3-logo.png";
import TW3logoXL from "./images/TW3logoXL.png"
import { Routes, Route, Link } from "react-router-dom";
import { ContextData } from "./context/getData";
import NavButton from "./components/navButton/navButton";
import Home from "./views/home/home";
import Bestiary from "./views/bestiary/bestiary";
import HuntedList from "./views/HuntedList/HuntedList";
import Beast from "./views/beast/beast";
import NoFound from "./views/noFound/noFound";
import Footer from "./components/footer/footer";

function App() {
  const { appLoaded, filterList, geraltMode, huntedMonster } = useContext(ContextData);
  const darkMode = geraltMode ? "" : "lightMode";

  return (
    <div className={`App ${darkMode}`}>
      <section className="AppContainer">
        <div className="AppBorder">
          {appLoaded ? (
            <>
              <header className="header">
                <figure>
                  <Link to="/">
                    <img src={TWlogo} alt="The witcher 3 logo" />
                  </Link>
                </figure>
                <nav>
                  <h4>Beging your hunt witcher.</h4>
                  <NavButton route={"Bestiary"} />
                  <NavButton route={"Hunted"} />
                </nav>
              </header>
              <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Bestiary" element={<Bestiary />} />
              <Route path="/Hunted" element={<HuntedList />} />
              {filterList.map((i) => {
                return (
                  <Route
                    path={`/creature/${i.alt_name}`}
                    key={i._id}
                    element={<Beast {...i} huntedMonster={huntedMonster} />}
                  />
                );
              })}
              <Route path="*" element={ <NoFound /> } />
            </Routes>
          </main>
              <Footer />
            </>
          ) : (
            <section className="loading">
              <figure>
                <img src={TW3logoXL} alt="Logo" />
              </figure>
              <h1>The Bestiary</h1>
              <p>Loading...</p>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
