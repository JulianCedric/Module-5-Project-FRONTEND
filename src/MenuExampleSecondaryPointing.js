import React, { Component } from 'react'
import EditHabit from './EditHabit';
import { Menu, Segment, Icon, Divider, Button, Popup, Container } from 'semantic-ui-react'

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
          <Menu size="massive" pointing secondary fluid widths={3}>
              <Menu.Item
                name='bucket'
                active={activeItem === 'bucket'}
                onClick={this.handleItemClick}
              >Bucket List</Menu.Item>
              <Menu.Item
                name='progress'
                active={activeItem === 'progress'}
                onClick={this.handleItemClick}
              >In Progress.. </Menu.Item>
              <Menu.Item
                name='stikified'
                active={activeItem === 'stikified'}
                onClick={this.handleItemClick}
              >Stickify'd</Menu.Item>
          </Menu>
        </div>
        <Container style={{ height: '300px', overflowY: 'scroll' }}>
          {
          this.state.activeItem === 'bucket' ?
          <Segment>
            {
              this.props.habits.map( habit =>
                habit.counter === 0
                ? <Popup  key={ habit.id }
                          style={{ textAlign: 'center' }}
                          trigger={<h3 style={{ textAlign: 'left' }}><Icon name="angle double right" size="big" color="orange" onClick={ this.onStikify.bind(this, habit.id) } />{ habit.description }</h3>} flowing hoverable
                          > <EditHabit editHabit={ this.editHabit } editSubmit={ this.editSubmit } habit={ habit } />
                            <Divider />

                              {/* <Button circular compact inverted color='red' animated='fade'>
                                <Button.Content inverted color='red' visible></Button.Content>
                                <Button.Content inverted color="red" icon='trash' onClick={ this.deleteHabit.bind(this, habit.id) } hidden><span><Icon icon='trash'/></span></Button.Content>
                              </Button> */}

<Button inverted color="red" icon='trash' onClick={ this.deleteHabit.bind(this, habit.id) }/>
  
                              

                          </Popup>
                : null
              )
            }
          </Segment> : null }
          {
          this.state.activeItem === 'progress' ?
          <Segment>
            {
              this.props.habits.map( habit =>
                habit.counter > 0 && habit.counter < 21
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px', textAlign: 'left' }}><h3><Icon name="clock outline" size="big" color="orange" /> { habit.description }</h3></div>
                : null
              )
            }
          </Segment> : null }
          {
          this.state.activeItem === 'stikified' ?
          <Segment>
            {
              this.props.habits.map( habit =>
                habit.counter === 21
                ? <div key={ habit.id } className="item" style={{ padding: '15px 5px', textAlign: 'left' }}><h3><Icon name="check" size="big" color="green" /> { habit.description }</h3></div>
                : null
              )
            }
          </Segment> : null }

          { this.state.editSegment ?
            <Segment>
              {
                this.props.habits.map( habit => {
                  if( habit.id === this.state.editId ){
                    return (
                        <EditHabit editHabit={ this.editHabit } editSubmit={ this.editSubmit } habit={ habit } />
                    )
                  }
                })
              }

              <Divider horizontal>Or</Divider>

              <Button class="ui basic red button" color="red">Delete</Button>
            </Segment> : null }
        </Container>
            <br></br>
    </div>

    )
  }
}
