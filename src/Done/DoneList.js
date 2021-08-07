import React from "react";
import DoneItem from "./DoneItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function DoneList(props) {
  return (
    <ul style={styles.ul}>
      {props.dones.map((done, index) => {
        return (
          <DoneItem
            done={done}
            key={done.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

DoneList.propTypes = {
  done: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default DoneList;
