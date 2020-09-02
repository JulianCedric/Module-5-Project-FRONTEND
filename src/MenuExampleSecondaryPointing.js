import React, { Component } from 'react'
import EditHabit from './EditHabit';
import { Menu, Segment, Icon, Divider, Button, Input } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = {
    activeItem: 'bucket',
    editSegment: false,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  editHabit = ( id ) => {
    this.setState({ editSegment: true, editId: id });
  }

  editSubmit = (id, data) => {
    this.props.editHabit( id, data );
    this.setState({ editSegment: false });
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="ui centered grid">

      <div className="twelve wide column">
        <div className="ui inverted pointing secondary menu">
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
          {
          this.state.activeItem === 'bucket' ?
          <Segment bucket>
            {
              this.props.habits.map( habit =>
                habit.progress.counter === 0
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px', textAlign: 'left' }}><h3><Icon name="edit" onClick={ this.editHabit.bind( this, habit.id ) } /> - { habit.description }</h3></div>
                : null
              )
            }
          </Segment> : null }
          {
          this.state.activeItem === 'progress' ?
          <Segment progress>
            {
              this.props.habits.map( habit =>
                habit.progress.counter > 0 && habit.progress.counter < 21
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px', textAlign: 'left' }}><h3><Icon name="clock outline" /> - { habit.description }</h3></div>
                : null
              )
            }
          </Segment> : null }
          {
          this.state.activeItem === 'stikified' ?
          <Segment stikified>
            {
              this.props.habits.map( habit =>
                habit.progress.counter === 21
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px', textAlign: 'left' }}><h3><Icon name="check" /> - { habit.description }</h3></div>
                : null
              )
            }
          </Segment> : null }

          { this.state.editSegment ?
            <Segment>
              {
                this.props.habits.map( habit => {
                  if( habit.id === this.state.editId ){
                    return(
                        <EditHabit editHabit={ this.editHabit } editSubmit={ this.editSubmit } habit={ habit } />
                    )
                  }
                })
              }

              <Divider horizontal>Or</Divider>

              <Button color="red">Delete</Button>
            </Segment> : null }
    </div>
    <p></p>
    <br></br>
    <p></p>
    </div>
    )
  }
}
