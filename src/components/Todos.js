import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/todos_context";
// import PropTypes from "prop-types";

function Todos() {
  const {todos} = useContext(TodoContext);

  return todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
}



export default Todos;
