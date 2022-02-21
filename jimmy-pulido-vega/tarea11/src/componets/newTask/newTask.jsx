import React from "react";
import './newTask.scss'

function NewTask({
  newTaskName,
  setNewTaskName,
  newTaskDescription,
  setNewTaskDescription,
  addNewTask
}) {

  const onchageHanddler = (e, setState) => setState(e.target.value);
  
  return (
    <section className="newTask">
      <h2>New task<span>:</span></h2>
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
