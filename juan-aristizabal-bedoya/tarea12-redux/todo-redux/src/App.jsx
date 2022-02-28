import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import NewToDo from "./components/NewToDo";
import { useSelector } from "react-redux";

function App() {

  const toDOList = useSelector((state)=> state.task.value);

  return (
    <div className="App">
      <article className="app-container">
        <main className="viewTask-container">
          <Routes>
            <Route
              path="/"
              element={<Form/>}/>
            {toDOList.map((i) => {
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
          {toDOList.map((i) => {
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
