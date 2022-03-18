import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { CharacterCard } from "./components/characterCard/characterCard";
import { CharacterList } from "./components/characterList/characterList";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterCard />} />
      </Routes>
    </>
  );
}

export default App;
