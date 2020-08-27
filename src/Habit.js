import React from 'react';

class Habit extends React.Component {

    render() { 
        // console.log(this.props.habit)
        return (  
            <tr>
                <td><input type="checkbox" tabindex="0" class="hidden"/></td>
                <td>{this.props.habit.description}</td>
                <td>{this.props.habit.created 
                        ? this.props.habit.created 
                        : this.props.currentDate}
                </td>
                {/* <td><span><button className="circular ui yellow button" onClick={() => this.handleStickify(this.props.habit.id, this.props.habit.stickify)}>Stickify</button></span></td> */}
                <td><span><button className="circular ui yellow button" onClick={() => this.props.handleStickify(this.props.habit.id)}>Stickify</button></span></td>

                <td><span><button className="compact circular ui mini green basic button" onClick={() => this.props.handleEdit(this.props.habit.id, this.props.habit.description)}>Edit</button></span></td>
                <td><span><button className="compact circular ui mini red basic button" onClick={() => this.props.handleDelete(this.props.habit.id)}>Delete</button></span></td>
            </tr>
        );
    }
}
 
export default Habit;