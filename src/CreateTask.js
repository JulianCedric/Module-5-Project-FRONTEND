import React from 'react';
import { Form } from 'semantic-ui-react';

class CreateTask extends React.Component {
    state = {
        newTask: ''
    };

    handleChange = (e, { task, value }) => this.setState({ [task]: value })

    handleSubmit = () => {
        const { task } = this.state 

        this.setState({ newTask: task })
    }

    render() { 
        console.log(this.state.newTask);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder='New Task'
                            task='task'
                            value={this.newTask}
                            onChange={this.handleChange}
                        />
                        <Form.Button content='Add Task' />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
 
export default CreateTask;