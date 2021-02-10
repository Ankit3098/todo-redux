import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectOneTodo } from "../store/todoes/reducer";
import { addMode, addTodo } from "../store/todoes/action";

const EditInput = () => {
  const selectedTodo = useSelector(selectOneTodo);

  const [todo, setTodo] = useState(selectedTodo.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: selectedTodo.id,
        todo,
      })
    );
    dispatch(addMode());
    setTodo("");
  };

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <FontAwesomeIcon icon={faBook} />
            </div>
          </div>
          <input
            required
            type="text"
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="form-control text-capitalize"
            placeholder="Edit a Todo Item"
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-success mt-3 text-capitalize"
        >
          Edit todo
        </button>
      </form>
    </div>
  );
};

export default EditInput;
