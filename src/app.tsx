import "./index.css";
// import React from "react";
import Header from "./components/header";
import TodoList from "./components/todoList";



function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <TodoList />
      </div>
      
    </>
  )
}

export default App;