import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  render() {  //отображает туже функцию TodoListItemFunc - скопировал с тела функции
    // одно отличие входные параметры props теперь в this.props
    const { label, important = false } = this.props;

    const liStyle = {
      color: important ? 'tomato' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
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
  }
}

// функциональный способ  (когда мы переделали в классы - функцию можно уудалить.заккоментил)
// const TodoListItemFunc = ({ label, important = false }) => {
//   const liStyle = {
//     color: important ? 'tomato' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   }
//   return (
//     <span className="todo-list-item"
//       style={liStyle}>{label}

//       <button type="button"
//         className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation" />
//       </button>
//       <button type="button"
//         className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   )
// };

//не деструктурированый
// const TodoListItem = (props)=>{
// return <span>{ props.label }</span>
// }


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
