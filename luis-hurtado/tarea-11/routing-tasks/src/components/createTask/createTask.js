import "../createTask/createTask.css"

const CreateTask = ({tasks, setTasks, taskTitle, setTaskTitle, setTaskDescription, taskDescription }) => {
    
    const userInputHandler = (e) => {
        setTaskTitle(e.target.value)
    }
    const descriptionInputHandler = (e) => {
        setTaskDescription(e.target.value)
    }
    const createTaskHandler = (e) => {
        e.preventDefault();
        setTasks([
            ...tasks, {title: taskTitle, description: taskDescription, id: Math.random() * 100}
        ]);
        setTaskTitle("")
        setTaskDescription("")

        if(taskTitle === ""){
            setTasks([])
            alert("Enter a title")
        }
    }
    
    return(
        <main>
            <h1 className="mainTitle" >Welcome to Taskinator</h1>
            <form className="taskGenerator">
                <h3>Create your tasks</h3>
                <label htmlFor="title">Title</label>
                <input 
                    name="title" 
                    type="text" 
                    value={taskTitle} 
                    onChange={userInputHandler}
                    placeholder="Enter a Title"
                    required
                />
                <label htmlFor="description">Description</label>
                <input 
                    name="description"
                    type="text"                                                                                                                         
                    value={taskDescription} 
                    onChange={descriptionInputHandler}
                    placeholder="Enter a Description"                   
                />                               
                <button onClick={createTaskHandler} className="createButton">
                    Add Task
                </button>                                                                      
            </form> 
        </main>
    )
}
export default CreateTask