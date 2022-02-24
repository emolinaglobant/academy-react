import React, { useState } from 'react';
import Navbar from '../componets/Navbar';
import './styles/home.css'

function Home({tareas, addTask, handleStatus}) {
    const [text, setText]= useState("");
    return(
        <div className="background">
        <Navbar/>
        <div className='tareasporhacer'>
            <h1>PENDING TASK</h1>
        </div>
            <input className='barra' placeholder='New Task' type="text" onChange={(event) => setText(event.target.value)} />
            <button className='add' onClick={() => addTask ({name: text ,status: "todo"})}>ADD NEW TASK</button>
           { tareas.length > 0 &&
           tareas.map((obj, index)=>{
               if(obj.status === "todo"){
                   return(
                       <div className="task">
                            <h3>{obj.name}</h3>
                            <select className='selector' onChange={(event) => handleStatus(event.target.value, index)}>
                                <option value="">Select</option>
                                <option value="todo">Pending</option>
                                <option value="inprogress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                            </div>
                   )
               }
           })}
        </div>
    );
}
export default Home;