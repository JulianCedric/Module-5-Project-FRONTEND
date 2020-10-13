import React from 'react';

class HabitItem extends React.Component {
    render() { 
        return (  
            <tr>
                <td>{this.props.habit.description}</td>
                <td>{this.props.habit.created 
                        ? this.props.habit.created 
                        : this.props.currentDate}
                </td>
                {/* <td><span><button className="circular ui yellow button" onClick={() => this.handleStickify(this.props.habit.id, this.props.habit.stickify)}>Stickify</button></span></td> */}
                <td><span><button style={{width: "70px"}} className="compact circular ui yellow button" onClick={() => this.props.handleStickify(this.props.habit.id)}>STIK</button></span></td>
                <td><span><button style={{width: "30px"}} className="compact circular ui mini green basic button" onClick={() => this.props.handleEdit(this.props.habit.id, this.props.habit.description)}><i class="green edit outline basic icon"></i></button></span></td>
                <td><span><button style={{width: "30px"}} className="compact circular ui mini red basic button" onClick={() => this.props.handleDelete(this.props.habit.id)}><i class="red trash alternate outline basic icon"></i></button></span></td>
            </tr>
        );
    };
};
 
export default HabitItem;