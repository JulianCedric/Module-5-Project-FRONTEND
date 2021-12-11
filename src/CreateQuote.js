import React from 'react';
import { Form } from 'semantic-ui-react';

class CreateQuote extends React.Component {
    state = {
        newQuote: ''
    };

    handleChange = (e, { quote, value }) => this.setState({ [quote]: value })

    handleSubmit = () => {
        const { quote } = this.state 

        this.setState({ newQuote: quote })
    }

    render() { 
        console.log(this.state.newQuote);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder='New Quote'
                            quote='quote'
                            value={this.newQuote}
                            onChange={this.handleChange}
                        />
                        <Form.Button content='Add Quote' />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
 
export default CreateQuote;