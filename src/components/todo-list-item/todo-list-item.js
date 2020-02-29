import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  constructor() {
    super();

    // // this.state инициализируется внутри конструктора (или в теле класса без this)
    // // после инициализации state его напрямую изменять нельзя 
    // this.state = {
    //   done: false
    // };

    //   this.onLableClick = () => {
    //   //  для state можно использовать специальную ф-цию this.setState
    //   // и в эту функцию мы можем внести объект с изменениями кооторые хотим внести в state
    //     this.setState({
    //       done: true
    //     })
    //   }
  }
  state = {
    done: false,
    important: false
  }

  onLableClick = () => {
    this.setState((state) => {  // setState работает асинхронно поэтому state изменяем через callback
      return {
        done: !state.done  // без деструктуризации - запихал весь state в  setState
      }

    })
  }

  onMarkImportant = () => {
    this.setState(({ important }) => {   // деструктуризация -вытаскиваем из state.important
      return {
        important: !important
      }
    })
  }

  //ф-ция на клик по списку на прототипе класса
  // onLableClick() {
  //   console.log('Done', this.props.label)
  // }

  render() {  //отображает туже функцию TodoListItemFunc - скопировал с тела функции
    // одно отличие входные параметры props теперь в this.props
    const { label } = this.props;

    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done'
    };

    if (important) {
      classNames = 'todo-list-item';
      classNames += ' important'
    }

    // const liStyle = {
    //   color: important ? 'tomato' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

    return (
      <span className={classNames}
        // style={liStyle}
        onClick={this.onLableClick   // Добавление св-во  onClick (onBlur, onMouseOver...)
          // .bind(this)
        }
      > {label}

        <button type="button"
          onClick={this.onMarkImportant}
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
          onClick={this.props.onDeleted}
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" /> 
        </button>
      </span>
    )
  }
}

// функциональный способ  (когда мы переделали в классы - функцию можно удалить.заккоментил)
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
