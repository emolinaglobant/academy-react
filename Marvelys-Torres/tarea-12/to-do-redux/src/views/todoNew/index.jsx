import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardFast } from "@fortawesome/free-solid-svg-icons";

export const TodoNew = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      description: text,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    navigate("/");
  };

  return (
    <main className="main-new">
      <Link to="/">
        <FontAwesomeIcon icon={faBackwardFast} className="back-icon" />
      </Link>
      <form className="form-section" onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button disabled={!text} type="submit">
          Add to-do
        </button>
      </form>
    </main>
  );
};
