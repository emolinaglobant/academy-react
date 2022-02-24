import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App({ data }) {
  return (
    <>
      <div className="App">
        <h1>ToDo list</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <Link to={`/task${index}`}>{item.nameTask}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
