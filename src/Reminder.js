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
                    <h3 className="mediumWhiteText">Please re-enter your habit:</h3>
                    <h2>"{this.props.remindedHabit.description}"</h2>
                    <input style={{width: "250px"}} type="text" placeholder={this.props.remindedHabit.description} name="description" value={ this.state.description } onChange={ this.handleChange }></input>
                    <br></br>
                    <p></p>
                    <input className="ui big green basic button" type="submit" value="Another Won"></input>
                </form>
            </div>
        );
    }
}

export default Reminder;
