import React from 'react';

class Habit extends React.Component {
    render() { 
        console.log(this.props.habit)
        return (  
            <tr>
                <td>{this.props.habit.description}</td>
                <td>{this.props.habit.created}</td>
                <td><span><button className="ui yellow button">Stickify</button></span></td>
                <td><span><button className="ui green button">Edit</button></span></td>
                <td><span><button className="ui red button">Delete</button></span></td>
            </tr>
        );
    }
}
 
export default Habit;