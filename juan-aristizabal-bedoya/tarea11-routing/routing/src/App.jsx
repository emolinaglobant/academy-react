import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import NewToDo from "./components/NewToDo";
import { useState } from "react";

let data = [
  {
    id: "1",
    name: "Learn JSX",
  },
  {
    id: "2",
    name: "Learn Routing",
  },
  {
    id: "3",
    name: "Play Red dead redemption",
  },
];

function App() {
  const [newTask, setNewTask] = useState("");
  const [newData, setNewData] = useState(data);

  const createNewTask = (e) => {
    e.preventDefault();

    if (newTask !== "") {
      let newId = `${newData.length + 1}`;
      let list = [...newData];

      let newToDo = {
        id: newId.toString(),
        name: newTask,
      };
      list.push(newToDo);
      setNewData(list);
      setNewTask("");
    }
  };

  return (
    <div className="App">
      <article className="app-container">
        <main className="viewTask-container">
          <Routes>
            <Route
              path="/"
              element={
                <Form
                  newTask={newTask}
                  setNewTask={setNewTask}
                  createNewTask={createNewTask}
                />
              }
            />
            {newData.map((i) => {
              return (
                <Route
                  path={`/${i.id}`}
                  element={<NewToDo {...i} />}
                  key={i.id}
                />
              );
            })}
          </Routes>
        </main>
        <nav className="task-nav">
          <Link to="/">Create task</Link>
          {newData.map((i) => {
            return (
              <Link to={`/${i.id}`} key={i.id}>
                {i.name}
              </Link>
            );
          })}
        </nav>
      </article>
    </div>
  );
}

export default App;
