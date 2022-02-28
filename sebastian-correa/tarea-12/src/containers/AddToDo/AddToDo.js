import "./AddToDo.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/ToDoSlice";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  const handleSubmission = (event) => {
    event.preventDefault();
    dispatch(addToDo({ name: input, priority: priority, status: false }));
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
