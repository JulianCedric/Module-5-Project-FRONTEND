import React from 'react';
import Habit from './Habit';

class HabitsContainer extends React.Component {
    render() { 
        console.log(this.props.habits)
        return (  
            <div class="ui form">
                <div class="field">
                    <h2>Habits Container</h2>
                </div>
                <div class="ui centered grid">
                    <div class="twelve wide column">
                        <table class="ui sortable celled table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Date Added</th>
                                    <th>Stickify</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {this.props.habits.map(habit => <Habit habit={habit}/>)}
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