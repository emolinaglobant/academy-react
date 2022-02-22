import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from "./components/Task";

const data = [
  { nameTask: "Magazine cover" },
  { nameTask: "Form" },
  { nameTask: "3 Kata" },
  { nameTask: "Calculator" },
  { nameTask: "Slide Puzzle" },
  { nameTask: "Kata" },
  { nameTask: "Login testing" },
  { nameTask: "Create-react-app y expo" },
  { nameTask: "Magazine cover with react" },
  { nameTask: "Guess the movie" },
  { nameTask: "Routing" },
];

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App data={data} />} />
        <Route path="/task:id" element={<Task name={data}/>}/>
        <Route path="*" element={<div>404 - not found</div>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
