import React, { Component } from 'react'
import EditHabit from './EditHabit';
import { Menu, Segment, Icon, Divider, Button, Input, Popup, Grid } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = {
    activeItem: 'bucket',
    editSegment: false,
    open: false,
    setOpen: false
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  editHabit = ( id ) => {
    this.setState({ editSegment: true, editId: id });
  }

  editSubmit = (id, data) => {
    this.props.editHabit( id, data );
    this.setState({ editSegment: false });
  }

  deleteHabit = ( id ) => {
    this.props.deleteHabit( id );
  }

  onStikify = ( id ) => {
    this.props.startStikify( id );
  }

  render() {
    const { activeItem } = this.state

    return (
<div>
        <div className="ui inverted pointing secondary menu">
          <Menu pointing secondary fluid widths={3}>
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
                ? <Popup  key={ habit.id }
                          style={{ textAlign: 'center' }}
                          trigger={<h3 style={{ textAlign: 'left' }}><Icon name="angle double right" size="big" color="orange" onClick={ this.onStikify.bind(this, habit.id) } />{ habit.description }</h3>} flowing hoverable
                          > <EditHabit editHabit={ this.editHabit } editSubmit={ this.editSubmit } habit={ habit } />
                            <Divider />
                            <Button color="red" onClick={ this.deleteHabit.bind(this, habit.id) }>Delete</Button>
                          </Popup>
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
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px', textAlign: 'left' }}><h3><Icon name="clock outline" size="big" color="orange" /> - { habit.description }</h3></div>
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
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px', textAlign: 'left' }}><h3><Icon name="check" size="big" color="green" /> - { habit.description }</h3></div>
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

              <Button class="ui basic red button" color="red">Delete</Button>
            </Segment> : null }
    </div>

    )
  }
}