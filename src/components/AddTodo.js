import React, { useState, useContext } from "react";
import {TodoContext} from '../context/todos_context'

export function AddTodo() {
  const [title, setTitle] = useState("");
  const {addTodo} = useContext(TodoContext)

  const onSubmit = e => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  // onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Add Todo ..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
}

export default AddTodo;
