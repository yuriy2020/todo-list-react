import React from 'react';

import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
    const liStyle = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    return (
        <span className="todo-list-item"
            style={liStyle}>{label}

            <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>

        </span>
    )
};

//не деструктурированый
// const TodoListItem = (props)=>{
// return <span>{ props.label }</span>
// }

export default TodoListItem;
////////////////////////////////


/**
const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};
*/
