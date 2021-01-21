import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  EDIT_TODO,
  EDIT_COMPLETION,
  SET_ACTIVE_TODO,
} from "../types";

export const getTodos = () => {
  return {
    type: GET_TODOS,
  };
};

export const addNewTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const editTodo = (title) => {
  return {
    type: EDIT_TODO,
    payload: title,
  };
};
export const editCompletion = (id) => {
  return {
    type: EDIT_COMPLETION,
    payload: id,
  };
};

export const setActiveTodo = (todo) => {
  return {
    type: SET_ACTIVE_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
