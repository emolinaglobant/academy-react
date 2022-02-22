import "./AddToDo.css";
import React, { useState } from "react";

const AddToDo = (props) => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmission = (event) => {
    event.preventDefault();
    props.addToDo({ id: props.id, name: input, priority: priority, status: "Unfinished" });
    setInput("");
  };

  const updateUserInput = (event) => {
    if (event.target.localName == "input") {
      setInput(event.target.value);
    } else {
      setPriority(event.target.value);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmission}>
      <input className="todo-input" type="text" placeholder="Add a new To Do" name="todo-input" id="todo-input" value={input} onChange={updateUserInput} />
      <select className="priority-select" name="priority" value={priority} onChange={updateUserInput}>
        <option value={"low"}>Low</option>
        <option value={"mid"}>Mid</option>
        <option value={"high"}>High</option>
      </select>
      <button className="add-todo-btn">Add To Do</button>
    </form>
  );
};

export default AddToDo;
