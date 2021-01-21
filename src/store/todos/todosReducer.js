import {
  ADD_TODO,
  SET_ACTIVE_TODO,
  EDIT_TODO,
  EDIT_COMPLETION,
  DELETE_TODO,
} from "../types";
// const initialState = [
//   { id: 1, title: "شراء مستلزمات", done: false },
//   { id: 2, title: "شراء منتجات", done: true },
//   { id: 3, title: "مشاهدة الكورس", done: false },
//   { id: 4, title: "كتابة الكود", done: true },
// ];
const localTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const initialState = {
  todos: localTodos,
  activeTodo: {},
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case SET_ACTIVE_TODO:
      return {
        ...state,
        activeTodo: action.payload,
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: getEditTodos(state.todos, state.activeTodo, action.payload),
      };
    case EDIT_COMPLETION:
      return {
        ...state,
        todos: getCompletionTodos(state.todos, action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: getDeletedTodos(state.todos, action.payload),
      };
    default:
      return state;
  }
};

const getEditTodos = (todos, todo, title) => {
  return todos.map((td) => {
    if (td.id === todo.id) {
      td.title = title;
      return td;
    } else {
      return td;
    }
  });
};

const getCompletionTodos = (todos, id) => {
  return todos.map((td) => {
    if (td.id === id) {
      td.done = !td.done;
      return td;
    } else {
      return td;
    }
  });
};

const getDeletedTodos = (todos, id) => {
  return todos.filter((td) => td.id !== id);
};

export default todosReducer;
