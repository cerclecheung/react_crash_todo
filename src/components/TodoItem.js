import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/todos_context";

export function TodoItem(props) {
  const { markComplete, delTodo } = useContext(TodoContext);
  const { id, title, completed } = props.todo;

  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    };
  };

  useEffect(()=>{
    return ()=>{
      console.log(props.todo)
    }
  }, [])

  
  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" checked={completed ? true : false} onChange={() => markComplete(id)} /> {title}
        <button onClick={() => delTodo(id)} style={btnStyle}>
          x
        </button>
      </p>
    </div>
  );
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
