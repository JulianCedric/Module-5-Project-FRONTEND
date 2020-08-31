import React from 'react';

class Reminder extends React.Component {
    state = {  }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.handleProgressCounter(this.props.remindedHabit.id, this.props.remindedHabit.progress)
    }

    render() { 
        console.log(this.props.remindedHabit)
        return (  
            <div>
                <form className="ui form" onSubmit={ this.handleSubmit }>
                    <h2 className="mediumWhiteText">Please re-enter your habit: "{this.props.remindedHabit.description}"</h2>
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