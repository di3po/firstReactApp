import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem  1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: ".5rem",
    background: "yellow",
  },

  input: {
    marginRight: "1rem",
  },
};

function ToDoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1})</strong>
        &nbsp;
        {todo.title}
      </span>
      <button onClick={removeTodo.bind(null, todo.id)} class="btn btn-danger">
        &times;
      </button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default ToDoItem;
