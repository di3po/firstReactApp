import React from 'react'
import PropTypes from 'prop-types'

function DoneItem({done, index}) {
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
    index: PropTypes.number
}

export default DoneItem