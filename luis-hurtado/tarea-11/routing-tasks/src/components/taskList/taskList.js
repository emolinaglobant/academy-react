import { Link } from "react-router-dom"
import "../taskList/taskList.css"

const TaskList = ({tasks, setTasks }) => {

    const deleteHandler = () => {
        setTasks(tasks.filter((el) => el.id !== tasks[0].id))
    }   

    return(
        <main className="taskContainer">
            <h3>Impostor or Crewmate?</h3>
            <ul className="taskList">
                {tasks.map((task) => (
                    <li key={task.id} >
                       <Link to={`/tasks/${task.id}`}>
                            <h2 className="taskTitle" >{task.title}</h2>
                        </Link>
                        <button className="deleteButton" onClick={deleteHandler}>X</button>
                    </li>  
                ))}
            </ul>
        </main>
    )
}

export default TaskList