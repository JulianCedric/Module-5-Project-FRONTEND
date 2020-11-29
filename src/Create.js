import React from 'react';
import { Button, Input, Segment } from 'semantic-ui-react';

class Create extends React.Component {
    state = {  
        name: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.name)
    }

    handleClick = e => {
        console.log('[ Add Habit ] BUTTON CLICKED')
        let newHabit = this.state.name
        this.props.handleNewHabit(newHabit)
    }

    render() { 
        return (  
            <div>

                <Segment inverted>

                    <Input inverted name='name' onChange={this.handleChange} placeholder='New Habit...' style={{width: '250px'}} type='text' value={this.state.name}/>
                    <br></br>
                    <br></br>
                    <Button inverted onClick={this.handleClick} style={{width: '250px'}}>Add Habit</Button> 

                </Segment>

            </div>
        );
    }
}
 
export default Create;