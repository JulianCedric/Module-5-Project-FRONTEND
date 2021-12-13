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
    // setToDoList(mapped) is analogous to this.setState({ toDoList: mapped })

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    return (
        <div className="lab2Container">
            <h1>Lab2</h1>
            <Header />
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        </div>
    )
}
 
export default Lab2; 