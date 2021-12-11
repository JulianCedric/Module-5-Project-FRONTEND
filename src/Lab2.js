/* 
Users
Goals
Tasks
Quotes
*/

import React from 'react';
import Goals from './Goals';
import Tasks from './Tasks';
import Quotes from './Quotes';
import CreateTask from './CreateTask';
import CreateQuote from './CreateQuote';

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
                <div className="lab2">
                    <Goals/>
                    <Tasks/>
                    <CreateTask/>
                    <Quotes/>
                    <CreateQuote/>
                </div>
            </div>
        )
    }
}
 
export default Lab2; 