import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardFast } from "@fortawesome/free-solid-svg-icons";

export const TodoDetail = () => {
  const { todosList } = useSelector((state) => state.todos);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const todo = todosList?.find((todo) => todo.id === +id);

  useEffect(() => {
    isEditing && setNewText(todo.description);
  }, [isEditing]);

  useEffect(() => {
    setNewText(todo.description);
  }, []);

  const saveUpdatedTodo = () => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        updatedTodo: {
          id: +id,
          description: newText,
        },
      },
    });

    setIsEditing(false);
  };

  return (
    <main className="main-detail">
      <Link to="/">
        <FontAwesomeIcon icon={faBackwardFast} className="back-icon" />
      </Link>
      {todo && (
        <section className="edit-todo-section">
          <h2>To-do detail</h2>
          <small> To edit, please click edit button then save it</small>
          <textarea
            readOnly={!isEditing}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            className="edit-todo"
            onClick={() => (isEditing ? saveUpdatedTodo() : setIsEditing(true))}
          >
            {!isEditing ? "Edit to-do" : "Save to-do"}
          </button>
        </section>
      )}
    </main>
  );
};
