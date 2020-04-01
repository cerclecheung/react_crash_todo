import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { TodoProvider } from "./context/todos_context";

// import About from './components/pages/About';

import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo/>
          <Todos/>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
