import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'bucket' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <div class="ui inverted pointing secondary menu">
          <Menu pointing secondary>
              <Menu.Item
                name='bucket'
                active={activeItem === 'bucket'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='progress'
                active={activeItem === 'progress'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='stikified'
                active={activeItem === 'stikified'}
                onClick={this.handleItemClick}
              />
          </Menu>
        </div>
        <div class="ui segment">
          { 
          this.state.activeItem === 'bucket' ? 
          <Segment bucket>
            {
              this.props.habits.map( habit =>
                habit.column === 'A'
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px' }}>{ habit.description }</div>
                : null
              )
            }
          </Segment> : null }
          { 
          this.state.activeItem === 'progress' ? 
          <Segment progress>
            {
              this.props.habits.map( habit =>
                habit.column === 'B'
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px' }}>{ habit.description }</div>
                : null
              )
            }
          </Segment> : null }
          { 
          this.state.activeItem === 'stikified' ? 
          <Segment stikified>
            {
              this.props.habits.map( habit =>
                habit.column === 'C'
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px' }}>{ habit.description }</div>
                : null
              )
            }
          </Segment> : null }
        </div>
    </div>
    )
  }
}