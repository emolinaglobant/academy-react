import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import TaskView from "./componets/taskView/taskView";
import NewTask from "./componets/newTask/newTask";
import { useSelector } from "react-redux";

function App() {
  const toDOList = useSelector((state) => state.task.value);

  return (
    <div className="App">
      <nav className="navigation">
        <Link to="/">New task</Link>
        {toDOList.map((i) => {
          return (
            <Link to={`/${i.id}`} key={i.id}>
              {i.name}
            </Link>
          );
        })}
      </nav>
      <main className="viewsContainer">
        <Routes>
          <Route path="/" element={<NewTask />} />
          {toDOList.map((i) => {
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
