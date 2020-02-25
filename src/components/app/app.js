import React from 'react';

import AppHeader from '../app-header';    // экспорт из файла index.js
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css'

const MyApp = () => {
    const isLogged = false;
    const loginBox = <span>Log in please</span>
    const welcomeBox = <span>Welcome Back !</span>

    const todoData = [
        { label: 'Drink coffeeeee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ];

    return (
        <div>
            <a href='/'>{isLogged ? welcomeBox : loginBox}</a>
            <AppHeader toDo={1} done ={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData} />
        </div>
    )
};

export default MyApp;