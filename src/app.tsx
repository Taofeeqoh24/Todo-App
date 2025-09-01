import "./index.css";
// import React from "react";
import Header from "./components/header";
import TodoList from "./components/todoList";
import { useState } from "react";

interface Todo {
  id: number;
  todo: string;
  completed?: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <>
      <Header />
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </>
  )
}

export default App;