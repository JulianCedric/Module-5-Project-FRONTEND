import React from 'react';

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

    handleSubmit = e => {
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
                    <input type="text" placeholder="Add a Habit.." style={{width: "350px"}} name="description" value={this.state.description} onChange={this.handleChange}/><span></span><p></p>
                    {/* <button className="compact ui basic green button" onClick={this.handleFormClick}> */}
                        <i class="huge violet angle double right arrow basic icon" onClick={this.handleFormClick}></i>
                    {/* </button> */}
                </div>
            </div>
        );
    }
}
 
export default CreateHabit;