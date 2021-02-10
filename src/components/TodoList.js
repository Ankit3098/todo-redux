import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTodo } from "../store/todoes/reducer";
import { cleatList } from "../store/todoes/action";

const TodoList = () => {
  const todoes = useSelector(selectAllTodo);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(cleatList());
  };
  return (
    <div className="ul list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {todoes &&
        todoes.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={handleClearList}
      >
        clear list
      </button>
    </div>
  );
};

export default TodoList;
