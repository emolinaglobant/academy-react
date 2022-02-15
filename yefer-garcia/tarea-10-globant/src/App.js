import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./css/componentes.css";
import "./css/quiz.css";
import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";
import Quiz3 from "./pages/Quiz3";
import Quiz4 from "./pages/Quiz4";
import Quiz5 from "./pages/Quiz5";
import Quiz6 from "./pages/Quiz6";
import Youwin from "./pages/YouWin";
import NotFound from "./components/NotFound";
import Lost from "./pages/Lost";
import { useState } from "react";

function App() {
  const [points, setPoints] = useState(0);
  const [vidas, setVidas] = useState(3);

  return (
    <BrowserRouter>
      <Navbar setpuntos={setPoints} setvidas={setVidas} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/firts-Quiz"
          element={
            <Quiz1
              puntos={points}
              vidas={vidas}
              setpuntos={setPoints}
              setvidas={setVidas}
            />
          }
        />
        <Route
          path="/second-Quiz"
          element={
            <Quiz2
              puntos={points}
              vidas={vidas}
              setpuntos={setPoints}
              setvidas={setVidas}
            />
          }
        />
        <Route
          path="/third-Quiz"
          element={
            <Quiz3
              puntos={points}
              vidas={vidas}
              setpuntos={setPoints}
              setvidas={setVidas}
            />
          }
        />
        <Route
          path="/fourd-Quiz"
          element={
            <Quiz4
              puntos={points}
              vidas={vidas}
              setpuntos={setPoints}
              setvidas={setVidas}
            />
          }
        />
        <Route
          path="/five-Quiz"
          element={
            <Quiz5
              puntos={points}
              vidas={vidas}
              setpuntos={setPoints}
              setvidas={setVidas}
            />
          }
        />
        <Route
          path="/Last-Quiz"
          element={
            <Quiz6
              puntos={points}
              vidas={vidas}
              setpuntos={setPoints}
              setvidas={setVidas}
            />
          }
        />
        <Route path="/lost" element={<Lost />} />
        <Route
          path="/win"
          element={
            <Youwin puntos={points} setpuntos={setPoints} setvidas={setVidas} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
