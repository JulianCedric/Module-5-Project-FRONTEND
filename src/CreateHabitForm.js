import React from 'react';
import AddHabitButton from './Images/AddHabitButton.png';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

class CreateHabitForm extends React.Component {
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
        },
        dailyWin: ( time )=>{
          // if user clicks submit within day range, increment progress.counter, else progress.counter = 0
          // progress.percentage = progress.counter/21
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // handleSubmit = e => {
    //     e.preventDefault()
        
    //     fetch(API_HABITS_inProgress, {
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
        let newHabit = {
            id: null,
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
            },
            dailyWin: ( time )=>{
              // if user clicks submit within day range, increment progress.counter, else progress.counter = 0
              // progress.percentage = progress.counter/21
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
                        <p></p>
                        <br></br>

                    {/* <img src={ StickPerson } alt="stickPerson" /> */}

                        <p></p>
                        <br></br>
                    <input type="text" placeholder="Add a Habit.." style={{width: "350px"}} name="description" value={this.state.description} onChange={this.handleChange}/><button onClick={this.handleFormClick}><i class="angle double right icon"></i>
</button>
                </div>
            </div>
        );
    }
}
 
export default CreateHabitForm;