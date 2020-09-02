import React from 'react';

class MenuItem extends React.Component {
    state = {  }

    componentDidMount = () => {
      console.log( this.props.habits[0] )
    }

    render(){
      return(
        <tr>
          <td>
            <div className="ui relaxed divided list">
            {
              this.props.habits.map( habit =>
                habit.column === 'A'
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px' }}>{ habit.description }</div>
                : null
              )
            }
            </div>
          </td>
          <td>
            <div className="ui relaxed divided list">
            {
              this.props.habits.map( habit =>
                habit.column === 'B'
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px' }}>{ habit.description }</div>
                : null
              )
            }
            </div>
          </td>
          <td>
            <div className="ui relaxed divided list">
            {
              this.props.habits.map( habit =>
                habit.column === 'C'
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px' }}>{ habit.description }</div>
                : null
              )
            }
            </div>
          </td>
        </tr>
      )
    }

}

export default MenuItem;
