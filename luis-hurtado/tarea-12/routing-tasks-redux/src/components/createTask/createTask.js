import { useState } from "react"
import { connect } from "react-redux";
import { addTasks } from "../../redux/todoSlice";
import "../createTask/createTask.css"

const mapStateToProps = (state) => {
    return {
        tasks: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (obj) => dispatch(addTasks(obj)),
    };
};  

const CreateTask = (props) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("")


    const add = () => {
        if (taskTitle === "") {
            alert("the title is empty")
        } else {
            props.addTask({
                id: Math.floor(Math.random() * 100),
                title: taskTitle,
                description: taskDescription,
            });
            setTaskTitle("")
            setTaskDescription("")
        }
    }

    const handleTitle = (e) =>{
        setTaskTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setTaskDescription(e.target.value)
    }

    return(
        <main>
            <h1 className="mainTitle">Welcome to Taskinator</h1>
            <article className="taskGenerator">
                <label htmlFor="title" >Title</label>
                <input
                    name="title"
                    type="text"
                    value={taskTitle}
                    onChange={(e) => handleTitle(e)}
                    placeholder="Enter a Title"
                />    
                <label htmlFor="description" >Description</label>
                <input
                    name="description"
                    type="text"
                    value={taskDescription}
                    onChange={(e) => handleDescription(e)}
                    placeholder="Enter a Description"
                />
                    <button className="createButton" onClick={() => add()} >
                        Add Task
                    </button>
            </article>
        </main>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
