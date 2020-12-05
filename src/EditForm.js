import React from 'react';
import { Button, Input } from 'semantic-ui-react';

class EditForm extends React.Component {
    state = {  
        name: '',
        updatedHabit: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // handleClick = e => {
    //     e.preventDefault()
    //     console.log('handleClick')
    // }

    render() { 
        return (  
            <div>
                <h1>EDIT FORM</h1>
                    <Input name='name' onChange={this.handleChange} placeholder='Your Changes...' style={{width: '250px'}} type='text' value={this.state.name}/><br></br><br></br>
                    <Button inverted onClick={() => this.props.handleSubmitClick} style={{width: '250px'}} type='submit'>Submit Change</Button>
            </div>
        );
    }
}
 
export default EditForm;