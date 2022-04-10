import React from "react";
import Pagination from "@mui/material/Pagination";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
      <h5>IMPORTANCE</h5>
      <Pagination count={5} color="primary" />
    </div>
  );
}
