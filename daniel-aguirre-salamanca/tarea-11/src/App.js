import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Main from "./pages/Main";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const handleDelete = (todoDeleteIndex) => {
    const newTodos = todos.filter((item, index) => index != todoDeleteIndex);
    setTodos(newTodos);
  };
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main data={todos} onDelete={handleDelete} />}/>
        <Route path="/create" element={<Create onCreate={handleCreate} />} />
      </Routes>
    </main>
  );
}

export default App;
