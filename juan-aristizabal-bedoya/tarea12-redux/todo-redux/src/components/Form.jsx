import React from "react";
import "./Form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newToDo } from "../utils/TaskActions";

const Form = ({}) => {
  const [newTaskName, setNewTaskName] = useState("");
  const dispatch = useDispatch();

  const createNewTask = (e) => {
    if (newTaskName !== "") {
      e.preventDefault();
      dispatch(newToDo({ newTaskName }));
      setNewTaskName("");
    }
  };
  const handleInputText = (e, setState) => setState(e.target.value);
  return (
    <article className="global-form-container">
      <form className="form-container">
        <h2>ToDo List</h2>
        <label htmlFor="Task">Task name: </label>
        <input
          type="text"
          name="Task"
          id="Task"
          onChange={(e) => handleInputText(e, setNewTaskName)}
          value={newTaskName}
        />
        <button className="btn-add" onClick={(e) => createNewTask(e)}>
          +
        </button>
      </form>
    </article>
  );
};

export default Form;
