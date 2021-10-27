import React from 'react';
import { Container, Button } from 'semantic-ui-react';

// const today = new Date()
// const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

class CreateHabit extends React.Component {
    state = {
        id: '',
        name: '',
        description: '',
        quote: '',
        dateCreated: '',
        column: '',
        counter: 0,
        percentage: 0,
        dailyWinConfirmation: false
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSaveClick = e => {
        e.preventDefault() 
        fetch("http://localhost:3001/api/v1/habits", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                quote: this.state.quote,
                dateCreated: this.props.date,
                column: this.state.column,
                counter: this.state.counter,
                percentage: this.state.percentage,
                dailyWinConfirmation: this.state.dailyWinConfirmation
            })})
            .then(r => r.json())
            .then(newHabit => {
                this.props.handleNewHabit(newHabit)
                this.setState({
                    id: '',
                    name: '',
                    description: '',
                    quote: '',
                    dateCreated: '',
                    column: '',
                    counter: 0,
                    percentage: 0,
                    dailyWinConfirmation: false
                })
            })
    }
    
    handleStickifyClick = e => {
        e.preventDefault() 
        fetch("http://localhost:3001/api/v1/habits", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                quote: this.state.quote,
                dateCreated: this.props.date,
                column: this.state.column,
                counter: 1,
                percentage: this.state.percentage,
                dailyWinConfirmation: this.state.dailyWinConfirmation
            })})
            .then(r => r.json())
            .then(newHabit => {
                this.props.handleNewHabit(newHabit)
                this.setState({
                    id: '',
                    name: '',
                    description: '',
                    quote: '',
                    dateCreated: '',
                    column: '',
                    counter: 0,
                    percentage: 0,
                    dailyWinConfirmation: false
                })
            })
    }

    render() {
        console.log("Date: ", this.props.date)
        return (
            <div className="ui form">
                <div className="field">
                    <Container textAlign='center' style={{ width: '400px' }}>
                        <form>
                            <input type="text" style={{ width: '400px' }} placeholder="Add a New Habit.." name="description" value={this.state.description} onChange={this.handleChange}/>
                                <br></br>
                                <br></br>
                            <Button.Group>
                                <Button onClick={this.handleSaveClick} type="submit" color='purple' style={{ width: '100px' }}>
                                    Save
                                </Button>
                                <Button.Or color='purple' inverted>            
                                    or
                                </Button.Or>
                                <Button onClick={this.handleStickifyClick} type="submit" color='purple' style={{ width: '100px' }}>
                                    Stickify
                                </Button>
                            </Button.Group>
                        </form>
                    </Container>
                </div>
            </div>
        );
    }
}

export default CreateHabit; 