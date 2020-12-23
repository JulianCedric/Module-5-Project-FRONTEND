import React from 'react';
import './App.css';
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

class Lab extends React.Component {
    state = {  }
    render() { 
        return (  
            <div style={{color: 'white'}}>
                <Segment style={{height: '140px'}}>
                    <Grid textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name='lab' />
                                        <h1>Lab</h1>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

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
                                                <Button inverted color='violet'>
                                                    CUE
                                                </Button>
                                                <Button inverted color='violet'>
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
 
export default Lab;