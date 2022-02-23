import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Proptypes from "prop-types";

import { addTodo } from "../../redux/todoSlice";
import useForm from "../hooks/useForm";

export const CreateTodo = () => {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    dispatch(
      addTodo({
        desc: description,
      })
    );

    reset();
  };

  return (
    <section className="createTodo">
      <h1>Crear ToDos</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          className="formCreateTodo"
          placeholder="Describe la tarea"
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        />
        <button>Crear Todo</button>
      </form>
    </section>
  );
};

CreateTodo.prototypes = {
  handleAddTodo: Proptypes.func.isRequired,
};