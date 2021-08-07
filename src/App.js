import React, { useState } from "react";
import ToDoList from "./ToDo/ToDoList";
import DoneList from "./Done/DoneList";
import Context from "./context";
import AddToDo from "./ToDo/AddToDo";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy milk" },
    { id: 3, completed: false, title: "Buy orange" },
  ]);

  let [dones, setDones] = useState([
    //{ id: 28, completed: true, title: "Done smth 1" },
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

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    todos.map((todo) => {
      if (todo.completed === true) {
        dones.push(todo);
      }
      return dones;
    });
  }

  function addtodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h2>To do</h2>
        <AddToDo onCreate={addtodo} />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleToDo} />
        ) : (
          <p>You don't have to do.</p>
        )}

        <h2>Done</h2>
        {dones.length ? (
          <DoneList dones={dones} />
        ) : (
          <p>You haven't done anything yet.</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
