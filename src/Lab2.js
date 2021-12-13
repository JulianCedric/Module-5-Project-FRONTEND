/* 
Users
Goals
Tasks
Quotes
*/

import React, { useState } from 'react';
import Goals from './Goals';
import Tasks from './Tasks';
import Quotes from './Quotes';
import CreateTask from './CreateTask';
import CreateQuote from './CreateQuote';
import Header from './Header';
import data from './data.json';
import ToDoList from './ToDoList';

function Lab2 () {
    const [ toDoList, setToDoList ] = useState(data);

        return (
            <div className="lab2Container">
                <h1>Lab2</h1>
                <Header />
                <ToDoList />
                <div className="lab2">
                    <Goals/>
                    <Tasks/>
                    <CreateTask/>
                    <Quotes/>
                    <div className='sidebar'>
                        {(this.state.showQuotes ? <CreateQuote/> : null)}
                    </div>
                </div>
            </div>
        )
}
 
export default Lab2; 