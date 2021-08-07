import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function DoneItem({ done, index, onChange }) {
  return (
    <li>
      <strong>
        {index + 1}) &nbsp; {/*space symbol*/}
      </strong>
      {done.title}
    </li>
  );
}

DoneItem.propTypes = {
  done: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default DoneItem;
