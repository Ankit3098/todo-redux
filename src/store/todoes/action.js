import {
  ADD_TODO,
  CLEAR_LIST,
  DELETE_TODO,
  EDIT_MODE,
  EDIT_TODO,
  SELECT_TODO,
  ADD_MODE,
} from "../actionTypes";

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};

export const cleatList = () => {
  return {
    type: CLEAR_LIST,
  };
};

export const editMode = () => {
  return {
    type: EDIT_MODE,
  };
};

export const addMode = () => {
  return {
    type: ADD_MODE,
  };
};

export const selectTodo = (id) => {
  return {
    type: SELECT_TODO,
    payload: id,
  };
};
