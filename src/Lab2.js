import React, { useState } from 'react';
import Goals from './Goals';
import Quotes from './Quotes';
import CreateTask from './CreateTask';
import CreateQuote from './CreateQuote';
import Header from './Header';
import data from './data.json';
import ToDoList from './ToDoList';

function Lab2 () {
    const [ toDoList, setToDoList ] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
    }

    return (
        <div className="lab2Container">
            <h1>Lab2</h1>
            <Header />
            <ToDoList toDoList={toDoList} />
        </div>
    )
}
 
export default Lab2; 