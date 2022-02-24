import React from 'react';
import Navbar from '../componets/Navbar';

function Done({tareas, handleStatus}) {
    return (
        <div className="background">
        <Navbar/>
            <div className='tareasporhacer3'>
            <h1>DONE TASK</h1>
            </div>
           {tareas.length > 0 &&
           tareas.map((obj, index)=>{
               if(obj.status === "done"){
                   return(
                    <div className="task3">
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
export default Done;