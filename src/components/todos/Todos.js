import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { modeTypes } from "../../store/types";

import Todo from "./Todo";

const Todos = (props) => {
  const activeTodo = useSelector((state) => state.todosState.activeTodo);
  const mode = useSelector((state) => state.modesState.mode);
  let allTodos = useSelector((state) => state.todosState.todos);

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (mode === modeTypes.ADD) {
      setTodos(allTodos);
    } else if (mode === modeTypes.EDIT) {
      setTodos([activeTodo]);
    } else if (mode === modeTypes.NOT_DONE) {
      let notDoneTodos = allTodos.filter((td) => td.done === false);
      setTodos(notDoneTodos);
    }
  }, [mode, allTodos, activeTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <div className="todos-list">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
      {todos.length === 0 ? (
        <h3 className="no-todos">لا يوجد مهام حالية ..</h3>
      ) : null}
    </div>
  );
};

export default Todos;
