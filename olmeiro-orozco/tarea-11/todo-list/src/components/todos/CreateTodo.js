import { React } from "react";
import useForm from "../hooks/useForm";
import Proptypes from "prop-types";

export const CreateTodo = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
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