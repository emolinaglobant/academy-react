import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Main from "./pages/Main";
import Header from "./components/Header";
import TodoDescription from "./pages/TodoDescription";

function App() {
   return (
    <main>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main  />}/>
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element = {<TodoDescription />} />
      </Routes>
    </main>
  );
}

export default App;
