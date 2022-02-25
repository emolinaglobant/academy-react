import { useEffect, useState } from "react";
import ListTask from "../ListTask/ListTask";
import { createTask , getTasks} from "../../services/services";
import '../../App.css';

const CreateTask = () => {

    const [showForm, setShowForm] = useState(false);
    const [data , setData] = useState([]);
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const addTask = async (e) => {
        e.preventDefault();
        createTask(task);
        setTask({ title: "", description: "" });
    }

    useEffect(() => {
        getTasks().then(task => setData(task));
    },[task])

    return (
        <aside className='containerToDo'>
            <article className="boxAside">
                <header className="title">
                    <h1>to do list</h1>
                </header>
                <button className="btnCreateTask" onClick={() => setShowForm(true)}>create task</button>
                <section className="sectionForm">
                    {(showForm)
                        ?
                        <form className='form'>
                            <div>
                                <label>title task</label>
                                <input type="text" name='title' value={task.title}
                                    onChange={(e) => setTask({ ...task, title: e.target.value })} />

                                <label>description</label>
                                <input name='description' value={task.description}
                                    onChange={(e) => setTask({ ...task, description: e.target.value })} ></input>
                            </div>
                            <input className='btnAdd' type="button" value="Add Task" onClick={addTask} />
                        </form>
                        :
                        <p className="text">Add your notes, your pending activities
                            and keep up with your tasks with the to-do list
                        </p>}
                </section>
            </article>

            <ListTask data={data}/>
        </aside>
    );
};

export default CreateTask;