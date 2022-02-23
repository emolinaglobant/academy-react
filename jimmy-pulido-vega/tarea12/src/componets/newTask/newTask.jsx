import "./newTask.scss";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newTask } from "../../features/tasks/taskSlice";

function NewTask({}) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const dispatch = useDispatch();

  const addNewTask = (e) => {
    if (newTaskName !== "" && newTaskDescription !== "") {
      e.preventDefault();
      dispatch(newTask({ newTaskName, newTaskDescription }));
      setNewTaskName("");
      setNewTaskDescription("");
    }
  };
  const onchageHanddler = (e, setState) => setState(e.target.value);
  return (
    <section className="newTask">
      <h2>
        New task<span>:</span>
      </h2>
      <form name="newTask">
        <label htmlFor="nameTask">Name:</label>
        <input
          type="text"
          autoComplete="off"
          id="nameTask"
          onChange={(e) => onchageHanddler(e, setNewTaskName)}
          value={newTaskName}
        />
        <label htmlFor="descriptionTask">Description:</label>
        <input
          type="text"
          autoComplete="off"
          onChange={(e) => onchageHanddler(e, setNewTaskDescription)}
          value={newTaskDescription}
        />
        <button onClick={(e) => addNewTask(e)}>Add</button>
      </form>
    </section>
  );
}

export default NewTask;
