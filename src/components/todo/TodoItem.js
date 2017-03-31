import React from 'react';

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete}/>
      {props.name}
    </li>
  )
};

TodoItem.propTypes = {
  isComplete: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
}
