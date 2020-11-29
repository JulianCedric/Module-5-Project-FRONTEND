import React from 'react';
import { Button, Segment, Table } from 'semantic-ui-react';

class ReadUpdateDelete extends React.Component {
    state = {  }

    handleEditClick = e => {
        console.log('BUTTON CLICKED: [ Edit Habit ]')
    }

    handleDeleteClick = e => {
        console.log('BUTTON CLICKED: [ Delete Habit ]')
    }

    render() { 
        return (  
            <div>

                <Segment inverted>

                    <Table celled inverted selectable>

                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>'Read'</Table.HeaderCell>
                                <Table.HeaderCell>'Update'</Table.HeaderCell>
                                <Table.HeaderCell>'Delete'</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.props.habits.map(habit => 
                            <Table.Row key={habit.id} habit={habit}>
                                <Table.Cell>{habit}</Table.Cell>
                                <Table.Cell><Button inverted onClick={this.handleEditClick}>Edit Habit</Button></Table.Cell>
                                <Table.Cell><Button inverted onClick={this.handleDeleteClick}>Delete Habit</Button></Table.Cell>
                            </Table.Row>)}
                        </Table.Body>

                    </Table>

                </Segment>

            </div>
        );
    }
}
 
export default ReadUpdateDelete;