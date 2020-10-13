import React from 'react';
import HabitItem from './HabitItem';

class HabitsContainer extends React.Component {
    render() { 
        console.log(this.props)
        return (  
            <div className="ui form">
                <div className="field">
                    <h2 className="mediumWhiteText" >Habits Container</h2>
                    <p></p>
                    <br></br>
                 </div>
                <div className="ui centered grid">
                    <div className="fifteen wide column">
                        <table className="ui inverted sortable celled table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Date Added</th>
                                    <th>Stickify</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {this.props.habits.map(habit => <Habit key={habit.id} habit={habit} currentDate={this.props.currentDate} handleStickify={this.props.handleStickify} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} temporaryID={this.props.temporaryID}/>)}
                            </thead>
                            <tbody>
                            </tbody>
                                <tfoot>
                                    <tr>
                                        <th>0</th>
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
    };
};
 
export default HabitsContainer;