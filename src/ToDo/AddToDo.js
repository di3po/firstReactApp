import React, { useState } from "react";
import PropTypes from "prop-types";

function AddToDo({ onCreate }) {
  const [value, setValue] = useState(" ");

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue(" ");
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input
        style={{ marginRight: ".5rem" }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
}

export default AddToDo;

AddToDo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
