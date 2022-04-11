import React from "react";
// import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
// import {FormGroup}  form "@mui/material/FormGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <div>
        <label>
          <Typography gutterBottom variant="h4" component="div">
            <div>{todo.name}</div>
          </Typography>
          <div>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={handleTodoClick}
            />
            <p>COMPLETED</p>
          </div>
        </label>
      </div>
    </Card>
  );
}
