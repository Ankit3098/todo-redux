import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoes/action";
import { v4 as uuidv4 } from "uuid";
const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        todo,
      })
    );
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
            placeholder="Add a Todo Item"
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-primary mt-3 text-capitalize"
        >
          add item
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
