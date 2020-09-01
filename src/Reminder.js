import React from 'react';

class Reminder extends React.Component {
    state = { 
        description: ''
     }
     
    handleChange = (e) => {
    this.setState({ description: e.target.value })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if( this.props.remindedHabit.description === this.state.description ){
            this.props.handleProgressCounter(this.props.remindedHabit.id, this.props.remindedHabit.progress)
        } else {
            alert('Incorrect');
        }
        this.setState({ description: '' })
    }

    render() { 
        console.log(this.props.remindedHabit)
        return (  
            <div>
                <form className="ui form" onSubmit={ this.handleSubmit }>
                    <h2 className="mediumWhiteText">Please re-enter your habit: "{this.props.remindedHabit.description}"</h2>
                    <input style={{width: "250px"}} type="text" placeholder={this.props.remindedHabit.description} name="description" value={ this.state.description } onChange={ this.handleChange }></input>
                    <br></br>
                    <p></p>
                    <input className="ui mini green button" type="submit"></input>
                </form>
            </div>
        );
    }
}
 
export default Reminder;