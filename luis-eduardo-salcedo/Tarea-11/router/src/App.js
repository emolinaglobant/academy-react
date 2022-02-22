import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContentTask from "./components/contentTask";
import Home from "./components/home";
import TaskOne from "./img/taskOne.png";
import TaskTwo from "./img/taskTwo.png";
import TaskThree from "./img/taskThree.png";
import TaskFour from "./img/taskFour.png";
import TaskFive from "./img/taskFive.png";
import TaskSix from "./img/taskSix.png";
import TaskSeven from "./img/taskSeven.png";
import TaskTen from "./img/taskTen.png";

const data = [
    { nameTask: "One Task", taskImg: TaskOne },
    { nameTask: "Two", taskImg: TaskTwo },
    { nameTask: "threee", taskImg: TaskThree },
    { nameTask: "Four", taskImg: TaskFour },
    { nameTask: "Five", taskImg: TaskFive },
    { nameTask: "Six", taskImg: TaskSix },
    { nameTask: "Seven", taskImg: TaskSeven },
    { nameTask: "TaskTen", taskImg: TaskTen },
];

export default function App() {
    return (
        <main className="app">
            <Routes>
                <Route path="/" element={<Home data={data} />} />
                <Route path="/:id" element={<ContentTask data={data} />}/>
            </Routes>
        </main>
    );
}
