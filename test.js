// SCENARIO A

      // user clicks Stickify
      // for demo, I click a 'fast-forward button' 
      // this increments Day __ of 21 by 1 [day]
      // this triggers 24-sec countdown timer (2 sec = 1 hr)
      // at 4pm or (10 seconds), the pop-up reminder appears on-screen, 
        // prompting user to: "Please re-type your habit: "Fast"]
        // user clicks 'submit'
      // this increments progress.percentage by 4.76 (100/21)
      // which is reflected on Progress Bar on-screen
--
    // the user simply needs to type the habit in order 
    // for that day to be counted as a 'win' and move the Progress Bar another inch towards completion.

// SCENARIO B

    // In progress.. 


    import React from 'react';

class Reminder extends React.Component {
    state = {  }
    render() { 
        console.log(this.props.remindedHabit)
        return (  
            <div>
                <form className="ui form" onSubmit={() => this.props.handleProgressCounter(this.props.remindedHabit.id)}>
                    <h2>Please re-enter your habit: "{this.props.remindedHabit.description}"</h2>
                    <input style={{width: "250px"}} type="text" placeholder={this.props.remindedHabit.description}></input>
                    <br></br>
                    <p></p>
                    <input className="ui mini green button" type="submit"></input>
                </form>
            </div>
        );
    }
}
 
export default Reminder;





state = {
    settings: {
        video: {
            resolution: '1080p'
        }
    }
}

handleClick = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                ...this.state.settings.video: {
                    resolution: '720p'
                }
            }
        }
    })
}