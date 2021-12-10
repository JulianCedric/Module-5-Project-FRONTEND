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

class Lab2 extends React.Component {
    render() { 
        return (
            <div className="lab2">
                <h1>Lab2</h1>
                <Goals/>
                <Tasks/>
                <Quotes/>
            </div>
        )
    }
}
 
export default Lab2; 