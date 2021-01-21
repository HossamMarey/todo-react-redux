import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editCompletion,
  setActiveTodo,
  deleteTodo,
} from "../../store/todos/todosActions";
import { changeMode } from "../../store/modes/modesActions";
import { modeTypes } from "../../store/types";

import FeatherIcon from "feather-icons-react";

const Todo = (props) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.modesState.mode);

  // mode => add || not-done || edit

  const changeTodoCompletion = (id) => {
    dispatch(editCompletion(id));
  };

  const setEditTodo = (todo) => {
    // set active todo
    dispatch(setActiveTodo(todo));
    // set edit mode
    dispatch(changeMode(modeTypes.EDIT));
  };

  let { id, title, done } = props.todo;
  return (
    <div className={done ? "todos-todo done" : "todos-todo "}>
      <div className="todos-todo_icon" onClick={() => changeTodoCompletion(id)}>
        <FeatherIcon icon={done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text"> {title} </div>
      {mode !== modeTypes.EDIT && (
        <div className="todos-todo_cta">
          <div
            className="todos-todo_cta-edit"
            onClick={() => setEditTodo(props.todo)}
          >
            <FeatherIcon icon="edit" size="20" />
          </div>
          <div
            className="todos-todo_cta-delete"
            onClick={() => dispatch(deleteTodo(id))}
          >
            <FeatherIcon icon="trash-2" size="20" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
