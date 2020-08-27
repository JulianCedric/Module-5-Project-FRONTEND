import React from 'react';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

class CreateHabitForm extends React.Component {
    state = {  
        id: '',
        description: '',
        type: 'good',
        stickify: false,
        created: date,
        tag: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // handleSubmit = e => {
    //     e.preventDefault()
        
    //     fetch(API_HABITS, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify(this.state)
    //     })
    //     .then(r => r.json())
    //     .then(newHabit => this.props.handleNewHabit(newHabit),
    //         this.setState({
    //             id: '',            
    //             description: '',
    //             type: 'good',
    //             stickify: '',
    //             created: date,
    //             tag: ''
    //         })
    //     )
    // }

    handleFormClick = e => {
        e.preventDefault() 
        let newHabit = this.state
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
                        <p></p>
                        <br></br>
                        <label>Image of</label>
                    <label> ~ Stick-Figure Person ~ </label>
                    <label> will go here </label>
                        <p></p>
                        <br></br>
                    <input type="text" placeholder="Add a Habit.." style={{width: "350px"}} name="description" value={this.state.description} onChange={this.handleChange}/><button className="circular ui positive icon basic button" onClick={this.handleFormClick}><i className="right arrow icon"></i></button>
                </div>
            </div>
        );
    }
}
 
export default CreateHabitForm;