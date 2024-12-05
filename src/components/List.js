import React from 'react';

function List(props) {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={props.completed}
        onChange={() => props.toggleComplete(props.index)}
      />
      <span className={`task-text ${props.completed ? 'completed' : ''}`}>
        {props.item}
      </span>
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => props.deleteItem(props.index)}
        ></i>
      </span>
    </li>
  );
}

export default List;
