import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import toDoList from "./data/data";
import TaskView from "./componets/taskView/taskView";
import NewTask from "./componets/newTask/newTask";
import { useState } from "react";

function App() {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newList, setNewList] = useState(toDoList);
  const addNewTask = (e) => {
    e.preventDefault();
    if (newTaskName !== "" && newTaskDescription !== "") {
      let newId =
        newList.length < 10
          ? `0${newList.length + 1}`
          : `${newList.length + 1}`;
      let list = [...newList];
      let newTask = {
        id: newId.toString(),
        name: newTaskName,
        description: newTaskDescription,
      };
      list.push(newTask);
      setNewList(list);
      setNewTaskName("");
      setNewTaskDescription("");
    }
  };

  return (
    <div className="App">
      <nav className="navigation">
        <Link to="/">New task</Link>
        {newList.map((i) => {
          return (
            <Link to={`/${i.id}`} key={i.id}>
              {i.name}
            </Link>
          );
        })}
      </nav>
      <main className="viewsContainer">
        <Routes>
          <Route
            path="/"
            element={
              <NewTask
                newTaskName={newTaskName}
                setNewTaskName={setNewTaskName}
                newTaskDescription={newTaskDescription}
                setNewTaskDescription={setNewTaskDescription}
                addNewTask={addNewTask}
              />
            }
          />
          {newList.map((i) => {
            return (
              <Route
                path={`/${i.id}`}
                element={<TaskView {...i} />}
                key={i.id}
              />
            );
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
