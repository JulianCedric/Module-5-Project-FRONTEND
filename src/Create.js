import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

class Create extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>

                <Segment inverted>

                    <Form inverted>

                        <Form.Input placeholder='New Habit...' style={{width: '250px'}}/>

                        <Button inverted type='submit' style={{width: '250px'}}>Add Habit</Button> 

                    </Form>

                </Segment>

            </div>
        );
    }
}
 
export default Create; 