import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CLEAR_LIST,
  EDIT_MODE,
  SELECT_TODO,
  ADD_MODE,
} from "../actionTypes";
const intialState = {
  todoes: {},
  editMode: false,
  todo: null,
};

const todoReducer = (state = intialState, action) => {
  let newTodoes;
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      return {
        ...state,
        todoes: {
          ...state.todoes,
          [newTodo.id]: newTodo,
        },
      };

    case DELETE_TODO:
      newTodoes = { ...state.todoes };
      delete newTodoes[action.payload];
      return {
        ...state,
        todoes: newTodoes,
      };

    case EDIT_TODO:
      const { id, todo } = action.payload;
      return {
        ...state,
        todoes: {
          ...state.todoes,
          [id]: {
            ...state.todoes[id],
            todo,
          },
        },
      };

    case EDIT_MODE:
      return {
        ...state,
        editMode: true,
      };

    case ADD_MODE:
      return {
        ...state,
        editMode: false,
      };

    case CLEAR_LIST:
      return {
        ...state,
        todoes: {},
      };

    case SELECT_TODO:
      const selectTodoId = action.payload;
      const selectTodo = state.todoes[selectTodoId];
      return {
        ...state,
        todo: selectTodo,
      };

    default:
      return state;
  }
};

export const selectAllTodo = (state) => Object.values(state.todoes);
export const selectEditMode = (state) => state.editMode;
export const selectOneTodo = (state) => state.todo;

export default todoReducer;
