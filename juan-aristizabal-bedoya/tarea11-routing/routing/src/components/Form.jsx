import React from "react";
import "./Form.css"

const Form = ({ newTask, setNewTask, createNewTask }) => {
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
          onChange={(e) => handleInputText(e, setNewTask)}
          value={newTask}
        />
        <button className="btn-add" onClick={(e) => createNewTask(e)}>+</button>
      </form>
    </article>
  );
};

export default Form;
