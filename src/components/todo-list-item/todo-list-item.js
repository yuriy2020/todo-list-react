import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  // constructor() {
  //   super();

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
  // }

  
  // state = {
  //   done: false,
  //   important: false
  // }

  /**
   * после того как мы стали передавать наверх до app.js   onToggleDone_3  и  onToggleImportant_3
   * нам больше не нужны функции onLableClick    и onMarkImportant  
   */

  // onLableClick = () => {
  //   this.setState((state) => {  // setState работает асинхронно поэтому state изменяем через callback
  //     return {
  //       done: !state.done  // без деструктуризации - запихал весь state в  setState
  //     }
  //
  //   })
  // }
  // 
  // onMarkImportant = () => {
  //   this.setState(({ important }) => {   // деструктуризация -вытаскиваем из state.important
  //     return {
  //       important: !important
  //     }
  //   })
  // }

  //ф-ция на клик по списку на прототипе класса
  // onLableClick() {
  //   console.log('Done', this.props.label)
  // }

  render() {  //отображает туже функцию TodoListItemFunc - скопировал с тела функции
    // одно отличие входные параметры props теперь в this.props
    const { label, onDeleted, onToggleDone_3, onToggleImportant_3 , done, important} = this.props; // вытаскиваем из пропсов todo-list.js

    // const { done, important } = this.state;


    let myClassNames = 'todo-list-item';
    if (done) {
      myClassNames += ' done'
    };

    if (important) {
      myClassNames = 'todo-list-item';
      myClassNames += ' important'
    }

    // const liStyle = {
    //   color: important ? 'tomato' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

    return (
      // style={liStyle}
      // Добавление св-во  onClick (onBlur, onMouseOver...)
      <span className={myClassNames}>
        <span className="todo-list-item-label"
          // onClick={this.onLableClick}>   
          onClick={onToggleDone_3}>
          {label}
        </span>
        <button type="button"
          // onClick={this.onMarkImportant}
          onClick={onToggleImportant_3}
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
          onClick={onDeleted}
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
