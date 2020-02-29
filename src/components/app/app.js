import React from 'react';

import AppHeader from '../app-header';    // экспорт из файла index.js
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../AddItem/AddItem'

import './app.css'

// const MyApp = () => {  переделали в класс что бы реакт смог обновлять компоненты
class MyApp extends React.Component {
    maxId = 100;


    state = {
        todoData: [
            { label: 'Drink coffeeeee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 },
        ],
        isLogged: false,
        loginBox: <span>Log in please</span>,
        welcomeBox: <span>Welcome Back !</span>
    }

    // const isLogged = false;
    // const loginBox = <span>Log in please</span>
    // const welcomeBox = <span>Welcome Back !</span>

    // const todoData = [
    //     { label: 'Drink coffeeeee', important: false, id: 1 },
    //     { label: 'Make Awesome App', important: true, id: 2 },
    //     { label: 'Have a lunch', important: false, id: 3 },
    // ];

    // onLableClick = () => {
    //     this.setState((state) => {  // setState работает асинхронно поэтому state изменяем через callback
    //       return {
    //         done: !state.done  // без деструктуризации - запихал весь state в  setState
    //       }

    //     })
    //   }

    deleteItem1 = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id)
            const newArray = [...todoData]
            newArray.splice(idx, 1);
            return {
                todoData: newArray
            }
        })
    }

    addItem1 = (text) => {
        console.log('Aded smth')
        //gener id
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };
        // add in array
        this.setState(({ todoData }) => {
            const newArray = [...todoData ,newItem];
            // newArray.push(newItem) //то же самое
            return {
                todoData: newArray
            }
        })

    }


    render() {
        return (
            <div>
                <a href='/'>{this.state.isLogged ? this.state.welcomeBox : this.state.loginBox}</a>
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <div>
                    <TodoList todos={this.state.todoData}
                        // onDeleted={(id) => this.deleteItem(id)}
                        onDeleted={this.deleteItem1}
                    />
                </div>
                <div>
                    <AddItem addItem2={this.addItem1}
                    />
                </div>


            </div>
        )
    }

};

export default MyApp;