import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/componentes.css";
import "./css/quiz.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lost from "./pages/Lost";
import Quiz from "./pages/Quiz";
import NotFound from "./components/NotFound";
import { useState } from "react";

function App() {
  const [points, setPoints] = useState(0);
  const [lifes, setLifes] = useState(3);

  return (
    <BrowserRouter>
      <Navbar setPoints={setPoints} setLifes={setLifes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz  
              Points={points}
              Lifes={lifes}
              setPoints={setPoints}
              setLifes={setLifes}/>}/>
        <Route path="/lost" element={<Lost/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
