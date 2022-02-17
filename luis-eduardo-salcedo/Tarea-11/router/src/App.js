import * as React from "react";
import  {Route, Routes} from 'react-router-dom';
import "./App.css";
import Home from "./components/home";
import TaskOne from "./pages/taskOne";
import TaskTwo from "./pages/taskTwo";
import TaskThree from "./pages/taskThree";
import TaskFour from "./pages/taskFour";
import TaskFive from "./pages/taskFive";
import TaskSix from "./pages/taskSix";
import TaskSeven from "./pages/taskSeven";
import TaskTen from "./pages/taskTen";

export default function App() {
    return (
        <main className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="taskOne" element={<TaskOne />} />
                <Route path="taskTwo" element={<TaskTwo />} />
                <Route path="taskThree" element={<TaskThree />} />
                <Route path="taskFour" element={<TaskFour />} />
                <Route path="taskFive" element={<TaskFive />} />
                <Route path="taskSix" element={<TaskSix />} />
                <Route path="taskSeven" element={<TaskSeven />} />
                <Route path="taskTen" element={<TaskTen />} />
            </Routes>
        </main>
    );
}
