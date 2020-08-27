import React from 'react';
import Habit from './Habit';

class HabitsContainer extends React.Component {
    render() { 
        console.log(this.props.habits)
        console.log(this.props.currentDate)

        let temporaryID = 

        console.log(this.props.temporaryID)
        return (  
            <div className="ui form">
                <div className="field">
                    <h2>Habits Container</h2>
                </div>
                <div className="ui centered grid">
                    <div className="twelve wide column">
                        <table className="ui sortable celled table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Date Added</th>
                                    <th>Stickify</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {this.props.habits.map(habit => <Habit key={habit.id} habit={habit} currentDate={this.props.currentDate} temporaryID={this.props.temporaryID}/>)}
                            </thead>
                            <tbody>
                            </tbody>
                                <tfoot>
                                    <tr>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                    </tr>
                                </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default HabitsContainer;