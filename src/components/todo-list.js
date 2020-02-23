import React from 'react';

import TodoListItem from './todo-list-item';

import './todo-list.css'

// скопировал для наглядности из index.js
// <TodoList todos = {todoData} />
// const todoData =[
//     {label: 'Drink coffeeeee', important: false, id:1},
//     {label: 'Make Awesome App', important: true, id:2},
//     {label: 'Have a lunch', important: false, id:3},
// ];
const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item; // деструктуризация  
        // ...itemProps - rest parameters (которые не были деструктир сразу -все кроме id)
        // 
        return (
            <li key={id} className = "list-group-item">
                <TodoListItem {...itemProps}  // сюда не попадает id 
            // spread-оператор делает тоже самое
            // label={item.label}
            // important={item.important}
            // id = {item.id}
            /></li>
        )
    });
    return (
        <ul className = "list-group todo-list">
            {elements}
        </ul>
    )

    //  развернутый вариант что сверху делает map 
    // return (
    //     <ul>
    //         <li><TodoListItem
    //             label={todos[0].label}
    //             important={todos[0].important}
    //         /></li>
    //         <li><TodoListItem
    //             label={todos[1].label}
    //             important={todos[1].important}
    //         /></li>
    //         <li><TodoListItem
    //             label={todos[2].label}
    //             important={todos[2].important}
    //         /></li>
    //     </ul>
    // )
};
export default TodoList;