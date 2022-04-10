import React, { useState, useRef, useEffect } from "react"; //useRef is a hook that will reference whatever is clicked
//
import TodoList from "./TodoList";
// import useId from "react-use-uuid";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]); //object destructuring { id: 1, name: 1, complete: false }
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // this will allow us to toggle from complete to incomplete and incomplete to complete!
  function toggleTodo(id) {
    const newTodos = [...todos]; //this will create a copy of the todo list.  In react you should never modify a state variable
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value; // sets name to the current value of the input text field
    if (name === "") return; //return nothing if text field is empty (will not make an empty todo item)
    console.log(name); //check to see if we are returning what is in the text field.
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null; // will clear input after you clear Add to list!
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add to list</button>
      <button onClick={handleClearTodos}>Clear completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
