import FormTask from "../FormTask/FormTask";
import '../../App.css';
import { useState } from "react";

const CreateTask = () => {

    const [showForm , setShowForm] = useState(false);

    return (
        <aside className="boxAside">
            <header className="title">
                <h1>to do list</h1>
            </header>
            <button className="btnCreateTask" onClick={()=>setShowForm(true)}>create task</button>
            <section className="sectionForm">
                {(showForm) 
                ? 
                <FormTask /> 
                : 
                <p className="text">Add your notes, your pending activities
                    and keep up with your tasks with the to-do list
                </p>} 
            </section>
        </aside>
    );
};

export default CreateTask;