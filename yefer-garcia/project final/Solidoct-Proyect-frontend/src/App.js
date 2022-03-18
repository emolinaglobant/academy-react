import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Questions from "./pages/Questions";
import NotFound from "./components/NotFound";
import Policts from "./pages/Policts";
import Services from "./pages/Services";
import Search_employ from "./pages/Search_Employ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import Control_Panel from "./pages/Control_Panel";

function App() {
  console.log("💻 Page Created By YeferDon© 💻");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/politics" element={<Policts />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {!localStorage.getItem("token_admin") && (
          <Route path="/manager_admin_solidoct" element={<Admin />} />
        )}
        {localStorage.getItem("token_admin") && (
          <Route path="/manager_solidoct" element={<Control_Panel />} />
        )}
        <Route path="/search_employer/*" element={<Search_employ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
