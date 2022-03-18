import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import "./css/components.css";
import "./css/pages.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/page1" element={<h1 className="page">Page 1</h1>} />
        <Route path="/page2" element={<h1 className="page">Page 2</h1>} />
        <Route path="/page3" element={<h1 className="page">page 3</h1>} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
