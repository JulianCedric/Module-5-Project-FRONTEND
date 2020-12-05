import React from 'react';
import { Button, Segment, Table } from 'semantic-ui-react';
import EditForm from './EditForm';

class ReadUpdateDelete extends React.Component {
    state = {  
        showEditForm: false,
        editHabit: ''
    }

    handleEditClick = habit => {
        console.log('BUTTON CLICKED: [ Edit Habit ]')
        console.log('ELEMENT BEING UPDATED: ', habit)
        this.setState({showEditForm: true})
        this.setState({editHabit: habit})
    }

    handleDeleteClick = habit => {
        console.log('BUTTON CLICKED: [ Delete Habit ]')
        console.log(habit)
        this.props.deleteHabit(habit)
    }

    render() { 
        console.log(this.state.showEditForm)
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
                                <Table.Cell><Button inverted onClick={() => this.handleEditClick(habit)}>Edit Habit</Button></Table.Cell>
                                <Table.Cell><Button inverted onClick={() => this.handleDeleteClick(habit)}>Delete Habit</Button></Table.Cell>
                            </Table.Row>)}
                        </Table.Body>

                    </Table>

                    {this.state.showEditForm
                        ? <EditForm showEditFormFalse={this.showEditFormFalse} updateArrayWithUpdatedHabit={this.props.updateArrayWithUpdatedHabit}/>
                        : null
                    }

                </Segment>

            </div>
        );
    }
}
 
export default ReadUpdateDelete;