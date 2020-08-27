import React from 'react';

class Habit extends React.Component {

    render() { 
        console.log(this.props.habit)
        // console.log(this.props.temporaryID)
        return (  
            <tr>
                <td>{this.props.habit.description}</td>
                <td>{this.props.habit.created 
                        ? this.props.habit.created 
                        : this.props.currentDate}
                </td>
                <td><span><button className="ui yellow button">Stickify</button></span></td>
                <td><span><button className="ui green button">Edit</button></span></td>
                <td><span><button className="ui red button">Delete</button></span></td>
            </tr>
        );
    }
}
 
export default Habit;