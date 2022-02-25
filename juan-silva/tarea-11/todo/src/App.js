import React, { useState } from 'react';
import { Route, Link, Routes } from "react-router-dom";
import './App.css';
import List from './components/List';
import Done from './components/Done'
let todos=[];
function App() {
  const [inputValue, setInputValue] = useState('');
  const [clicked,setClickled]=useState(false);
  const  handleInputChange = (event) => {
    setInputValue(event.target.value)
   }
   const addTask=()=>{
    if(inputValue!==""){
      todos.push({task:inputValue,isDone:false});
      setInputValue("");
    }
    else{}
   }
   const deleteTask=(item)=>{
    todos.splice(item,1);
    setClickled(!clicked);
   }
   const doneTask=(item)=>{
    todos[item].isDone=true;
    setClickled(!clicked);
   }

  return (
      <article className="main">
        <h1>ToDo List</h1>
        <section className='input'>
          <nav>
            <ul className="nav-bar">
            <li>
                <Link className='nav-item' to="/">Pending</Link >
              </li>
              <li>
                <Link className='nav-item' to="/done">Done</Link>
              </li>
            </ul>
          </nav>
          <button onClick={addTask}>+</button>
          <input className='inputTask' placeholder='Create your new task'value={inputValue} onChange={handleInputChange}/>
        </section>
        <section className='list'>
          <ul>
            <Routes>
              <Route exact path="/" element={<List todos={todos} doneTask={doneTask}/>}/>
              <Route exact path="/done" element={<Done todos={todos} deleteTask={deleteTask}/>}/>
            </Routes>
          </ul>

        </section>
        
      </article>
  );
}

export default App;
