import React, { useState, useRef, useEffect } from "react"; //useRef is a hook that will reference whatever is clicked
//
import TodoList from "./TodoList";
import useId from "react-use-uuid";
// import uuidv4 from "uuid/v4";

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

  function handleAddTodo(e) {
    const name = todoNameRef.current.value; // sets name to the current value of the input text field
    if (name === "") return; //return nothing if text field is empty (will not make an empty todo item)
    console.log(name); //check to see if we are returning what is in the text field.
    setTodos(prevTodos => {
      return [...prevTodos, { id: `#${useId}`, name: name, complete: false }];
    });
    todoNameRef.current.value = null; // will clear input after you clear Add to list!
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add to list</button>
      <button>Clear completed Todos</button>
      <div>0 Left to do</div>
    </>
  );
}

export default App;
