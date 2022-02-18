import "./App.css";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Lunes from "./pages/Lunes";
import Martes from "./pages/Martes";
import Miercoles from "./pages/Miercoles";
import Jueves from "./pages/Jueves";
import Viernes from "./pages/Viernes";
import Sabado from "./pages/Sabado";
import Domingo from "./pages/Domingo";

import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Lunes />} />
        <Route path="/daytwo" element={<Martes />} />
        <Route path="/daythree" element={<Miercoles />} />
        <Route path="/dayfour" element={<Jueves />} />
        <Route path="/dayfive" element={<Viernes />} />
        <Route path="/daysix" element={<Sabado />} />
        <Route path="/dayseven" element={<Domingo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
