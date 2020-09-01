import React from 'react';

class MenuItem extends React.Component {
    state = {  }
    render(){
      return(
        <tr>
            <td>{
                this.props.habits.map( habit => (
                  habit.column === 'A'
                  ? <li>{habit.description}</li>
                  : null
                  ))
                }
            </td>
            <td>{
                this.props.habits.map( habit => (
                  habit.column === 'B'
                  ? <li>{habit.description}</li>
                  : null
                  ))
                }
            </td>
            <td>{
                this.props.habits.map( habit => (
                  habit.column === 'C'
                  ? <li>{habit.description}</li>
                  : null
                  ))
                }
            </td>
        </tr>
      )
    }
            
}
 
export default MenuItem;