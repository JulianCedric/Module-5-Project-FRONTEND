import React from 'react';
import { Container, Button, Grid, Divider, Segment } from 'semantic-ui-react';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

class CreateHabit extends React.Component {
    state = {
        id: null,
        description: '',
        type: 'good',
        stickify: false,
        created: date,
        tag: '',
        progress: {
            counter: 0,
            percentage: 0,
            dailyWinConfirmation: false
          //   User clicks submit on dailyReminderForm, which
              // (1) sets dailyWinConfirmation attribute to true, and
              // (2) increments habit.progress.counter by 1 [day]
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let newHabit = {
            id: 10,
            description: this.state.description,
            type: 'good',
            stickify: false,
            created: date,
            tag: '',
            progress: {
                counter: 0,
                percentage: 0,
                dailyWinConfirmation: false
              //   User clicks submit on dailyReminderForm, which
                  // (1) sets dailyWinConfirmation attribute to true, and
                  // (2) increments habit.progress.counter by 1 [day]
            }
        }
        this.props.handleNewHabit(newHabit)
        this.setState({
            id: '',
            description: '',
            type: 'good',
            stickify: false,
            created: date,
            tag: ''
        })
    }

    handleStikify = () => {
      let newHabit = {
          id: 10,
          description: this.state.description,
          type: 'good',
          stickify: false,
          created: date,
          tag: '',
          progress: {
              counter: 1,
              percentage: 0,
              dailyWinConfirmation: false
            //   User clicks submit on dailyReminderForm, which
                // (1) sets dailyWinConfirmation attribute to true, and
                // (2) increments habit.progress.counter by 1 [day]
          }
      }
      this.props.handleNewHabit(newHabit)
      this.setState({
          id: '',
          description: '',
          type: 'good',
          stickify: false,
          created: date,
          tag: ''
      })
    }

    render() {
        return (
            <div className="ui form">
                <div className="field">
                  <Container textAlign='center' style={{ width: '400px' }}>
                    <form onSubmit={ this.handleSubmit }>
                      <input type="text" style={{ width: '400px' }} placeholder="Add a New Habit.." name="description" value={this.state.description} onChange={this.handleChange}/>
                      <br />
                    
                    <br></br>

                    <Button.Group>
          <Button type="submit" color='purple' style={{ width: '100px' }}>Save</Button>
          {/* <Button inverted style={{ width: '100px' }}>Save</Button> */}
          {/* <Button color='purple' inverted style={{ width: '100px' }}>Save</Button> */}
          <Button.Or color='purple' inverted>or</Button.Or>
          <Button onClick={ this.handleStikify } color='purple' style={{ width: '100px' }}>Stickify</Button>
          {/* <Button inverted style={{ width: '100px' }}>Stickify</Button> */}
          {/* <Button color='purple' inverted style={{ width: '100px' }}>Stickify</Button> */}
        </Button.Group>




                      </form>
                  </Container>
                </div>
            </div>
        );
    }
}

export default CreateHabit;
