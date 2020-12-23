import React from 'react';
import { Checkbox, Table } from 'semantic-ui-react';

class ScoreCard extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="four-step-method">
            <Table style={{width: '555px'}}>
                <Table.Row>
                    <Checkbox 
                        label='Morning Routine'
                        onClick={this.props.handleClickCheckbox}
                    />
                </Table.Row>
                <Table.Row>
                    <Checkbox 
                        label='90-Minute Deep Work Session'
                        onClick={this.props.handleClickCheckbox}
                    />
                </Table.Row>
                <Table.Row>
                    <Checkbox 
                        label='Evening Routine'
                        onClick={this.props.handleClickCheckbox}
                    />
                </Table.Row>
            </Table>
        </div>
        );
    }
}
 
export default ScoreCard;