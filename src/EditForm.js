import React from 'react';
import { Form } from 'semantic-ui-react';

class EditForm extends React.Component {
    state = {  
        name: ''
    } 

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitChange = e => {
        let updatedHabit = this.state.name
        this.setState({name: updatedHabit})
        let updatedHabit2 = this.state.name
        this.props.updateArrayWithUpdatedHabit(updatedHabit2)
        this.setState({name: ''})
    }

    render() {
        return (   
            <div>
                <Form onSubmit={this.handleSubmitChange}> 
                    <Form.Input name='name' onChange={this.handleChange} placeholder='Your Changes...' style={{width: '250px'}} type='text' value={this.state.name}/>
                    <Form.Button style={{width: '250px'}} type='submit' >Submit Change</Form.Button>
                </Form>
            </div>    
        );
    }
}
 
export default EditForm; 