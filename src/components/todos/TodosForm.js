import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addNewTodo,
  editTodo,
  setActiveTodo,
} from "../../store/todos/todosActions";
import { changeMode } from "../../store/modes/modesActions";
import { modeTypes } from "../../store/types";

import FeatherIcon from "feather-icons-react";

const TodosForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();
  const activeTodo = useSelector((state) => state.todosState.activeTodo);
  const mode = useSelector((state) => state.modesState.mode);
  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  useEffect(() => {
    if (mode === modeTypes.EDIT && activeTodo) {
      setNewTitle(activeTodo.title);
    }
  }, [mode, activeTodo]);

  const addNewTodoHandler = () => {
    if (mode !== modeTypes.EDIT) {
      // add new todo
      const newTodo = {
        id: Date.now(),
        title: newTitle,
        done: false,
      };
      dispatch(addNewTodo(newTodo));
      setNewTitle("");
    } else {
      // edit todo
      dispatch(editTodo(newTitle));
      dispatch(changeMode(modeTypes.ADD));
      dispatch(setActiveTodo({}));
      setNewTitle("");
    }
  };

  const showUncompleteHandle = () => {
    // set mode to not-done
    if (mode === modeTypes.ADD) {
      dispatch(changeMode(modeTypes.NOT_DONE));
    } else if (mode === modeTypes.NOT_DONE) {
      dispatch(changeMode(modeTypes.ADD));
    }
  };

  let btnString = "إضافة";
  if (mode === modeTypes.EDIT) {
    btnString = "تعديل ..";
  }

  return (
    <div className="todos-form">
      <div
        className={
          mode === modeTypes.NOT_DONE
            ? "todos-form_icon active"
            : "todos-form_icon"
        }
        onClick={showUncompleteHandle}
      >
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="اضف مهمة جديدة ..."
          onChange={newTitleHandler}
          value={newTitle}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          onClick={addNewTodoHandler}
          disabled={newTitle.trim() ? false : true}
        >
          {btnString}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
