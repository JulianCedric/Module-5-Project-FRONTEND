import React from 'react';
import {
    Button,
    Card,
    Divider,
    Grid,
    Header,
    Icon,
    Search,
    Segment,
  } from 'semantic-ui-react';

class HumanBehaviorFramework extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="four-step-method">
                    <Segment inverted style={{width: '555px'}}>
                        <Grid columns={2} stackable textAlign='center'>
                            <Divider vertical/>
                            <Grid.Row verticalAlign='middle'>
                                <Grid.Column>
                                    <Card color='violet'>
                                        <Card.Content>
                                            <Card.Header>
                                                Problem Phase
                                            </Card.Header>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button inverted color='violet' onClick={this.handleClickCue}>
                                                    CUE
                                                </Button>
                                                <Button inverted color='violet' onClick={this.handleClickCraving}>
                                                    CRAVING
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card color='violet'>
                                        <Card.Content>
                                            <Card.Header>
                                                Solution Phase
                                            </Card.Header>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button inverted color='violet'>
                                                    RESPONSE
                                                </Button>
                                                <Button inverted color='violet'>
                                                    REWARD
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>                            
                        </Grid>
                    </Segment>
                </div>
        );
    }
}
 
export default HumanBehaviorFramework;