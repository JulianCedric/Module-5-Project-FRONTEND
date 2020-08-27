import React from 'react';

class Habit extends React.Component {

    handleStickifyClick = e => {
        
    }

    render() { 
        console.log(this.props.habit)
        return (  
            <tr>
                <td><input type="checkbox" tabindex="0" class="hidden"/></td>
                <td>{this.props.habit.description}</td>
                <td>{this.props.habit.created 
                        ? this.props.habit.created 
                        : this.props.currentDate}
                </td>
                <td><span><button className="circular ui yellow button" onClick={this.handleStickifyClick}>Stickify</button></span></td>
                <td><span><button className="compact circular ui mini green basic button">Edit</button></span></td>
                <td><span><button className="compact circular ui mini red basic button">Delete</button></span></td>
            </tr>
        );
    }
}
 
export default Habit;