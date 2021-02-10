import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editMode, selectTodo } from "../store/todoes/action";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEditButton = () => {
    dispatch(editMode());
    dispatch(selectTodo(todo.id));
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="list-group-item d-flex text-capitalize justify-content-between my-2">
      <h6>{todo.todo}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <FontAwesomeIcon icon={faPen} onClick={handleEditButton} />
        </span>
        <span className="mx-2 text-danger">
          <FontAwesomeIcon icon={faTrash} onClick={handleDeleteButton} />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
