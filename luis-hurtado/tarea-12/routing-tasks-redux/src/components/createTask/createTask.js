import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTasks } from "../../redux/todoSlice";
import "../createTask/createTask.css";
import { addTasks } from "../../redux/todoSlice";


const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const dispatch = useDispatch();

  const saveTask = () => {
    if (taskTitle === "") {
      alert("the title is empty");
    } else {
      setTaskTitle("");
      setTaskDescription("");
      dispatch(
        addTasks({
          title: taskTitle,
          description: taskDescription,
          id: Math.floor(Math.random() * 1000),
        })
      );
    }
  };

  const handleTitle = (e) => {
    setTaskTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  return (
    <main>
      <h1 className="mainTitle">Welcome to Taskinator</h1>
      <article className="taskGenerator">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          value={taskTitle}
          onChange={(e) => handleTitle(e)}
          placeholder="Enter a Title"
        />
        <label htmlFor="description">Description</label>
        <input
          name="description"
          type="text"
          value={taskDescription}
          onChange={(e) => handleDescription(e)}
          placeholder="Enter a Description"
        />
        <button className="createButton" onClick={() => saveTask()}>
          Add Task
        </button>
      </article>
    </main>
  );
};

export default CreateTask;
