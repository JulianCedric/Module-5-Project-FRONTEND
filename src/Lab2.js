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

var TASKS = ['a', 'b'];

class Lab2 extends React.Component {
    state = {
        tasks: TASKS,
        showQuotes: false
    };

    handleNewTask = newTask => {
        let currentTasks = [...this.state.tasks]
        console.log("currentTasks: ", currentTasks)
    }

    render() {
        console.log("TASKS: ", TASKS);
        console.log("this.handleNewTask: ", this.handleNewTask)
        return (
            <div className="lab2Container">
                <h1>Lab2</h1>
                <Header />
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
}
 
export default Lab2; 