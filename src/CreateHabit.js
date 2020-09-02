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

    render() {
        return (
            <div className="ui form">
                <div className="field">
                  <Container textAlign='center' style={{ width: '350px' }}>
                    <form onSubmit={ this.handleSubmit }>
                      <input type="text" style={{ width: '350px' }} placeholder="Add a Habit.." name="description" value={this.state.description} onChange={this.handleChange}/>
                      <br />
                      <Segment inverted>
                      <Grid columns={2} relaxed>
                        <Grid.Column>
                          <Button primary type="submit" class="huge violet angle double right arrow basic icon">Save</Button>
                        </Grid.Column>
                        <Grid.Column>
                          <i class="huge orange angle double right arrow basic icon"></i>
                        </Grid.Column>
                      </Grid>
                      <Divider vertical>Or</Divider>
                      </Segment>
                    </form>
                  </Container>
                </div>
            </div>
        );
    }
}

export default CreateHabit;
