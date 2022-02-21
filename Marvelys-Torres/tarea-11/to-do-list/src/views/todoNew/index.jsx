import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";

export const TodoNew = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      description: text,
    };
    addTodo(newTodo);
    navigate("/");
  };

  return (
    <main className="main-new">
      <Link to="/">Back to main</Link>
      <form className="form-section" onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button disabled={!text} type="submit">
          Add to-do
        </button>
      </form>
    </main>
  );
};
