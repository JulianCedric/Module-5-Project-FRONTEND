import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    state = { }

    render() {
        return (
          <table className="ui inverted celled structured table">
              <thead style={{ textAlign: 'center' }}>
                  <tr><th colSpan="3">My Habits</th></tr>
                  <tr>
                      <th style={{ width: '33vw' }}>Bucket List</th>
                      <th style={{ width: '33vw' }}>In-Progress...</th>
                      <th style={{ width: '33vw' }}>STIKified</th>
                  </tr>
              </thead>

              <tbody className="top aligned">
                  <MenuItem habits={ this.props.habits } />
              </tbody>
          </table>
        )
    }
}

export default Menu;
