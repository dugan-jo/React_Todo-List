import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["todo 1", "todo 2"]); //object destructuring
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add to list</button>
      <button>Clear completed Todos</button>
      <div>0 Left to do</div>
    </>
  );
}

export default App;
