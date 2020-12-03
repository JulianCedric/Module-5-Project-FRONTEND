import React from 'react';
import { Form } from 'semantic-ui-react';

class EditForm extends React.Component {
    state = {  
        updatedHabit: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        console.log('BUTTON CLICKED: [ Submit Change ]')
        console.log('from: ', this.props.editHabit, 'to:', this.state.updatedHabit)
        let editHabit = this.props.editHabit
        let updatedHabit = this.state.updatedHabit
        this.props.handleEditFormSubmit(editHabit, updatedHabit)
        this.setState({updatedHabit: ''})
    }

    render() { 
        return (  
            <div>
                <h1>EDIT FORM</h1>
                <Form>
                    <Form.Input name='updatedHabit' onChange={this.handleChange} placeholder={this.props.editHabitw} style={{width: '250px'}} type='text' value={this.state.updatedHabit}/>
                    <Form.Button inverted onClick={this.handleSubmit} style={{width: '250px'}} type='submit'>Submit Change</Form.Button>
                </Form>
            </div>
        );
    }
}
 
export default EditForm;