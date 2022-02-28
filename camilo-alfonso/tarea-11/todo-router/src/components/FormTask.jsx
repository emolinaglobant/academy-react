import React from "react";

import "../assets/css/formTask.css";

const FormTask = ({ setInputText, todos, setTodos, inputText }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    let randomId = 1000;
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * randomId),
      },
    ]);
    setInputText("");
  };

  return (
    <form className="form">
      <input
        type="text"
        name=""
        id=""
        onChange={inputHandler}
        value={inputText}
      />
      <button type="submit" onClick={submitHandler}>
        Add task
      </button>
    </form>
  );
};

export default FormTask;
