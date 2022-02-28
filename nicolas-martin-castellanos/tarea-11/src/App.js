import './App.css';
import Home from './pages/Home';
import InProgress from './pages/InProgress';
import Done from './pages/Done';

import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState(
    [
      {
        name: "Unit Testing Class",
        status: "todo"
      },
      {
        name: "Create React Class",
        status: "todo"
      },
      {
        name: "Vritual DOM Class",
        status: "todo"
      },
      {
        name: "State Class",
        status: "todo"
      },
      {
        name: "Routing Class",
        status: "todo"
      },
      {
        name: "Redux Class",
        status: "todo"
      },
      {
        name: "Code Review Class",
        status: "todo"
      }
    ]
  );
  const handleStatus = (status, index) => {
    setTareas(
      tareas.map((obj, i) => {
        if(i === index){
          return{
            ...obj,
            status: status
          };
        }else{
          return obj;
        }
      })
    )
  }
  const addTask = (newtask)=>{
    setTareas([
      ...tareas,
      newtask 
    ])
  }
  return (
    <Routes>
        <Route path="/" element={<Home addTask={addTask} tareas={tareas} handleStatus={handleStatus}/>} />
        <Route path="/enprogreso" element={<InProgress tareas={tareas} handleStatus={handleStatus}/>} />
        <Route path="/realizadas" element={<Done tareas={tareas} handleStatus={handleStatus}/>} />

    </Routes>
  );
}
export default App;