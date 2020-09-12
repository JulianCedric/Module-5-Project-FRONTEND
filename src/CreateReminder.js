import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

const API_REMINDERS = 'http://localhost:3001/api/v1/reminders'

class CreateReminder extends React.Component {
    state = {  
        duration: "",
        startDate: ""
    }

    handlechange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let newReminder = this.state
        this.props.addReminder(newReminder)
        this.setState({
            duration: "",
            startDate: ""
        })
    }

    render() { 
        return (  
            <div>
                <Segment inverted>
                    <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input placeholder='Start Date' type="text" name="startDate" value={this.state.startDate} onChange={this.handleChange} style={{width: "250px"}}/>
                    </Form.Group>
                    <Form.Checkbox label="Add this quote: 'What's easy to do is also easy not to do. —JIM ROHN'" />
                    <Button type='submit' class="ui inverted purple button" style={{width: "250px"}} >Add Reminder</Button>
                    </Form>
                </Segment>
                <br></br>
                <br></br>
                <br></br>
                <br></br>                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>                
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}
 
export default CreateReminder;