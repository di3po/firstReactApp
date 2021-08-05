import React from "react";
import ToDoList from "./ToDo/ToDoList";
import DoneList from "./Done/DoneList";
import Context from "./context";
import AddToDo from "./ToDo/AddToDo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy milk" },
    { id: 3, completed: true, title: "Buy orange" },
  ]);

  function toggleToDo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  const dones = [
    { id: 1, completed: true, title: "Buy bread" },
    { id: 2, completed: true, title: "Buy milk" },
  ];

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addtodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        }
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Hello, world!</h1>
        <h2>To do</h2>
        <AddToDo onCreate={addtodo} />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleToDo} />
        ) : (
          <p>You don't have to do.</p>
        )}
        <h2>Done</h2>
        <DoneList dones={dones} />
      </div>
    </Context.Provider>
  );
}

export default App;
